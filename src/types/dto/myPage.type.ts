export interface MyPageDTO {
  success: boolean;
  profileUrl: string;
  nickcName: string;
  profileOpen: true;
  goodFeedback: {
    description: string;
    count: number;
  }[];
  badFeedback: {
    description: string;
    count: number;
  }[];
}
