import { rest } from 'msw';

export const userHandlers = [
  rest.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/mypage`, (req, res, ctx) => {
    const data = {
      nickname: '썩은김치',
      profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png',
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
      tier: {
        tier: 'Gold',
        rank: 4,
      },
      playStyles: ['공격적', '무지성', '안전추구'],
      positions: ['top', 'jg'],
      voice: true,
    };

    return res(
      ctx.json({
        success: true,
        message: '마이 페이지 정보를 가져오는데 성공했습니다.',
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
