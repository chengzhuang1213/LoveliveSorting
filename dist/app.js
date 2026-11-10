const MEMBER_IMAGES = {
  "绚濑绘里": "../image/1Ayase-Eli-MqG2az.png",
  "星空凛": "../image/2Hoshizora-Rin-sgemWZ.png",
  "小泉花阳": "../image/3Koizumi-Hanayo-kdVFUI.png",
  "高坂穗乃果": "../image/4Kousaka-Honoka-m1dEvp.png",
  "国木田花丸": "../image/5Kunikida-Hanamaru-nqbGF1.png",
  "黑泽黛雅": "../image/6Kurosawa-Dia-gjXWOR.png",
  "黑泽露比": "../image/7Kurosawa-Ruby-UbPDc8.png",
  "松浦果南": "../image/8Matsuura-Kanan-qlLtYT.png",
  "南小鸟": "../image/9Minami-Kotori-06DzDA.png",
  "西木野真姬": "../image/10Nishikino-Maki-UFQB4E.png",
  "小原鞠莉": "../image/11Ohara-Mari-npxzmE.png",
  "樱内梨子": "../image/12Sakurauchi-Riko-xHBC2K.png",
  "园田海未": "../image/13Sonoda-Umi-RVB62t.png",
  "高海千歌": "../image/14Takami-Chika-RUJSlZ.png",
  "东条希": "../image/15Toujou-Nozomi-ToXNZh.png",
  "津岛善子": "../image/16Tsushima-Yoshiko-VytOHY.png",
  "渡边曜": "../image/17Watanabe-You-ohUDHk.png",
  "矢泽妮可": "../image/18Yazawa-Nico-agidhY.png",
  "朝香果林": "../image/24Asaka-Karin-fd7iBo.png",
  "艾玛·维尔德": "../image/28Emma-Verde-cn5mja.png",
  "近江彼方": "../image/50Konoe-Kanata-xB16n7.png",
  "宫下爱": "../image/62Miyashita-Ai-3rwYaJ.png",
  "中须霞": "../image/67Nakasu-Kasumi-M5ZCuB.png",
  "樱坂雫": "../image/70Osaka-Shizuku-4TmRNm.png",
  "天王寺璃奈": "../image/97Tennoji-Rina-tZo8rZ.png",
  "上原步梦": "../image/102Uehara-Ayumu-TgB2p1.png",
  "优木雪菜": "../image/110Yuki-Setsuna-44Ojdt.png",
  "三船栞子": "../image/113Mifune-Shioriko-o5YINu.png",
  "涩谷香音": "../image/118Shibuya-Kanon-v7t9EL.png",
  "唐可可": "../image/119Tang-Keke-DsQVZW.png",
  "岚千砂都": "../image/120Arashi-Chisato-NGhy5X.png",
  "平安名堇": "../image/121Heanna-Sumire-pZiy0V.png",
  "叶月恋": "../image/122Hazuki-Ren-vhPCUT.png",
  "米娅·泰勒": "../image/123Mia-Taylor-88B8V6.png",
  "钟岚珠": "../image/124Lanzhu-ttDPY2.png",
  "樱小路希奈子": "../image/172Sakurakoji-Kinako-dQVwkG.png",
  "米女芽衣": "../image/173Yoneme-Mei-tsct9m.png",
  "若菜四季": "../image/174Wakana-Shiki-fxvbKO.png",
  "鬼塚夏美": "../image/175Onitsuka-Natsumi-pUUL81.png",
  "维恩·玛格丽特": "../image/178Margarete-Wien-9s7aq5.png",
  "日野下花帆": "../image/203Kaho-Hinoshita-obf8Nh.png",
  "村野沙耶香": "../image/204Sayaka-Murano-3nc2Ol.png",
  "乙宗梢": "../image/205Kozue-Otomune-aCtlXr.png",
  "夕雾缀理": "../image/206Tsuzuri-Yugiri-jGUNrA.png",
  "大泽瑠璃乃": "../image/207Rurino-Osawa-dh0WWJ.png",
  "藤岛慈": "../image/208Megumi-Fujishima-7wXwZW.png",
  "鬼塚冬毬": "../image/209Tomari-Onitsuka-oZzgZo.png",
  "百生吟子": "../image/224Ginko-Momose-0YjRmV.png",
  "徒町小铃": "../image/225Kosuzu-Kachimachi-NQRyno.png",
  "安养寺姬芽": "../image/226Hime-Anyoji-r3RVtI.png",
  "桂城泉": "../image/229Izumi-Katsuragi-kASjh8.png",
  "塞拉斯": "../image/230Ceras-Yanagida-Lilienfeld-f2hQLe.png",
  "锦上舞香": "../image/hasu-maika.png",
  "令泽葵": "../image/hasu-aoi.png",
  "紫轮美音": "../image/hasu-mion.png",
  "高桥波尔卡": "../image/267Polka-Takahashi-of8qct.png",
  "麻布麻衣": "../image/268Mai-Azabu-NTVGA3.png",
  "五桐玲": "../image/269Akira-Goto-uOxz7f.png",
  "驹形花火": "../image/270Hanabi-Komagata-7u2gO0.png",
  "金泽奇迹": "../image/271Miracle-Kanazawa-NFxAZ7.png",
  "调布乃梨子": "../image/272Noriko-Chofu-W2l36B.png",
  "春宫悠久里": "../image/273Yukuri-Harumiya-N5gp0a.png",
  "此花辉夜": "../image/274Aurora-Konohana-8eB7tm.png",
  "山田真绿": "../image/275Midori-Yamada-8eUwC9.png",
  "佐佐木翔音": "../image/276Shion-Sasaki-EnFU5s.png"
};

const GROUP_LOGOS = {
  "μ’s": "../image/logos/muse.png",
  "Aqours": "../image/logos/aqours.png",
  "虹咲学园学园偶像同好会": "../image/logos/nijigasaki.png",
  "Liella!": "../image/logos/liella.png",
  "莲之空女学院学园偶像俱乐部": "../image/logos/hasunosora.png",
  "生存艰难部！": "../image/logos/ikizuribu.png"
};

const MEMBERS = [
  ...[
    "高坂穗乃果", "绚濑绘里", "南小鸟", "园田海未", "星空凛", "西木野真姬", "东条希", "小泉花阳", "矢泽妮可"
  ].map((name) => ({ name, group: "μ’s" })),
  ...[
    "高海千歌", "樱内梨子", "松浦果南", "黑泽黛雅", "渡边曜", "津岛善子", "国木田花丸", "小原鞠莉", "黑泽露比"
  ].map((name) => ({ name, group: "Aqours" })),
  ...[
    "上原步梦", "中须霞", "樱坂雫", "朝香果林", "宫下爱", "近江彼方", "优木雪菜", "艾玛·维尔德", "天王寺璃奈", "三船栞子", "米娅·泰勒", "钟岚珠"
  ].map((name) => ({ name, group: "虹咲学园学园偶像同好会" })),
  ...[
    "涩谷香音", "唐可可", "岚千砂都", "平安名堇", "叶月恋", "樱小路希奈子", "米女芽衣", "若菜四季", "鬼塚夏美", "维恩·玛格丽特", "鬼塚冬毬"
  ].map((name) => ({ name, group: "Liella!" })),
  ...[
    "日野下花帆", "村野沙耶香", "乙宗梢", "夕雾缀理", "大泽瑠璃乃", "藤岛慈", "百生吟子", "徒町小铃", "安养寺姬芽", "塞拉斯", "桂城泉", "锦上舞香", "令泽葵", "紫轮美音"
  ].map((name) => ({ name, group: "莲之空女学院学园偶像俱乐部" })),
  ...[
    "高桥波尔卡", "麻布麻衣", "五桐玲", "驹形花火", "金泽奇迹", "调布乃梨子", "春宫悠久里", "此花辉夜", "山田真绿", "佐佐木翔音"
  ].map((name) => ({ name, group: "生存艰难部！" }))
].map((member, index) => ({
  id: `member-${index + 1}`,
  image: MEMBER_IMAGES[member.name] || null,
  groupLogo: GROUP_LOGOS[member.group] || null,
  ...member
}));

const ROUND_LABELS = ["首轮正赛", "32强", "16强", "8强", "半决赛", "决赛"];
const ROUND_KICKERS = ["首轮正赛 · 64进32", "32强 · 32进16", "16强 · 16进8", "8强 · 8进4", "半决赛 · 4进2", "决赛 · 冠军战"];
const ROUND_ARRIVAL_LABELS = ["", "32强诞生", "16强诞生", "8强诞生", "四强诞生", "决赛对阵诞生"];
const TOTAL_CHOICES = 64;
const STORAGE_KEY = "lovelive-oshi-tournament-v1";
const LAYOUT_STORAGE_KEY = "lovelive-bracket-layout-v1";

function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function createTournament(members = MEMBERS, random = Math.random) {
  if (members.length !== 65) throw new Error("全员随机模式必须正好包含65名角色");
  const ids = shuffle(members.map((member) => member.id), random);
  const qualifier = { competitors: ids.slice(0, 2), winnerId: null, byeId: ids[2] };
  const openingMatches = [{ competitors: [qualifier.byeId], winnerId: null }];
  for (let index = 3; index < ids.length; index += 2) {
    openingMatches.push({ competitors: ids.slice(index, index + 2), winnerId: null });
  }
  return {
    version: 2,
    createdAt: new Date().toISOString(),
    status: "draw",
    roundIndex: 0,
    matchIndex: 0,
    qualifier,
    rounds: [{ label: ROUND_LABELS[0], matches: openingMatches }]
  };
}

function syncQualifierSlot(state) {
  const firstMatch = state.rounds[0].matches[0];
  firstMatch.competitors = state.qualifier.winnerId
    ? [state.qualifier.winnerId, state.qualifier.byeId]
    : [state.qualifier.byeId];
}

function beginTournament(state) {
  if (state.status !== "draw") return false;
  state.status = "playing";
  return true;
}

function buildNextRound(state) {
  const current = state.rounds[state.roundIndex];
  if (!current || current.matches.some((match) => !match.winnerId)) return false;
  const winners = current.matches.map((match) => match.winnerId);
  if (winners.length === 1) {
    state.status = "complete";
    return true;
  }
  const matches = [];
  for (let index = 0; index < winners.length; index += 2) {
    matches.push({ competitors: winners.slice(index, index + 2), winnerId: null });
  }
  state.roundIndex += 1;
  state.matchIndex = 0;
  state.rounds = state.rounds.slice(0, state.roundIndex);
  state.rounds.push({ label: ROUND_LABELS[state.roundIndex], matches });
  return true;
}

function selectWinner(state, memberId) {
  if (state.status !== "playing") return false;
  if (!state.qualifier.winnerId) {
    if (!state.qualifier.competitors.includes(memberId)) return false;
    state.qualifier.winnerId = memberId;
    syncQualifierSlot(state);
    return true;
  }
  const round = state.rounds[state.roundIndex];
  const match = round?.matches[state.matchIndex];
  if (!match || !match.competitors.includes(memberId) || match.winnerId) return false;
  match.winnerId = memberId;
  if (state.matchIndex < round.matches.length - 1) {
    state.matchIndex += 1;
  } else {
    buildNextRound(state);
  }
  return true;
}

function undoLastChoice(state) {
  if (!state.rounds.length) return false;
  if (state.status === "complete") state.status = "playing";
  if (state.matchIndex > 0) {
    state.matchIndex -= 1;
    state.rounds[state.roundIndex].matches[state.matchIndex].winnerId = null;
    return true;
  }
  if (state.roundIndex === 0) {
    if (!state.qualifier.winnerId) return false;
    state.qualifier.winnerId = null;
    syncQualifierSlot(state);
    return true;
  }
  const previousRoundIndex = state.roundIndex - 1;
  const previousRound = state.rounds[previousRoundIndex];
  state.rounds = state.rounds.slice(0, state.roundIndex);
  state.roundIndex = previousRoundIndex;
  state.matchIndex = previousRound.matches.length - 1;
  previousRound.matches[state.matchIndex].winnerId = null;
  return true;
}

function replayPreviousRound(state) {
  if (state.status === "complete") {
    state.status = "playing";
  } else if (state.roundIndex === 0) {
    return false;
  }
  const targetIndex = state.status === "playing" && state.roundIndex > 0
    ? state.roundIndex - 1
    : Math.max(0, state.roundIndex);
  const targetRound = state.rounds[targetIndex];
  targetRound.matches.forEach((match) => { match.winnerId = null; });
  state.rounds = state.rounds.slice(0, targetIndex + 1);
  state.roundIndex = targetIndex;
  state.matchIndex = 0;
  return true;
}

function completedChoiceCount(state) {
  return (state.qualifier.winnerId ? 1 : 0) + state.rounds.reduce(
    (total, round) => total + round.matches.filter((match) => match.winnerId).length,
    0
  );
}

function getPlacements(state) {
  if (state.status !== "complete" || state.rounds.length < 6) return null;
  const finalRound = state.rounds[5];
  const semifinal = state.rounds[4];
  const quarterfinal = state.rounds[3];
  const championId = finalRound.matches[0].winnerId;
  const runnerUpId = finalRound.matches[0].competitors.find((id) => id !== championId);
  const topFour = semifinal.matches.flatMap((match) => match.competitors);
  const topEight = quarterfinal.matches.flatMap((match) => match.competitors);
  return { championId, runnerUpId, topFour, topEight };
}

function isValidSavedState(state) {
  return Boolean(
    state &&
    state.version === 2 &&
    ["draw", "playing", "complete"].includes(state.status) &&
    Number.isInteger(state.roundIndex) &&
    Number.isInteger(state.matchIndex) &&
    state.qualifier &&
    Array.isArray(state.qualifier.competitors) &&
    state.qualifier.competitors.length === 2 &&
    typeof state.qualifier.byeId === "string" &&
    Array.isArray(state.rounds) &&
    state.rounds.length > 0
  );
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    MEMBERS,
    ROUND_LABELS,
    TOTAL_CHOICES,
    STORAGE_KEY,
    shuffle,
    createTournament,
    beginTournament,
    buildNextRound,
    selectWinner,
    undoLastChoice,
    replayPreviousRound,
    completedChoiceCount,
    getPlacements,
    isValidSavedState
  };
}

const memberById = new Map(MEMBERS.map((member) => [member.id, member]));
const hasDOM = typeof document !== "undefined";

if (hasDOM) {
  const elements = {
    home: document.querySelector("#home-screen"),
    bracket: document.querySelector("#bracket-screen"),
    battle: document.querySelector("#battle-screen"),
    result: document.querySelector("#result-screen"),
    continueButton: document.querySelector("#continue-button"),
    startButton: document.querySelector("#start-button"),
    bracketHomeButton: document.querySelector("#bracket-home-button"),
    drawImageButton: document.querySelector("#draw-image-button"),
    memberSearchInput: document.querySelector("#member-search-input"),
    memberSearchList: document.querySelector("#member-search-list"),
    bracketSearchNote: document.querySelector("#bracket-search-note"),
    bracketViewport: document.querySelector("#bracket-viewport"),
    bracketBoard: document.querySelector("#bracket-board"),
    leftBracketButton: document.querySelector("#left-bracket-button"),
    rightBracketButton: document.querySelector("#right-bracket-button"),
    currentMatchButton: document.querySelector("#current-match-button"),
    bracketWebLayoutButton: document.querySelector("#bracket-web-layout-button"),
    bracketMobileLayoutButton: document.querySelector("#bracket-mobile-layout-button"),
    bracketZoomOutButton: document.querySelector("#bracket-zoom-out-button"),
    bracketZoomResetButton: document.querySelector("#bracket-zoom-reset-button"),
    bracketZoomInButton: document.querySelector("#bracket-zoom-in-button"),
    bracketZoomFitButton: document.querySelector("#bracket-zoom-fit-button"),
    bracketPrimaryButton: document.querySelector("#bracket-primary-button"),
    homeButton: document.querySelector("#home-button"),
    viewBracketButton: document.querySelector("#view-bracket-button"),
    roundKicker: document.querySelector("#round-kicker"),
    roundTitle: document.querySelector("#round-title"),
    progressBar: document.querySelector("#progress-bar"),
    matchCount: document.querySelector("#match-count"),
    roundRemaining: document.querySelector("#round-remaining"),
    competitorGrid: document.querySelector("#competitor-grid"),
    choiceHint: document.querySelector("#choice-hint"),
    undoButton: document.querySelector("#undo-button"),
    replayRoundButton: document.querySelector("#replay-round-button"),
    stageTransition: document.querySelector("#stage-transition"),
    stageTransitionKicker: document.querySelector("#stage-transition-kicker"),
    stageTransitionTitle: document.querySelector("#stage-transition-title"),
    stageTransitionNext: document.querySelector("#stage-transition-next"),
    championCard: document.querySelector("#champion-card"),
    finalistsList: document.querySelector("#finalists-list"),
    summaryImageButton: document.querySelector("#summary-image-button"),
    bracketImageButton: document.querySelector("#bracket-image-button"),
    restartButton: document.querySelector("#restart-button"),
    imageModal: document.querySelector("#image-modal"),
    imageModalTitle: document.querySelector("#image-modal-title"),
    imageModalNote: document.querySelector("#image-modal-note"),
    generatedImage: document.querySelector("#generated-image"),
    downloadImage: document.querySelector("#download-image"),
    closeImageModal: document.querySelector("#close-image-modal")
  };

  let state = loadState();
  let locked = false;
  let currentObjectUrl = null;
  let highlightedMemberId = null;
  let bracketScale = 1;
  let bracketLayoutMode = "web";
  let shareAvatarLoadPromise = null;
  try {
    if (localStorage.getItem(LAYOUT_STORAGE_KEY) === "mobile") bracketLayoutMode = "mobile";
  } catch {
    bracketLayoutMode = "web";
  }
  const memberImageCache = new Map();
  const groupLogoCache = new Map();

  MEMBERS.forEach((member) => {
    if (!member.image) return;
    const image = new Image();
    image.src = member.image;
    memberImageCache.set(member.id, image);
  });

  Object.entries(GROUP_LOGOS).forEach(([group, source]) => {
    const image = new Image();
    image.src = source;
    groupLogoCache.set(group, image);
  });

  function createGroupLogo(member, className) {
    const logo = document.createElement("img");
    logo.className = className;
    logo.src = member.groupLogo;
    logo.alt = member.group;
    return logo;
  }

  function loadState() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return isValidSavedState(value) ? value : null;
    } catch {
      return null;
    }
  }

  function saveState() {
    if (state) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function showScreen(name) {
    elements.home.hidden = name !== "home";
    elements.bracket.hidden = name !== "bracket";
    elements.battle.hidden = name !== "battle";
    elements.result.hidden = name !== "result";
    document.body.classList.toggle("bracket-mode", name === "bracket");
    document.body.classList.toggle("bracket-web-mode", name === "bracket" && bracketLayoutMode === "web");
    document.body.classList.toggle("bracket-mobile-mode", name === "bracket" && bracketLayoutMode === "mobile");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderHome() {
    elements.continueButton.hidden = !state;
    if (state) {
      elements.continueButton.textContent = state.status === "complete"
        ? "查看我的上次结果"
        : state.status === "draw" ? "回到这张签表" : "继续上次选择";
      elements.startButton.textContent = "换一张新签表";
    } else {
      elements.startButton.textContent = "开始命运抽签";
    }
    showScreen("home");
  }

  function fillMemberSearchList() {
    const options = MEMBERS
      .map((member) => {
        const option = document.createElement("option");
        option.value = member.name;
        option.label = member.group;
        return option;
      });
    elements.memberSearchList.replaceChildren(...options);
  }

  function roundTitle(stateValue) {
    if (!stateValue.qualifier.winnerId) return "资格赛";
    if (stateValue.roundIndex === 0 && stateValue.matchIndex === 0) return "首轮第1场";
    if (stateValue.roundIndex === 0) return "首轮双人对决";
    return ROUND_LABELS[stateValue.roundIndex];
  }

  const BRACKET_WIDTH = 2420;
  const BRACKET_HEIGHT = 1760;
  const BRACKET_NODE_WIDTH = 210;
  const BRACKET_SIDE_X = [20, 230, 440, 650, 860];
  const BRACKET_FINAL_X = 1105;
  const BRACKET_TOP = 80;
  const BRACKET_USABLE_HEIGHT = 1600;
  const BRACKET_MATCH_COUNTS = [32, 16, 8, 4, 2, 1];

  function bracketNodePosition(roundIndex, matchIndex) {
    if (roundIndex === BRACKET_MATCH_COUNTS.length - 1) {
      return { x: BRACKET_FINAL_X, y: BRACKET_HEIGHT / 2 };
    }
    const count = BRACKET_MATCH_COUNTS[roundIndex];
    const sideCount = count / 2;
    const isLeft = matchIndex < sideCount;
    const localIndex = isLeft ? matchIndex : matchIndex - sideCount;
    const leftX = BRACKET_SIDE_X[roundIndex];
    return {
      x: isLeft ? leftX : BRACKET_WIDTH - leftX - BRACKET_NODE_WIDTH,
      y: BRACKET_TOP + ((localIndex + 0.5) * BRACKET_USABLE_HEIGHT) / sideCount
    };
  }

  function bracketRegionClass(roundIndex, matchIndex) {
    if (roundIndex === 5) return "final-node";
    if (roundIndex === 4) return matchIndex === 0 ? "semifinal-left" : "semifinal-right";
    const count = BRACKET_MATCH_COUNTS[roundIndex];
    const quarterSize = count / 4;
    if (matchIndex < quarterSize) return "region-muse";
    if (matchIndex < quarterSize * 2) return "region-nijigasaki";
    if (matchIndex < quarterSize * 3) return "region-aqours";
    return "region-hasunosora";
  }

  function createBracketNode(roundIndex, matchIndex) {
    const node = document.createElement("div");
    node.className = "bracket-node";
    node.classList.add(bracketRegionClass(roundIndex, matchIndex));
    node.dataset.round = String(roundIndex);
    node.dataset.index = String(matchIndex);
    const position = bracketNodePosition(roundIndex, matchIndex);
    node.style.left = `${position.x}px`;
    node.style.top = `${position.y}px`;
    const round = state.rounds[roundIndex];
    const match = round?.matches[matchIndex];
    if (roundIndex === 0 && matchIndex === 0) node.classList.add("qualification-node");
    if (state.status === "playing" && roundIndex === state.roundIndex && matchIndex === state.matchIndex) {
      node.classList.add("current-node");
    }
    const number = document.createElement("span");
    number.className = "match-number";
    number.textContent = roundIndex === 0 && matchIndex === 0
      ? "首轮第1场 · 资格赛接入"
      : `${ROUND_LABELS[roundIndex]} · 第${matchIndex + 1}场`;
    node.append(number);
    if (!match) {
      const pending = document.createElement("span");
      pending.className = "pending-node";
      pending.textContent = "待定";
      node.append(pending);
      return node;
    }
    if (roundIndex === 0 && matchIndex === 0) {
      const qualifierDuel = document.createElement("span");
      qualifierDuel.className = "qualifier-duel";
      state.qualifier.competitors.forEach((memberId, competitorIndex) => {
        const member = memberById.get(memberId);
        const participant = document.createElement("span");
        participant.className = "qualifier-member";
        participant.dataset.memberId = memberId;
        if (state.qualifier.winnerId === memberId) participant.classList.add("winner");
        if (state.qualifier.winnerId && state.qualifier.winnerId !== memberId) participant.classList.add("loser");
        if (member.image) {
          const avatar = document.createElement("img");
          avatar.className = "qualifier-avatar";
          avatar.src = member.image;
          avatar.alt = "";
          participant.append(avatar);
        }
        const participantName = document.createElement("span");
        participantName.textContent = member.name;
        participant.append(participantName);
        qualifierDuel.append(participant);
        if (competitorIndex === 0) {
          const versus = document.createElement("b");
          versus.textContent = "VS";
          qualifierDuel.append(versus);
        }
      });

      const connector = document.createElement("span");
      connector.className = "qualifier-connector";
      connector.textContent = state.qualifier.winnerId
        ? `${memberById.get(state.qualifier.winnerId).name}胜出 · 挑战 ↓`
        : "资格赛胜者挑战 ↓";

      const byeMember = memberById.get(state.qualifier.byeId);
      const byeRow = document.createElement("span");
      byeRow.className = "node-member qualifier-bye";
      byeRow.dataset.memberId = byeMember.id;
      if (match.winnerId === byeMember.id) byeRow.classList.add("winner");
      if (match.winnerId && match.winnerId !== byeMember.id) byeRow.classList.add("loser");
      if (byeMember.image) {
        const byeAvatar = document.createElement("img");
        byeAvatar.className = "node-avatar";
        byeAvatar.src = byeMember.image;
        byeAvatar.alt = "";
        byeRow.append(byeAvatar);
      }
      const byeName = document.createElement("span");
      byeName.className = "node-member-name";
      byeName.textContent = byeMember.name;
      const byeStatus = document.createElement("small");
      byeStatus.textContent = match.winnerId === byeMember.id
        ? "晋级"
        : state.qualifier.winnerId
          ? "迎战"
          : "等待挑战";
      byeRow.append(byeName, byeStatus);
      node.append(qualifierDuel, connector, byeRow);
      return node;
    }
    match.competitors.forEach((memberId) => {
      const member = memberById.get(memberId);
      const row = document.createElement("span");
      row.className = "node-member";
      row.dataset.memberId = memberId;
      if (match.winnerId === memberId) row.classList.add("winner");
      if (match.winnerId && match.winnerId !== memberId) row.classList.add("loser");
      if (member.image) {
        const thumbnail = document.createElement("img");
        thumbnail.className = "node-avatar";
        thumbnail.src = member.image;
        thumbnail.alt = "";
        row.append(thumbnail);
      }
      const name = document.createElement("span");
      name.className = "node-member-name";
      name.textContent = member.name;
      const status = document.createElement("small");
      if (match.winnerId === memberId) {
        status.textContent = "晋级";
      } else {
        status.append(createGroupLogo(member, "node-group-logo"));
      }
      row.append(name, status);
      node.append(row);
    });
    return node;
  }

  function createBracketLines() {
    const namespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(namespace, "svg");
    svg.classList.add("bracket-lines");
    svg.setAttribute("viewBox", `0 0 ${BRACKET_WIDTH} ${BRACKET_HEIGHT}`);
    for (let roundIndex = 0; roundIndex < BRACKET_MATCH_COUNTS.length - 1; roundIndex += 1) {
      for (let matchIndex = 0; matchIndex < BRACKET_MATCH_COUNTS[roundIndex]; matchIndex += 1) {
        const targetIndex = Math.floor(matchIndex / 2);
        const from = bracketNodePosition(roundIndex, matchIndex);
        const to = bracketNodePosition(roundIndex + 1, targetIndex);
        const movesRight = from.x < to.x;
        const fromX = movesRight ? from.x + BRACKET_NODE_WIDTH : from.x;
        const toX = movesRight ? to.x : to.x + BRACKET_NODE_WIDTH;
        const middleX = (fromX + toX) / 2;
        const path = document.createElementNS(namespace, "path");
        path.classList.add("bracket-line");
        path.dataset.round = String(roundIndex);
        path.dataset.index = String(matchIndex);
        path.setAttribute("d", `M ${fromX} ${from.y} H ${middleX} V ${to.y} H ${toX}`);
        svg.append(path);
      }
    }
    return svg;
  }

  function buildBracketBoard() {
    elements.bracketBoard.replaceChildren();
    [
      ["left-top", "左上半区"],
      ["left-bottom", "左下半区"],
      ["right-top", "右上半区"],
      ["right-bottom", "右下半区"]
    ].forEach(([className, label]) => {
      const region = document.createElement("div");
      region.className = `bracket-region ${className}`;
      const regionLabel = document.createElement("span");
      regionLabel.textContent = label;
      region.append(regionLabel);
      elements.bracketBoard.append(region);
    });
    elements.bracketBoard.append(createBracketLines());
    ROUND_LABELS.forEach((label, roundIndex) => {
      const headingPositions = roundIndex === 5
        ? [BRACKET_FINAL_X]
        : [BRACKET_SIDE_X[roundIndex], BRACKET_WIDTH - BRACKET_SIDE_X[roundIndex] - BRACKET_NODE_WIDTH];
      headingPositions.forEach((left) => {
        const heading = document.createElement("div");
        heading.className = `bracket-round-label${roundIndex === 5 ? " final-label" : ""}`;
        heading.style.left = `${left}px`;
        heading.textContent = label;
        elements.bracketBoard.append(heading);
      });
      for (let matchIndex = 0; matchIndex < BRACKET_MATCH_COUNTS[roundIndex]; matchIndex += 1) {
        elements.bracketBoard.append(createBracketNode(roundIndex, matchIndex));
      }
    });
  }

  function openingMatchIndexForMember(memberId) {
    const matchIndex = state.rounds[0].matches.findIndex((match) => match.competitors.includes(memberId));
    if (matchIndex >= 0) return matchIndex;
    return state.qualifier.competitors.includes(memberId) ? 0 : -1;
  }

  function highlightMemberRoute(memberId, shouldScroll = true) {
    highlightedMemberId = memberId;
    elements.bracketBoard.querySelectorAll(".route-highlight").forEach((element) => element.classList.remove("route-highlight"));
    if (!memberId) return;
    let matchIndex = openingMatchIndexForMember(memberId);
    if (matchIndex < 0) return;
    const openingIndex = matchIndex;
    for (let roundIndex = 0; roundIndex < BRACKET_MATCH_COUNTS.length; roundIndex += 1) {
      elements.bracketBoard
        .querySelector(`.bracket-node[data-round="${roundIndex}"][data-index="${matchIndex}"]`)
        ?.classList.add("route-highlight");
      if (roundIndex < BRACKET_MATCH_COUNTS.length - 1) {
        elements.bracketBoard
          .querySelector(`.bracket-line[data-round="${roundIndex}"][data-index="${matchIndex}"]`)
          ?.classList.add("route-highlight");
      }
      matchIndex = Math.floor(matchIndex / 2);
    }
    const member = memberById.get(memberId);
    const regionNames = ["左上", "左下", "右上", "右下"];
    elements.bracketSearchNote.textContent = `${member.name}位于${regionNames[Math.floor(openingIndex / 8)]}半区，荧光绿线路是她通往决赛的潜在路线。`;
    if (shouldScroll) scrollToBracketNode(0, openingIndex);
  }

  function scrollToBracketNode(roundIndex, matchIndex) {
    const node = elements.bracketBoard.querySelector(`.bracket-node[data-round="${roundIndex}"][data-index="${matchIndex}"]`);
    if (!node) return;
    elements.bracketViewport.scrollTo({
      left: Math.max(0, node.offsetLeft * bracketScale - 16),
      top: Math.max(0, node.offsetTop * bracketScale - elements.bracketViewport.clientHeight / 2),
      behavior: "smooth"
    });
  }

  function setBracketScale(nextScale, { preserveCenter = true, anchorClientX = null, anchorClientY = null } = {}) {
    const previousScale = bracketScale;
    const viewportRect = elements.bracketViewport.getBoundingClientRect();
    const anchorX = anchorClientX === null
      ? elements.bracketViewport.clientWidth / 2
      : Math.min(elements.bracketViewport.clientWidth, Math.max(0, anchorClientX - viewportRect.left));
    const anchorY = anchorClientY === null
      ? elements.bracketViewport.clientHeight / 2
      : Math.min(elements.bracketViewport.clientHeight, Math.max(0, anchorClientY - viewportRect.top));
    const contentX = (elements.bracketViewport.scrollLeft + anchorX) / previousScale;
    const contentY = (elements.bracketViewport.scrollTop + anchorY) / previousScale;
    bracketScale = Math.min(1.5, Math.max(.25, Math.round(nextScale * 100) / 100));
    elements.bracketBoard.style.zoom = String(bracketScale);
    elements.bracketZoomResetButton.textContent = `${Math.round(bracketScale * 100)}%`;
    elements.bracketZoomOutButton.disabled = bracketScale <= .25;
    elements.bracketZoomInButton.disabled = bracketScale >= 1.5;
    if (preserveCenter) {
      elements.bracketViewport.scrollTo({
        left: Math.max(0, contentX * bracketScale - anchorX),
        top: Math.max(0, contentY * bracketScale - anchorY),
        behavior: "auto"
      });
    }
  }

  function fitBracketToViewport() {
    const widthScale = (elements.bracketViewport.clientWidth - 8) / BRACKET_WIDTH;
    const heightScale = (elements.bracketViewport.clientHeight - 8) / BRACKET_HEIGHT;
    setBracketScale(Math.min(1, widthScale, heightScale), { preserveCenter: false });
    elements.bracketViewport.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }

  function setBracketLayoutMode(mode) {
    bracketLayoutMode = mode === "mobile" ? "mobile" : "web";
    try {
      localStorage.setItem(LAYOUT_STORAGE_KEY, bracketLayoutMode);
    } catch {
      // 部分本地文件环境会限制 localStorage；当前页面仍可正常切换。
    }
    const isWeb = bracketLayoutMode === "web";
    document.body.classList.toggle("bracket-web-mode", isWeb);
    document.body.classList.toggle("bracket-mobile-mode", !isWeb);
    elements.bracketWebLayoutButton.classList.toggle("active", isWeb);
    elements.bracketMobileLayoutButton.classList.toggle("active", !isWeb);
    elements.bracketWebLayoutButton.setAttribute("aria-pressed", String(isWeb));
    elements.bracketMobileLayoutButton.setAttribute("aria-pressed", String(!isWeb));
    if (!isWeb) setBracketScale(1, { preserveCenter: false });
  }

  function renderBracket({ preserveScroll = false } = {}) {
    if (!state) return renderHome();
    const previousLeft = elements.bracketViewport.scrollLeft;
    const previousTop = elements.bracketViewport.scrollTop;
    buildBracketBoard();
    if (highlightedMemberId) highlightMemberRoute(highlightedMemberId, false);
    elements.bracketPrimaryButton.textContent = state.status === "draw"
      ? "从资格赛开始"
      : state.status === "complete" ? "查看比赛结果" : "继续比赛";
    showScreen("bracket");
    setBracketLayoutMode(bracketLayoutMode);
    if (!window.matchMedia("(min-width: 900px)").matches) bracketScale = 1;
    setBracketScale(bracketScale);
    if (preserveScroll) {
      elements.bracketViewport.scrollLeft = previousLeft;
      elements.bracketViewport.scrollTop = previousTop;
    } else if (state.status === "playing") {
      scrollToBracketNode(state.roundIndex, state.matchIndex);
    } else {
      elements.bracketViewport.scrollTo({ left: 0, top: 0, behavior: "auto" });
    }
  }

  function renderBattle() {
    if (!state) return renderHome();
    if (state.status === "draw") return renderBracket();
    if (state.status === "complete") return renderResult();
    const round = state.rounds[state.roundIndex];
    const isQualifier = !state.qualifier.winnerId;
    const match = isQualifier ? state.qualifier : round.matches[state.matchIndex];
    const completed = completedChoiceCount(state);
    elements.roundKicker.textContent = isQualifier ? "资格赛 · 65进64" : ROUND_KICKERS[state.roundIndex];
    elements.roundTitle.textContent = roundTitle(state);
    const roundCompleted = isQualifier ? 0 : round.matches.filter((item) => item.winnerId).length;
    const roundTotal = isQualifier ? 1 : round.matches.length;
    elements.progressBar.style.width = `${(roundCompleted / roundTotal) * 100}%`;
    elements.matchCount.textContent = isQualifier
      ? "资格赛 · 第1场"
      : `第${state.matchIndex + 1}场 / 共${round.matches.length}场`;
    elements.roundRemaining.textContent = isQualifier
      ? "胜者进入首轮第1场"
      : `本轮剩余${round.matches.length - state.matchIndex}场`;
    elements.competitorGrid.classList.remove("triple");
    elements.competitorGrid.replaceChildren(...match.competitors.map(createCompetitorCard));
    elements.choiceHint.textContent = "二选一";
    elements.undoButton.disabled = completed === 0;
    elements.replayRoundButton.disabled = state.roundIndex === 0;
    showScreen("battle");
  }

  function createCompetitorCard(memberId) {
    const member = memberById.get(memberId);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "competitor-card";
    button.dataset.memberId = memberId;
    button.setAttribute("aria-label", `选择${member.name}晋级`);
    const avatar = document.createElement(member.image ? "img" : "span");
    avatar.className = "avatar-placeholder";
    if (member.image) {
      avatar.src = member.image;
      avatar.alt = member.name;
    } else {
      avatar.setAttribute("aria-hidden", "true");
    }
    const name = document.createElement("span");
    name.className = "competitor-name";
    if ([...member.name].length > 8) name.classList.add("long-name");
    name.textContent = member.name;
    const group = createGroupLogo(member, "competitor-group-logo");
    button.append(avatar, name, group);
    button.addEventListener("click", () => chooseMember(memberId, button));
    return button;
  }

  function chooseMember(memberId, button) {
    if (locked) return;
    locked = true;
    button.classList.add("selected");
    elements.competitorGrid.querySelectorAll("button").forEach((item) => { item.disabled = true; });
    window.setTimeout(() => {
      const previousRoundIndex = state.roundIndex;
      selectWinner(state, memberId);
      saveState();
      if (state.status === "playing" && state.roundIndex > previousRoundIndex) {
        showStageTransition();
        return;
      }
      locked = false;
      renderBattle();
    }, 250);
  }

  function showStageTransition() {
    elements.stageTransitionKicker.textContent = "本轮结束";
    elements.stageTransitionTitle.textContent = ROUND_ARRIVAL_LABELS[state.roundIndex];
    elements.stageTransitionNext.textContent = `接下来：${ROUND_KICKERS[state.roundIndex]}`;
    elements.stageTransition.hidden = false;
    window.setTimeout(() => {
      elements.stageTransition.hidden = true;
      locked = false;
      renderBattle();
    }, 900);
  }

  function renderResult() {
    const placements = state ? getPlacements(state) : null;
    if (!placements) return renderHome();
    const champion = memberById.get(placements.championId);
    elements.championCard.innerHTML = "";
    const avatar = document.createElement(champion.image ? "img" : "div");
    avatar.className = "avatar-placeholder";
    if (champion.image) {
      avatar.src = champion.image;
      avatar.alt = champion.name;
    }
    const crown = document.createElement("div");
    crown.className = "champion-crown";
    crown.textContent = "CHAMPION";
    const name = document.createElement("div");
    name.className = "champion-name";
    name.textContent = champion.name;
    const group = document.createElement("div");
    group.className = "champion-group";
    group.append(createGroupLogo(champion, "champion-group-logo"));
    elements.championCard.append(avatar, crown, name, group);

    const rows = placementRows(placements);
    elements.finalistsList.replaceChildren(...rows.map(({ label, id }) => {
      const member = memberById.get(id);
      const row = document.createElement("div");
      row.className = "finalist-row";
      row.innerHTML = `<span class="rank-label"></span><span class="finalist-name"></span><span class="finalist-group"></span>`;
      row.children[0].textContent = label;
      row.children[1].textContent = member.name;
      row.children[2].append(createGroupLogo(member, "finalist-group-logo"));
      return row;
    }));
    showScreen("result");
  }

  function placementRows(placements) {
    const semifinalLosers = placements.topFour.filter(
      (id) => id !== placements.championId && id !== placements.runnerUpId
    );
    const quarterfinalLosers = placements.topEight.filter((id) => !placements.topFour.includes(id));
    return [
      { label: "冠军", id: placements.championId },
      { label: "亚军", id: placements.runnerUpId },
      ...semifinalLosers.map((id) => ({ label: "四强", id })),
      ...quarterfinalLosers.map((id) => ({ label: "八强", id }))
    ];
  }

  function startNewTournament() {
    if (state && !window.confirm("重新开始会清除当前比赛记录，确定继续吗？")) return;
    state = createTournament();
    highlightedMemberId = null;
    elements.memberSearchInput.value = "";
    elements.bracketSearchNote.textContent = "正在打乱命运，生成你的本命签表……";
    saveState();
    elements.startButton.disabled = true;
    elements.startButton.textContent = "正在抽签……";
    window.setTimeout(() => {
      elements.startButton.disabled = false;
      elements.bracketSearchNote.textContent = "按住左键拖动，滚轮缩放签表；搜索角色，可高亮她的夺冠路线。";
      renderBracket();
    }, 650);
  }

  function drawWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines = 2) {
    const characters = [...text];
    const lines = [];
    let current = "";
    for (const character of characters) {
      const next = current + character;
      if (context.measureText(next).width > maxWidth && current) {
        lines.push(current);
        current = character;
      } else {
        current = next;
      }
    }
    if (current) lines.push(current);
    lines.slice(0, maxLines).forEach((line, index) => context.fillText(line, x, y + index * lineHeight));
  }

  function drawAvatar(context, x, y, size, member = null) {
    context.save();
    context.fillStyle = "#ffffff";
    context.strokeStyle = "rgba(255,255,255,.8)";
    context.lineWidth = Math.max(3, size * .025);
    context.beginPath();
    context.roundRect(x, y, size, size, size * .1);
    context.fill();
    const image = member ? memberImageCache.get(member.id) : null;
    if (image?.complete && image.naturalWidth) {
      context.save();
      context.clip();
      const scale = Math.max(size / image.naturalWidth, size / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      context.drawImage(image, x + (size - width) / 2, y + (size - height) / 2, width, height);
      context.restore();
    }
    context.stroke();
    context.restore();
  }

  function drawGroupLogo(context, group, centerX, y, maxWidth, maxHeight) {
    const image = groupLogoCache.get(group);
    if (!image?.complete || !image.naturalWidth) return false;
    const scale = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    context.drawImage(image, centerX - width / 2, y + (maxHeight - height) / 2, width, height);
    return true;
  }

  function prepareCanvas(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#24183b");
    gradient.addColorStop(.52, "#131126");
    gradient.addColorStop(1, "#090817");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    return { canvas, context };
  }

  function generateTreeCanvas() {
    const exportScale = 1.5;
    const { canvas, context } = prepareCanvas(
      Math.round(BRACKET_WIDTH * exportScale),
      Math.round(BRACKET_HEIGHT * exportScale)
    );
    context.scale(exportScale, exportScale);

    const styles = {
      "region-muse": { fill: "rgba(57,22,48,.96)", stroke: "rgba(228,0,127,.7)", route: "#e4007f" },
      "region-nijigasaki": { fill: "rgba(55,43,27,.96)", stroke: "rgba(248,182,86,.7)", route: "#f8b656" },
      "region-aqours": { fill: "rgba(16,43,61,.96)", stroke: "rgba(0,161,233,.7)", route: "#00a1e9" },
      "region-hasunosora": { fill: "rgba(58,34,46,.96)", stroke: "rgba(251,149,165,.7)", route: "#fb95a5" },
      "semifinal-left": { fill: "rgba(68,38,43,.98)", stroke: "rgba(239,104,118,.8)", route: "#ef6876" },
      "semifinal-right": { fill: "rgba(34,48,63,.98)", stroke: "rgba(126,180,211,.8)", route: "#7eb4d3" },
      "final-node": { fill: "rgba(72,58,28,.98)", stroke: "rgba(255,217,109,.9)", route: "#ffd96d" }
    };

    function nodeStyle(roundIndex, matchIndex) {
      return styles[bracketRegionClass(roundIndex, matchIndex)];
    }

    function drawRegion(x, y, width, height, fill, stroke) {
      context.fillStyle = fill;
      context.fillRect(x, y, width, height);
      context.strokeStyle = stroke;
      context.lineWidth = 1;
      context.strokeRect(x + .5, y + .5, width - 1, height - 1);
    }

    drawRegion(0, 0, 1075, 870, "rgba(228,0,127,.09)", "rgba(228,0,127,.25)");
    drawRegion(0, 890, 1075, 870, "rgba(248,182,86,.09)", "rgba(248,182,86,.25)");
    drawRegion(1345, 0, 1075, 870, "rgba(0,161,233,.09)", "rgba(0,161,233,.25)");
    drawRegion(1345, 890, 1075, 870, "rgba(251,149,165,.09)", "rgba(251,149,165,.25)");

    context.font = "900 13px sans-serif";
    context.fillStyle = "#f05aa9";
    context.textAlign = "left";
    context.fillText("左上半区", 24, 58);
    context.fillStyle = "#f8c978";
    context.fillText("左下半区", 24, 1734);
    context.fillStyle = "#54c8f4";
    context.textAlign = "right";
    context.fillText("右上半区", BRACKET_WIDTH - 24, 58);
    context.fillStyle = "#ffb2be";
    context.fillText("右下半区", BRACKET_WIDTH - 24, 1734);

    for (let roundIndex = 0; roundIndex < BRACKET_MATCH_COUNTS.length - 1; roundIndex += 1) {
      for (let matchIndex = 0; matchIndex < BRACKET_MATCH_COUNTS[roundIndex]; matchIndex += 1) {
        const targetIndex = Math.floor(matchIndex / 2);
        const from = bracketNodePosition(roundIndex, matchIndex);
        const to = bracketNodePosition(roundIndex + 1, targetIndex);
        const movesRight = from.x < to.x;
        const fromX = movesRight ? from.x + BRACKET_NODE_WIDTH : from.x;
        const toX = movesRight ? to.x : to.x + BRACKET_NODE_WIDTH;
        const middleX = (fromX + toX) / 2;
        const match = state.rounds[roundIndex]?.matches[matchIndex];
        context.beginPath();
        context.moveTo(fromX, from.y);
        context.lineTo(middleX, from.y);
        context.lineTo(middleX, to.y);
        context.lineTo(toX, to.y);
        context.strokeStyle = match?.winnerId ? nodeStyle(roundIndex, matchIndex).route : "rgba(255,255,255,.18)";
        context.lineWidth = match?.winnerId ? 2.4 : 1.2;
        context.stroke();
      }
    }

    ROUND_LABELS.forEach((label, roundIndex) => {
      const positions = roundIndex === 5
        ? [BRACKET_FINAL_X]
        : [BRACKET_SIDE_X[roundIndex], BRACKET_WIDTH - BRACKET_SIDE_X[roundIndex] - BRACKET_NODE_WIDTH];
      positions.forEach((x) => {
        context.fillStyle = roundIndex === 5 ? "#ffd96d" : "#bbb8c9";
        context.font = "900 12px sans-serif";
        context.textAlign = "center";
        context.fillText(label, x + BRACKET_NODE_WIDTH / 2, 28);
      });
    });

    function drawNode(roundIndex, matchIndex) {
      const position = bracketNodePosition(roundIndex, matchIndex);
      const match = state.rounds[roundIndex]?.matches[matchIndex];
      const isQualifierNode = roundIndex === 0 && matchIndex === 0;
      const height = isQualifierNode ? 86 : 58;
      const top = position.y - height / 2;
      const style = nodeStyle(roundIndex, matchIndex);
      context.beginPath();
      context.roundRect(position.x, top, BRACKET_NODE_WIDTH, height, 9);
      context.fillStyle = style.fill;
      context.fill();
      context.strokeStyle = state.status === "playing" && roundIndex === state.roundIndex && matchIndex === state.matchIndex
        ? "#ffd96d"
        : style.stroke;
      context.lineWidth = 1.3;
      context.stroke();

      context.textAlign = "left";
      context.fillStyle = "#908ca1";
      context.font = "700 8px sans-serif";
      const matchLabel = isQualifierNode
        ? "资格赛 → 首轮第1场"
        : `${ROUND_LABELS[roundIndex]} · 第${matchIndex + 1}场`;
      context.fillText(matchLabel, position.x + 8, top + 13, BRACKET_NODE_WIDTH - 16);

      if (isQualifierNode) {
        const qualifierNames = state.qualifier.competitors.map((id) => memberById.get(id).name);
        const byeName = memberById.get(state.qualifier.byeId).name;
        context.fillStyle = "#ffb7d7";
        context.font = "800 9px sans-serif";
        context.fillText(`${qualifierNames[0]}  VS  ${qualifierNames[1]}`, position.x + 8, top + 31, BRACKET_NODE_WIDTH - 16);
        context.fillStyle = "#908ca1";
        context.font = "700 8px sans-serif";
        const qualifierResult = state.qualifier.winnerId
          ? `${memberById.get(state.qualifier.winnerId).name}胜出 · 挑战 ↓`
          : "资格赛胜者挑战 ↓";
        context.fillText(qualifierResult, position.x + 8, top + 49, BRACKET_NODE_WIDTH - 16);
        context.fillStyle = "#ffffff";
        context.font = "800 10px sans-serif";
        const mainWinner = match?.winnerId
          ? ` → ${memberById.get(match.winnerId).name}晋级`
          : "";
        context.fillText(`${byeName} · ${state.qualifier.winnerId ? "迎战" : "等待挑战"}${mainWinner}`, position.x + 8, top + 70, BRACKET_NODE_WIDTH - 16);
        return;
      }

      if (!match) {
        context.fillStyle = "#716d80";
        context.font = "800 11px sans-serif";
        context.textAlign = "center";
        context.fillText("待定", position.x + BRACKET_NODE_WIDTH / 2, top + 39);
        return;
      }

      match.competitors.forEach((memberId, rowIndex) => {
        const member = memberById.get(memberId);
        const isWinner = match.winnerId === memberId;
        const isLoser = match.winnerId && !isWinner;
        const rowTop = top + 20 + rowIndex * 18;
        context.save();
        if (isLoser) context.globalAlpha = .38;
        context.fillStyle = isWinner ? "#ffffff" : "#dddbe6";
        context.font = `${isWinner ? "900" : "700"} 9px sans-serif`;
        context.textAlign = "left";
        context.fillText(member.name, position.x + 8, rowTop + 11, 148);
        if (isWinner) {
          context.fillStyle = "#ffd96d";
          context.font = "900 8px sans-serif";
          context.textAlign = "right";
          context.fillText("晋级", position.x + BRACKET_NODE_WIDTH - 8, rowTop + 11);
        } else {
          const shortGroup = {
            "虹咲学园学园偶像同好会": "虹咲",
            "莲之空女学院学园偶像俱乐部": "莲之空",
            "生存艰难部！": "生存艰难部"
          }[member.group] || member.group;
          context.fillStyle = style.route;
          context.font = "800 7px sans-serif";
          context.textAlign = "right";
          context.fillText(shortGroup, position.x + BRACKET_NODE_WIDTH - 8, rowTop + 11, 44);
        }
        context.restore();
      });
    }

    for (let roundIndex = 0; roundIndex < BRACKET_MATCH_COUNTS.length; roundIndex += 1) {
      for (let matchIndex = 0; matchIndex < BRACKET_MATCH_COUNTS[roundIndex]; matchIndex += 1) {
        drawNode(roundIndex, matchIndex);
      }
    }

    context.textAlign = "center";
    context.fillStyle = "#8b879b";
    context.font = "700 12px sans-serif";
    context.fillText("LoveLive! 厨力大比拼 · 完整树状签表", BRACKET_WIDTH / 2, BRACKET_HEIGHT - 22);
    return canvas;
  }

  function generateSummaryCanvas(portraits = new Map()) {
    const placements = getPlacements(state);
    const rows = placementRows(placements);
    const { canvas, context } = prepareCanvas(1080, 1920);
    const groupColors = {
      "μ’s": "#e4007f",
      "Aqours": "#00a1e9",
      "虹咲学园学园偶像同好会": "#f8b656",
      "Liella!": "#9a58b5",
      "莲之空女学院学园偶像俱乐部": "#fb95a5",
      "生存艰难部！": "#ff6b45"
    };
    const shortGroups = {
      "虹咲学园学园偶像同好会": "虹咲学园",
      "莲之空女学院学园偶像俱乐部": "莲之空",
      "生存艰难部！": "生存艰难部"
    };
    function drawSummaryBadge(x, y, size, member) {
      const accent = groupColors[member.group] || "#ff91c1";
      const portrait = portraits.get(member.id);
      const gradient = context.createLinearGradient(x, y, x + size, y + size);
      gradient.addColorStop(0, `${accent}cc`);
      gradient.addColorStop(1, "#211a35");
      context.save();
      context.beginPath();
      context.roundRect(x, y, size, size, size * .1);
      context.fillStyle = gradient;
      context.fill();
      if (portrait?.complete && portrait.naturalWidth) {
        context.save();
        context.clip();
        const portraitScale = Math.max(size / portrait.naturalWidth, size / portrait.naturalHeight);
        const portraitWidth = portrait.naturalWidth * portraitScale;
        const portraitHeight = portrait.naturalHeight * portraitScale;
        context.drawImage(
          portrait,
          x + (size - portraitWidth) / 2,
          y + (size - portraitHeight) / 2,
          portraitWidth,
          portraitHeight
        );
        context.restore();
      }
      context.strokeStyle = accent;
      context.lineWidth = Math.max(3, size * .025);
      context.stroke();
      if (!portrait?.complete || !portrait.naturalWidth) {
        context.fillStyle = "rgba(255,255,255,.95)";
        context.font = `900 ${Math.round(size * .34)}px sans-serif`;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText([...member.name][0], x + size / 2, y + size / 2);
      }
      context.restore();
    }
    context.textAlign = "center";
    context.fillStyle = "#ff91c1";
    context.font = "800 30px sans-serif";
    context.fillText("65位学园偶像 · 厨力大比拼", 540, 100);
    context.fillStyle = "#ffffff";
    context.font = "900 72px sans-serif";
    context.fillText("我的终极本命", 540, 190);
    const champion = memberById.get(placements.championId);
    drawSummaryBadge(330, 255, 420, champion);
    context.fillStyle = "#ffd96d";
    context.font = "900 28px sans-serif";
    context.fillText("CHAMPION", 540, 735);
    context.fillStyle = "#ffffff";
    context.font = "900 58px sans-serif";
    context.fillText(champion.name, 540, 815);
    context.fillStyle = "#aaa8bd";
    context.font = "500 25px sans-serif";
    drawWrappedText(context, shortGroups[champion.group] || champion.group, 540, 860, 740, 34);

    const displayRows = rows.slice(1);
    const cardWidth = 450;
    const cardHeight = 200;
    displayRows.forEach((row, index) => {
      const column = index % 2;
      const line = Math.floor(index / 2);
      const x = 70 + column * 490;
      const y = 970 + line * 225;
      context.fillStyle = "rgba(255,255,255,.08)";
      context.beginPath();
      context.roundRect(x, y, cardWidth, cardHeight, 24);
      context.fill();
      const member = memberById.get(row.id);
      drawSummaryBadge(x + 22, y + 22, 156, member);
      context.textAlign = "left";
      context.fillStyle = "#ff91c1";
      context.font = "900 22px sans-serif";
      context.fillText(row.label, x + 198, y + 56);
      context.fillStyle = "#ffffff";
      context.font = "800 30px sans-serif";
      drawWrappedText(context, member.name, x + 198, y + 100, 228, 38);
      context.fillStyle = groupColors[member.group] || "#aaa8bd";
      context.font = "700 18px sans-serif";
      drawWrappedText(context, shortGroups[member.group] || member.group, x + 198, y + 158, 228, 23);
      context.textAlign = "center";
    });
    context.fillStyle = "#77758a";
    context.font = "500 21px sans-serif";
    context.fillText("LoveLive! 厨力大比拼 · 结果仅代表个人选择", 540, 1870);
    return canvas;
  }

  function loadShareAvatarSources() {
    if (window.LOVELIVE_SHARE_AVATARS) return Promise.resolve(window.LOVELIVE_SHARE_AVATARS);
    if (shareAvatarLoadPromise) return shareAvatarLoadPromise;
    shareAvatarLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "./share-avatar-data.js";
      script.onload = () => {
        if (window.LOVELIVE_SHARE_AVATARS) resolve(window.LOVELIVE_SHARE_AVATARS);
        else reject(new Error("Share avatar data did not initialize"));
      };
      script.onerror = () => reject(new Error("Unable to load share avatar data"));
      document.head.append(script);
    }).catch((error) => {
      shareAvatarLoadPromise = null;
      throw error;
    });
    return shareAvatarLoadPromise;
  }

  async function loadSummaryPortraits() {
    const sources = await loadShareAvatarSources();
    const placements = getPlacements(state);
    const members = placementRows(placements).map((row) => memberById.get(row.id));
    const portraits = new Map();
    await Promise.all(members.map((member) => new Promise((resolve, reject) => {
      const source = sources[member.name];
      if (!source) {
        reject(new Error(`Missing embedded portrait for ${member.name}`));
        return;
      }
      const image = new Image();
      image.onload = () => {
        portraits.set(member.id, image);
        resolve();
      };
      image.onerror = () => reject(new Error(`Unable to decode portrait for ${member.name}`));
      image.src = source;
    })));
    return portraits;
  }

  function showCanvas(canvas, filename, options = {}) {
    try {
      canvas.toBlob((blob) => {
        if (!blob) {
          window.alert("图片生成失败，请刷新页面后再试。");
          return;
        }
        if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
        currentObjectUrl = URL.createObjectURL(blob);
        elements.generatedImage.src = currentObjectUrl;
        elements.downloadImage.href = currentObjectUrl;
        elements.downloadImage.download = filename;
        elements.imageModalTitle.textContent = options.title || "厨力战报已生成";
        elements.imageModalNote.textContent = options.note || "长按保存，发给同好看看你的选择";
        elements.downloadImage.textContent = options.downloadLabel || "保存厨力战报";
        elements.imageModal.hidden = false;
        document.body.style.overflow = "hidden";
      }, "image/png");
    } catch {
      window.alert("图片生成失败，请刷新页面后再试。");
    }
  }

  elements.startButton.addEventListener("click", startNewTournament);
  elements.continueButton.addEventListener("click", () => {
    if (state?.status === "complete") renderResult();
    else if (state?.status === "draw") renderBracket();
    else renderBattle();
  });
  elements.bracketHomeButton.addEventListener("click", renderHome);
  elements.homeButton.addEventListener("click", renderHome);
  elements.viewBracketButton.addEventListener("click", () => renderBracket());
  elements.bracketPrimaryButton.addEventListener("click", () => {
    if (state.status === "draw") {
      beginTournament(state);
      saveState();
      renderBattle();
    } else if (state.status === "complete") {
      renderResult();
    } else {
      renderBattle();
    }
  });
  elements.memberSearchInput.addEventListener("input", () => {
    const query = elements.memberSearchInput.value.trim().toLocaleLowerCase("zh-CN");
    if (!query) {
      highlightedMemberId = null;
      elements.bracketBoard.querySelectorAll(".route-highlight").forEach((element) => element.classList.remove("route-highlight"));
      elements.bracketSearchNote.textContent = "按住左键拖动，滚轮缩放签表；搜索角色，可高亮她的夺冠路线。";
      return;
    }
    const exact = MEMBERS.find((member) => member.name.toLocaleLowerCase("zh-CN") === query);
    const matches = exact ? [exact] : MEMBERS.filter((member) => member.name.toLocaleLowerCase("zh-CN").includes(query));
    if (matches.length === 1) {
      highlightMemberRoute(matches[0].id);
    } else {
      elements.bracketSearchNote.textContent = matches.length
        ? `找到${matches.length}名角色，请继续输入完整姓名。`
        : "没有找到这个名字，请检查角色姓名。";
    }
  });
  elements.leftBracketButton.addEventListener("click", () => {
    elements.bracketViewport.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  });
  elements.rightBracketButton.addEventListener("click", () => {
    elements.bracketViewport.scrollTo({ left: BRACKET_WIDTH * bracketScale, top: 0, behavior: "smooth" });
  });
  elements.currentMatchButton.addEventListener("click", () => {
    const roundIndex = state.status === "draw" ? 0 : state.roundIndex;
    const matchIndex = state.status === "draw" ? 0 : state.matchIndex;
    scrollToBracketNode(roundIndex, matchIndex);
  });
  elements.bracketWebLayoutButton.addEventListener("click", () => setBracketLayoutMode("web"));
  elements.bracketMobileLayoutButton.addEventListener("click", () => setBracketLayoutMode("mobile"));
  elements.bracketZoomOutButton.addEventListener("click", () => setBracketScale(bracketScale - .15));
  elements.bracketZoomResetButton.addEventListener("click", () => setBracketScale(1));
  elements.bracketZoomInButton.addEventListener("click", () => setBracketScale(bracketScale + .15));
  elements.bracketZoomFitButton.addEventListener("click", fitBracketToViewport);
  let bracketDrag = null;
  elements.bracketViewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    bracketDrag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: elements.bracketViewport.scrollLeft,
      scrollTop: elements.bracketViewport.scrollTop,
      moved: false
    };
    elements.bracketViewport.setPointerCapture(event.pointerId);
    elements.bracketViewport.classList.add("is-dragging");
  });
  elements.bracketViewport.addEventListener("pointermove", (event) => {
    if (!bracketDrag || bracketDrag.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - bracketDrag.startX;
    const deltaY = event.clientY - bracketDrag.startY;
    if (!bracketDrag.moved && Math.hypot(deltaX, deltaY) < 4) return;
    bracketDrag.moved = true;
    event.preventDefault();
    elements.bracketViewport.scrollLeft = bracketDrag.scrollLeft - deltaX;
    elements.bracketViewport.scrollTop = bracketDrag.scrollTop - deltaY;
  });
  function stopBracketDrag(event) {
    if (!bracketDrag || bracketDrag.pointerId !== event.pointerId) return;
    if (elements.bracketViewport.hasPointerCapture(event.pointerId)) {
      elements.bracketViewport.releasePointerCapture(event.pointerId);
    }
    bracketDrag = null;
    elements.bracketViewport.classList.remove("is-dragging");
  }
  elements.bracketViewport.addEventListener("pointerup", stopBracketDrag);
  elements.bracketViewport.addEventListener("pointercancel", stopBracketDrag);
  elements.bracketViewport.addEventListener("dragstart", (event) => event.preventDefault());
  elements.bracketViewport.addEventListener("wheel", (event) => {
    if (bracketLayoutMode !== "web" || !window.matchMedia("(min-width: 900px)").matches) return;
    event.preventDefault();
    setBracketScale(bracketScale + (event.deltaY < 0 ? .1 : -.1), {
      anchorClientX: event.clientX,
      anchorClientY: event.clientY
    });
  }, { passive: false });
  elements.drawImageButton.addEventListener("click", () => showCanvas(
    generateTreeCanvas(),
    "LoveLive厨力大比拼-完整树状签表.png",
    {
      title: "完整树状签表已生成",
      note: "双指放大查看，长按即可保存完整签表",
      downloadLabel: "保存完整树状图"
    }
  ));
  elements.undoButton.addEventListener("click", () => {
    if (locked || !undoLastChoice(state)) return;
    saveState();
    renderBattle();
  });
  elements.replayRoundButton.addEventListener("click", () => {
    if (locked || !window.confirm("重开上一轮会清除之后的结果，但对阵不会改变。确定继续吗？")) return;
    if (replayPreviousRound(state)) {
      saveState();
      renderBattle();
    }
  });
  elements.restartButton.addEventListener("click", startNewTournament);
  elements.summaryImageButton.addEventListener("click", async () => {
    const originalLabel = elements.summaryImageButton.textContent;
    elements.summaryImageButton.disabled = true;
    elements.summaryImageButton.textContent = "正在生成战报……";
    try {
      const portraits = await loadSummaryPortraits();
      showCanvas(generateSummaryCanvas(portraits), "LoveLive厨力大比拼-分享图.png");
    } catch {
      window.alert("战报头像加载失败，请确认 share-avatar-data.js 与网页位于同一文件夹。");
    } finally {
      elements.summaryImageButton.disabled = false;
      elements.summaryImageButton.textContent = originalLabel;
    }
  });
  elements.bracketImageButton.addEventListener("click", () => showCanvas(
    generateTreeCanvas(),
    "LoveLive厨力大比拼-冠军晋级树.png",
    {
      title: "冠军晋级树已生成",
      note: "完整保留每一轮选择，双指放大查看",
      downloadLabel: "保存冠军晋级树"
    }
  ));
  elements.closeImageModal.addEventListener("click", () => {
    elements.imageModal.hidden = true;
    document.body.style.overflow = "";
  });

  fillMemberSearchList();
  renderHome();
}

