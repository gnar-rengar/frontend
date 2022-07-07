const position = ['탑', '정글', '미드', '원딜', '서폿'] as const;

const voiceChannel = ['디스코드', '롤 인보이스', '기타'] as const;

const communication = [
  '텐션 높게, 즐겁게 얘기하는 플레이가 좋아요.',
  '필요한 소통만 하는게 좋아요.',
  '조용히 오더만 들을게요',
  '피드백은 언제나 환영해요',
] as const;

const playStyle = [
  ['교전지향', '안전추구'],
  ['라인전위주', '라인전위주'],
  ['올라운더', '원챔장인'],
  ['피지컬', '뇌지컬'],
];

const onBoardingErrorMessage = {
  nickName: '정확한 소환사명을 입력해주세요.',
  nickNameCheck: '확인 버튼을 통해 소환사명을 확인해주세요',
  checkbox: '하나 이상 최대 두 포지션을 선택해주셔야 듀오 매칭이 가능해요',
};

const joyfulReasons = [
  '텐션이 나랑 잘 맞았어요.',
  '좋은 피드백을 해주셨어요.',
  '팀워크가 잘 맞아요.',
  '분위기를 잘 띄워주셨어요.',
  '긍정적인 플레이어에요.',
];

const awfulReasons = [
  '최악이에요. 그냥 걔 싫어요!',
  '협곡의 악의 축을 만났네요.',
  '욕설, 비방을 했어요.',
  '분노 조절을 못해요.',
];

const reviewWriteErrorMessage = {
  feedback: '하나 이상 골라주세요',
};

const tendencyQuestion = [
  '어두컴컴한 적 정글..당신은',
  '당신의 라인에 빅웨이브가 있을 때',
  '하고 싶었던 모스트 챔피언의\n카운터 픽이 나왔을 때, 당신은',
  '2:1로 쫓기던 중,\n같은 팀이 백업을 왔다.',
];

const tendencyAnswer = [
  ['욕심내서 훔쳐 먹는다', '와드만 하고 간다'],
  ['우리 팀 빨리와!! 핑을 찍는다', '내가 갈게!! 로밍을 간다'],
  ['숙련도로 승부한다. 그대로 모스트 픽', '다른 챔프도 괜찮아. 아쉽지만 다른 챔피언을 픽한다.'],
  ['도망가! 얘네 스킬 다 있어 백핑을 찍는다.', '2:2야 이거 쌉가능1 가고 있음 핑을 찍는다.'],
];

const tendencyImage = {
  start: '/expression/cupcake.png',
  answer: [
    '/expression/cemetery.png',
    '/expression/zed.png',
    '/expression/conflict.png',
    '/expression/cookie.png',
  ],
  end: '/expression/penguin.png',
};

export {
  position,
  voiceChannel,
  communication,
  playStyle,
  onBoardingErrorMessage,
  joyfulReasons,
  awfulReasons,
  reviewWriteErrorMessage,
  tendencyQuestion,
  tendencyAnswer,
  tendencyImage,
};
