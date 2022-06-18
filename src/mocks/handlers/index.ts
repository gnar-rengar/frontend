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
];
