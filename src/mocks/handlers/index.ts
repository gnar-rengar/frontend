import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => res(ctx.json({ users: ['재석', '성규'] }))),
];
