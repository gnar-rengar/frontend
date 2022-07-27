export interface ResponseDTO {
  success: boolean;
  message: string;
}

export type PlayStyleType = {
  battle: string;
  line: string;
  champion: string;
  physical: string;
};

export interface OnBoardingInput<T> {
  profileUrl?: string;
  lolNickname: string;
  nickNameCheck?: boolean;
  position: string[];
  communication: string;
  useVoice: boolean;
  voiceChannel?: string[];
  playStyle: T;
}

export interface ReviewWriteDTO {
  isGood: boolean;
  goodReview: string[];
  badReview: string[];
  additionalBadReaview: string;
}

export interface LoginDTO extends AuthUserDTO {
  rtokenExpireTime: string;
  tokenExpireTime: string;
}

export interface UserProfileDTO {
  nickname: string;
  profileUrl: string;
  goodReview: Review[];
  tier: Tier;
  playStyles: string[];
  positions: string[];
  voice: boolean;
  voiceChannel: string[];
  communication: string;
  mostChamps: string[];
}

export type Position = '탑' | '정글' | '미드' | '원딜' | '서폿';

export interface MyPageDTO {
  lolNickname: string;
  profileUrl: string;
  leaguePoints: string;
  playStyle: string[];
  position: Position[];
  useVoice: boolean;
  goodReview: Review[];
  badReview: Review[];
}

export interface Review {
  description: string;
  count: number;
  _id: string;
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

export interface NicknameCheckDTO extends ResponseDTO {
  profileUrl: string;
}

export interface AuthUserDTO {
  userId: string;
  lolNickname: string;
  profileURL: string;
}
