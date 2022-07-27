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

export interface NicknameCheckDTO extends ResponseDTO {
  profileUrl: string;
}

export interface Room {
  roomId: string;
  userId: string;
  lolNickname: string;
  profileUrl: string;
  lastMessageText: string;
  lastMessagedTime: string;
  unRead: number;
}

export interface Message {
  userId: string;
  text: string;
  createdAt: string;
}

export type Messages = {
  [key in string]: Message[];
};

export type ReceivedMessage = Message & { date: string; isRead: boolean };

export interface Opponent {
  userId: string;
  profileUrl: string;
  lolNickname: string;
}

export interface EnterChatRoomDTO {
  opponent: Opponent;
  messages: Messages[];
}
