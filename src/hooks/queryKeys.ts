export const queryKeys = {
  onBoarding: ['onBoarding'] as const,
  myPage: ['mypage'] as const,
  matchHistory: (userId: string) => ['matchHistory', userId] as const,
  userProfile: (userId: string) => ['userProfile', userId] as const,
  roomId: (userId: string) => ['roomId', userId] as const,
  customList: ['customList'] as const,
  authUser: ['user'] as const,
  fitSummonerList: ['fitSummonerList'] as const,
  message: (roomId: string) => ['message', roomId] as const,
  newSummonerList: (type: 'home' | 'filter') => ['newSummonerList', type] as const,
  opponent: ['opponent'] as const,
  phoneNumber: ['phoneNumber'] as const,
};
