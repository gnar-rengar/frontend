import { Position } from './api.type';

export interface CardProps {
  leaguePoints: string;
  lolNickname: string;
  playStyle: string[];
  position: Position[];
  profileUrl: string;
  rank: string;
  tier: string;
  useVoice: boolean;
  _id?: string;
}
