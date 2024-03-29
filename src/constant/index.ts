import type { Position } from '../types/api.type';

const position = [
  ['탑', 'top'],
  ['정글', 'jungle'],
  ['미드', 'mid'],
  ['원딜', 'adcarry'],
  ['서폿', 'support'],
] as const;

const voiceChannel = ['디스코드', '롤 인보이스'] as const;

const communication = [
  '높은 텐션으로 소통하는 플레이를 좋아해요',
  '필요한 소통만 하는 것을 좋아해요',
  '조용히 듣는 것을 좋아해요',
  '피드백은 언제나 환영해요',
] as const;

const playStyleText = {
  battle: ['교전지향', '안전추구'],
  line: ['라인전위주', '로밍위주'],
  champion: ['원챔장인', '올라운더'],
  physical: ['뇌지컬', '피지컬'],
};

const onBoardingErrorMessage = {
  nickName: '소환사명을 입력해주세요',
  nickNameCheck: '확인 버튼을 통해 소환사명을 확인해주세요',
  notExist: '존재하지 않는 소환사명이에요',
  positionMin: '하나 이상 선택해주셔야 듀오 매칭이 가능해요',
  positionMax: '최대 두 포지션을 선택할 수 있어요',
  useVoice: '음성채팅을 사용하시는지 알려주세요',
  voiceAndCommunication: '하나 이상 선택해주셔야 해요',
  choicePlayStyle: '플레이스타일 테스트 여부를 선택해주세요',
};

const goodReviewOptions = [
  '텐션이 나랑 잘 맞았어요.',
  '좋은 피드백을 해주셨어요.',
  '팀워크가 잘 맞아요.',
  '분위기를 잘 띄워주셨어요.',
  '긍정적인 플레이어에요.',
];

const badReviewOptions = [
  '시간 약속을 안지켰어요',
  '훈수, 욕설, 비방을 했어요',
  '쉽게 게임을 포기해요',
  '배려 없는 플레이를 했어요',
];

const reviewWriteErrorMessage = {
  feedback: '하나 이상 골라주세요',
};

const tendencyQuestion = [
  '어두컴컴한 적 정글..당신은',
  '내 상대가 라인을 밀고 로밍을 간다',
  '하고 싶었던 모스트 챔피언의\n카운터 픽이 나왔을 때, 당신은',
  '2:1로 쫓기던 중,\n같은 팀이 백업을 왔다.',
];

const tendencyAnswer = [
  ['욕심내서 훔쳐 먹는다', '와드만 하고 간다'],
  ['조금만 버텨! 이것만 밀고 따라갈게', '내 라인이 좋지 않지만, 바로 뒤따라간다'],
  ['숙련도로 승부한다. 그대로 모스트 픽', '다른 챔프도 괜찮아. 아쉽지만 다른 챔피언을 픽한다.'],
  ['도망가! 얘네 스킬 다 있어 백핑을 찍는다.', '2:2야 이거 쌉가능! 가고 있음 핑을 찍는다.'],
];

const tendencyResult = [
  { top: '교전지향', bottom: '안전추구' },
  { top: '라인전위주', bottom: '로밍위주' },
  { top: '원챔장인', bottom: '올라운더' },
  { top: '뇌지컬', bottom: '피지컬' },
];

const tendencyImage = {
  start: '/expression/cupcake.png',
  answer: [
    '/expression/cemetery.png',
    '/expression/rabbit.png',
    '/expression/conflict.png',
    '/expression/cookie.png',
  ],
  end: '/expression/penguin.png',
};

const filterTier = ['아이언', '브론즈', '실버', '골드', '플래티넘', '다이아'];
const tierEng = {
  아이언: 'IRON',
  브론즈: 'BRONZE',
  실버: 'SILVER',
  골드: 'GOLD',
  플래티넘: 'PLATINUM',
  다이아: 'DIAMOND',
};

const withdrawalErrorMessage = {
  agree: '주의사항에 동의해주세요',
};

const positionImgMap: { [key in Position]: string } = {
  탑: 'position_top.png',
  정글: 'position_jug.png',
  미드: 'position_mid.png',
  원딜: 'position_bot.png',
  서폿: 'position_sup.png',
};

export {
  position,
  voiceChannel,
  communication,
  playStyleText,
  onBoardingErrorMessage,
  goodReviewOptions,
  badReviewOptions,
  reviewWriteErrorMessage,
  tendencyQuestion,
  tendencyAnswer,
  tendencyImage,
  tendencyResult,
  filterTier,
  tierEng,
  withdrawalErrorMessage,
  positionImgMap,
};
