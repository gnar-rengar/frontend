export const queryKeys = {
  onBoarding: ['onBoarding'] as const,
  myPage: ['mypage'] as const,
  matchHistory: (userId: string) => ['matchHistory', userId] as const,
  userProfile: (userId: string) => ['userProfile', userId] as const,
  roomId: (userId: string) => ['roomId', userId] as const,
  customList: ['customList'] as const,
  authUser: ['user'] as const,
  fitSummonerList: ['fitSummonerList'] as const,
  newSummonerList: ['newSummonerList'] as const,
  message: ['message'] as const,
  opponent: ['opponent'] as const,
};
