export const queryKeys = {
  authUser: ['user'] as const,
  onBoarding: ['onBoarding'] as const,
  myPage: ['mypage'] as const,
  matchHistory: (userId: string) => ['matchHistory', userId] as const,
  userProfile: (userId: string) => ['userProfile', userId] as const,
  chatRoom: 'chatRoom',
  roomId: (userId: string) => ['roomId', userId] as const,
};
