export const queryKeys = {
  onBoarding: ['onBoarding'] as const,
  myPage: ['mypage'] as const,
  matchHistory: (userId: string) => ['matchHistory', userId] as const,
  userProfile: (userId: string) => ['userProfile', userId] as const,
  chatRoom: 'chatRoom',
  authUser: ['user'] as const,
};
