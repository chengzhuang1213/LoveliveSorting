import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import tournament from "../dist/app.js";

const {
  MEMBERS,
  TOTAL_CHOICES,
  beginTournament,
  completedChoiceCount,
  createTournament,
  getPlacements,
  replayPreviousRound,
  selectWinner,
  undoLastChoice
} = tournament;

function playCurrentMatch(state, pick = 0) {
  if (!state.qualifier.winnerId) {
    assert.equal(selectWinner(state, state.qualifier.competitors[pick]), true);
    return;
  }
  const match = state.rounds[state.roundIndex].matches[state.matchIndex];
  assert.equal(selectWinner(state, match.competitors[pick]), true);
}

test("名单正好包含65名且ID唯一", () => {
  assert.equal(MEMBERS.length, 65);
  assert.equal(new Set(MEMBERS.map((member) => member.id)).size, 65);
  assert.equal(new Set(MEMBERS.map((member) => member.name)).size, 65);
});

test("已分配的角色头像文件全部存在", () => {
  const distUrl = new URL("../dist/", import.meta.url);
  assert.equal(MEMBERS.every((member) => member.image), true);
  MEMBERS.forEach((member) => {
    const imagePath = fileURLToPath(new URL(member.image, distUrl));
    assert.equal(existsSync(imagePath), true, `${member.name}的头像文件不存在`);
  });
});

test("厨力战报包含65名角色的内嵌头像", () => {
  const source = readFileSync(new URL("../dist/share-avatar-data.js", import.meta.url), "utf8");
  const context = { window: {} };
  runInNewContext(source, context);
  const avatars = context.window.LOVELIVE_SHARE_AVATARS;
  assert.equal(Object.keys(avatars).length, 65);
  MEMBERS.forEach((member) => {
    assert.match(avatars[member.name], /^data:image\/(?:png|jpeg);base64,/, `${member.name}缺少内嵌头像`);
  });
});

test("六个团体的图片标识全部存在", () => {
  const distUrl = new URL("../dist/", import.meta.url);
  const groups = new Map(MEMBERS.map((member) => [member.group, member.groupLogo]));
  assert.equal(groups.size, 6);
  groups.forEach((logo, group) => {
    assert.ok(logo, `${group}没有配置图片标识`);
    const logoPath = fileURLToPath(new URL(logo, distUrl));
    assert.equal(existsSync(logoPath), true, `${group}的图片标识不存在`);
  });
});

test("塞拉斯使用短显示名", () => {
  assert.equal(MEMBERS.some((member) => member.name === "塞拉斯"), true);
  assert.equal(MEMBERS.some((member) => member.name.includes("柳田")), false);
});

test("两人资格赛胜者挑战一名轮空者，首轮保持32场", () => {
  const state = createTournament(MEMBERS, () => 0.5);
  assert.equal(state.status, "draw");
  assert.equal(state.qualifier.competitors.length, 2);
  assert.equal(state.qualifier.winnerId, null);
  assert.equal(state.rounds[0].matches.length, 32);
  assert.deepEqual(state.rounds[0].matches[0].competitors, [state.qualifier.byeId]);
  assert.equal(state.rounds[0].matches.slice(1).every((match) => match.competitors.length === 2), true);
  const allocated = [
    ...state.qualifier.competitors,
    ...state.rounds[0].matches.flatMap((match) => match.competitors)
  ];
  assert.equal(new Set(allocated).size, 65);
});

test("签表公布阶段不能提前选择，开赛后保持原签表", () => {
  const state = createTournament(MEMBERS, () => 0.42);
  const originalDraw = structuredClone(state);
  const firstMember = state.qualifier.competitors[0];
  assert.equal(selectWinner(state, firstMember), false);
  assert.equal(beginTournament(state), true);
  assert.equal(selectWinner(state, firstMember), true);
  assert.deepEqual(state.rounds[0].matches[0].competitors, [firstMember, originalDraw.qualifier.byeId]);
  assert.deepEqual(state.rounds[0].matches.slice(1), originalDraw.rounds[0].matches.slice(1));
});

test("完整比赛经过64次选择产生冠军和前八", () => {
  const state = createTournament(MEMBERS, () => 0.25);
  assert.equal(beginTournament(state), true);
  let choices = 0;
  while (state.status !== "complete") {
    playCurrentMatch(state);
    choices += 1;
  }
  assert.equal(choices, TOTAL_CHOICES);
  assert.equal(completedChoiceCount(state), TOTAL_CHOICES);
  assert.deepEqual(state.rounds.map((round) => round.matches.length), [32, 16, 8, 4, 2, 1]);
  const placements = getPlacements(state);
  assert.ok(placements.championId);
  assert.ok(placements.runnerUpId);
  assert.equal(placements.topFour.length, 4);
  assert.equal(placements.topEight.length, 8);
});

test("资格赛和首轮选择都可以逐步撤销", () => {
  const state = createTournament(MEMBERS, () => 0.1);
  beginTournament(state);
  const qualifierWinner = state.qualifier.competitors[0];
  selectWinner(state, qualifierWinner);
  assert.equal(state.qualifier.winnerId, qualifierWinner);
  const firstWinner = state.rounds[0].matches[0].competitors[0];
  selectWinner(state, firstWinner);
  assert.equal(state.matchIndex, 1);
  assert.equal(undoLastChoice(state), true);
  assert.equal(state.matchIndex, 0);
  assert.equal(state.rounds[0].matches[0].winnerId, null);
  assert.equal(undoLastChoice(state), true);
  assert.equal(state.qualifier.winnerId, null);
  assert.deepEqual(state.rounds[0].matches[0].competitors, [state.qualifier.byeId]);
});

test("重开上一轮保留原对阵并删除之后轮次", () => {
  const state = createTournament(MEMBERS, () => 0.75);
  beginTournament(state);
  while (state.roundIndex === 0) playCurrentMatch(state);
  const openingPairs = structuredClone(state.rounds[0].matches.map((match) => match.competitors));
  playCurrentMatch(state);
  assert.equal(replayPreviousRound(state), true);
  assert.equal(state.roundIndex, 0);
  assert.equal(state.rounds.length, 1);
  assert.deepEqual(state.rounds[0].matches.map((match) => match.competitors), openingPairs);
  assert.equal(state.rounds[0].matches.every((match) => match.winnerId === null), true);
});
