import { rest } from 'msw';

export const userHandlers = [
  rest.get('https://api.duo-duo/users/mypage', (req, res, ctx) => {
    const goodFeedback = [
      { description: '멘탈이 좋아요', count: 32 },
      { description: '말을 예쁘게 해요', count: 24 },
      { description: '좋은 피드백을 해줘요', count: 14 },
      { description: '유쾌해서 재밌어요', count: 3 },
    ];

    const badFeedback = [
      { description: '게임 도중에 삐졌어요', count: 21 },
      { description: '이유없이 보이스를 나갔어요', count: 12 },
      { description: '너무 나쁜말을 많이 써요', count: 4 },
      { description: '실력이 형편 없어요', count: 1 },
    ];
    return res(
      ctx.json({
        success: true,
        profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/502.png',
        nickcName: '썩은김치',
        profileOpen: true,
        goodFeedback,
        badFeedback,
      })
    );
  }),
];
