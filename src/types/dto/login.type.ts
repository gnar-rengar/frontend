export interface LoginDTO {
  success: boolean;
  token: string;
  refreshToken: string;
  nickname: string;
  userId: string;
  rtokenExpireTime: string;
  tokenExpireTime: string;
}
