export interface OnBoardingInput {
  nickName: string;
  nickNameCheck: boolean;
  position: string[];
  communication: string;
  useVoice: boolean;
  voiceChannel?: string[];
}

export interface ReviewWriteDTO {
  isJoyful: boolean;
  goodFeedback: string[];
  badFeedback: string[];
  ban: boolean;
}

export interface LoginDTO {
  success: boolean;
  token: string;
  refreshToken: string;
  nickname: string;
  userId: string;
  rtokenExpireTime: string;
  tokenExpireTime: string;
}

export interface UserProfileDTO {
  nickname: string;
  profileUrl: string;
  goodFeedback: Feedback[];
  tier: Tier;
  playStyles: string[];
  positions: string[];
  voice: boolean;
  voiceChannel: string[];
  communication: string;
  mostChamps: string[];
}

export interface MyPageDTO {
  nickname: string;
  profileUrl: string;
  voice: boolean;
  tier: Tier;
  positions: string[];
  playStyles: string[];
  goodFeedback: Feedback[];
  badFeedback: Feedback[];
}

export interface Feedback {
  description: string;
  count: number;
}

export interface Tier {
  tier: string;
  rank: number;
}

export interface MatchDTO {
  success: boolean;
  recentRecord: RecentRecord[];
}

export interface RecentRecord {
  gameMode: string;
  gameType: string;
  queueType: string;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  win: boolean;
  championName: string;
  primaryStyle: string;
  subStyle: string;
  spell1: string;
  spell2: string;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  champLevel: number;
  totalMinionsKilled: number;
  kills: number;
  deaths: number;
  assists: number;
  kda: number;
}

export interface NicknameCheckDTO {
  success: boolean;
  profileUrl: string;
  message: string;
}
