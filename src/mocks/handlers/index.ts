import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    const users = [
      {
        id: '1',
        name: '재석',
        nickname: '썩은김치',
      },
      {
        id: '2',
        name: '성규',
        nickname: 'JjsK',
      },
    ];
    return res(ctx.json(users));
  }),

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
];
