const playStyle = [
  '탑신병자',
  '교전지향',
  '뇌지컬',
  '로밍위주',
  '탑시팅',
  '성장 위주',
  '피드백 환영',
  '즐겜',
  '멘탈 좋음',
] as const;

const position = ['탑', '정글', '미드', '원딜', '서폿'] as const;

const voiceChannel = ['디스코드', '롤 인보이스', '토크온', '기타'] as const;

const communication = [
  '텐션 높게, 즐겁게 얘기하는 플레이가 좋아요.',
  '필요한 소통만 하는게 좋아요.',
  '조용히 오더만 들을게요',
  '피드백은 언제나 환영해요',
] as const;

const onBoardingErrorMessage = {
  nickName: '소환사명을 입력해주세요.',
  nickNameCheck: '확인 버튼을 통해 소환사명을 확인해주세요.',
  checkbox: '하나 이상 골라주셔야 잘 추천해드릴 수 있어요!!!',
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

export {
  playStyle,
  position,
  voiceChannel,
  communication,
  onBoardingErrorMessage,
  joyfulReasons,
  awfulReasons,
};
