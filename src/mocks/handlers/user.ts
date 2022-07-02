import { rest } from 'msw';

export const userHandlers = [
  rest.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/mypage`, (req, res, ctx) => {
    const data = {
      nickname: '썩은김치',
      profileOpen: true,
      profileUrl: 'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/502.png',
      goodFeedback: [
        { description: '멘탈이 좋아요', count: 32 },
        { description: '말을 예쁘게 해요', count: 24 },
        { description: '좋은 피드백을 해줘요', count: 14 },
        { description: '유쾌해서 재밌어요', count: 3 },
      ],
      badFeedback: [
        { description: '게임 도중에 삐졌어요', count: 21 },
        { description: '이유없이 보이스를 나갔어요', count: 12 },
        { description: '너무 나쁜말을 많이 써요', count: 4 },
        { description: '실력이 형편 없어요', count: 1 },
      ],
      tiers: [
        {
          season: ' S2021',
          tier: 'Gold',
          rank: 4,
          leaguePoints: 0,
        },
        {
          season: ' S2020',
          tier: 'Gold',
          rank: 3,
          leaguePoints: 44,
        },
        {
          season: ' S21',
          tier: 'Gold',
          rank: 2,
          leaguePoints: 21,
        },
      ],
      playStyles: ['공격적', '무지성', '3렙에 안오면 던짐', '남탓 안함', '텐션 높음', '말 많음'],
      positions: ['top', 'jg', 'mid'],
      mostChamps: [
        {
          name: 'yasuo',
          url: 'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/Yasuo.png',
        },
        {
          name: 'wukong',
          url: 'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/MonkeyKing.png',
        },
        {
          name: 'yone',
          url: 'https://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/Yone.png',
        },
      ],
    };

    return res(
      ctx.json({
        success: true,
        data,
      })
    );
  }),

  rest.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/writeReview/:userId`, (req, res, ctx) => {
    const userIds = ['1', '2', '3'];
    if (userIds.includes(req.params.userId as string)) {
      return res(
        ctx.json({
          success: true,
          message: '매너 평가가 완료 됐습니다.',
        })
      );
    }

    return res(
      ctx.json({
        success: false,
        message: '매너 평가에 실패 했습니다.',
      })
    );
  }),
];
