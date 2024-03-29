export type Position = '탑' | '정글' | '미드' | '원딜' | '서폿';
export type FilterTierType = '아이언' | '브론즈' | '실버' | '골드' | '플래티넘' | '다이아';

export interface ListDTO {
  leaguePoints: string;
  lolNickname: string;
  playStyle: string[];
  position: Position[];
  profileUrl: string;
  rank: string;
  tier: string;
  useVoice: boolean;
  _id?: string;
  createdAt?: string;
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
  choicePlayStyle: boolean;
  playStyle: T;
}

export interface ReviewWriteDTO {
  isGood: boolean;
  goodReview: string[];
  badReview: string[];
  additionalBadReview: string;
}

export interface LoginDTO extends AuthUserDTO {
  isOnboarded: boolean;
}

export interface ProfileDTO {
  lolNickname: string;
  profileUrl: string;
  goodReview: Review[];
  tier: string;
  rank: string;
  leaguePoints: string;
  playStyle: string[];
  position: Position[];
  useVoice: boolean;
  voiceChannel: string[];
  communication: string;
  mostChampion: string[];
  roomId: string;
}

export interface MyPageDTO {
  lolNickname: string;
  profileUrl: string;
  tier: string;
  rank: string;
  leaguePoints: string;
  playStyle: string[];
  position: Position[];
  useVoice: boolean;
  goodReview: Review[];
  badReview: Review[];
  registerPhone: boolean;
  agreeSMS: boolean;
}

export interface Review {
  description: string;
  count: number;
  _id: string;
}

/**
 * kda -1은 Infinity를 의미함.
 */
export interface RecentRecord {
  gameMode: string;
  gameType: string;
  queueType: string;
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  win: boolean;
  championName: string;
  championNameKR: string;
  spell1: string;
  spell2: string;
  perk1: string;
  perk2: string;
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

export interface MatchHistoryDTO {
  recentRecord: RecentRecord[];
}

export interface NicknameCheckDTO {
  lolNickname: string;
  profileUrl: string;
  message: string;
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

export interface AuthUserDTO {
  userId: string;
  lolNickname: string;
  profileURL: string;
  isOnBoarded: boolean;
  playStyle: string[];
  firstLogin: boolean;
}

export interface FilterRequestDTO {
  tier: FilterTierType[];
}

export interface SummonerFitRecommendDTO {
  customList: ListDTO[];
}

export interface SummonerNewRecommendDTO {
  newList: ListDTO[];
}

export interface WithdrawalDTO {
  agree: boolean;
  reason?: string;
}

export interface PhoneNumberDTO {
  phoneNumber: string;
}
