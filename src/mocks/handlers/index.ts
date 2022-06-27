import { rest } from 'msw';

export const handlers = [
  rest.patch('/auth/onboarding', (req, res, ctx) => {
    try {
      return res(
        ctx.json({
          success: true,
          message: '추가정보 등록에 성공하였습니다.',
        })
      );
    } catch (error) {
      return res(
        ctx.json({
          success: false,
          message: '추가정보 등록에 실패하였습니다.',
        })
      );
    }
  }),

  rest.get('https://api.duo-duo/user/checkNick', async (req, res, ctx) => {
    const nickName = req.url.searchParams.get('lolNickName');

    res(
      ctx.json({
        success: true,
        profileUrl: nickName,
        message: '계정이 확인되었습니다.',
      })
    );
  }),
];
