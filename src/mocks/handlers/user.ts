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

  rest.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/userInfo/:userId`, (req, res, ctx) => {
    const userIds = ['1', '2', '3'];

    const data = {
      nickname: '썩은김치',
      profileUrl: 'http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/588.png',
      goodFeedback: [
        { description: '멘탈이 좋아요', count: 32 },
        { description: '말을 예쁘게 해요', count: 24 },
        { description: '좋은 피드백을 해줘요', count: 14 },
        { description: '유쾌해서 재밌어요', count: 3 },
      ],
      tier: {
        tier: 'Gold',
        rank: 4,
      },
      playStyles: ['교전지향', '로밍위주', '올라운더', '피지컬'],
      positions: ['top', 'jg'],
      voice: true,
      voiceChannel: ['롤 인보이스', '디스코드'],
      communication: '텐션 높게, 즐겁게 얘기하는',
      mostChamps: ['Yone', 'MonkeyKing', 'Yasuo'],
    };

    if (userIds.includes(req.params.userId as string)) {
      return res(
        ctx.json({
          success: true,
          message: '유저 정보를 불러오는데 성공했습니다.',
          data,
        })
      );
    }

    return res(
      ctx.json({
        success: false,
        message: '유저 정보를 불러오는데 실패했습니다.',
      })
    );
  }),

  rest.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/recentRecord/:userId`, (req, res, ctx) => {
    const recentRecord = [
      {
        gameMode: 'CLASSIC',
        gameType: 'MATCHED_GAME',
        queueType: '5v5 Ranked Solo games',
        gameStartTimestamp: 1656950215973,
        gameEndTimestamp: 1656952225921,
        win: true,
        championName: 'Belveth',
        primaryStyle:
          'https://ddragon.canisback.com/img/perk-images/Styles/Domination/Electrocute/Electrocute.png',
        subStyle:
          'https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Guardian/Guardian.png',
        spell1: 'SummonerSmite',
        spell2: 'SummonerFlash',
        item0: 0,
        item1: 0,
        item2: 3026,
        item3: 3091,
        item4: 6672,
        item5: 3111,
        item6: 3364,
        champLevel: 16,
        totalMinionsKilled: 206,
        kills: 5,
        deaths: 3,
        assists: 10,
        kda: 5,
      },
      {
        gameMode: 'CLASSIC',
        gameType: 'MATCHED_GAME',
        queueType: '5v5 Ranked Solo games',
        gameStartTimestamp: 1656950215973,
        gameEndTimestamp: 1656952225921,
        win: false,
        championName: 'Belveth',
        primaryStyle:
          ' https://ddragon.canisback.com/img/perk-images/Styles/Domination/Electrocute/Electrocute.png',
        subStyle:
          'https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Guardian/Guardian.png',
        spell1: 'SummonerSmite',
        spell2: 'SummonerFlash',
        item0: 0,
        item1: 0,
        item2: 3026,
        item3: 3091,
        item4: 6672,
        item5: 3111,
        item6: 3364,
        champLevel: 16,
        totalMinionsKilled: 206,
        kills: 5,
        deaths: 3,
        assists: 10,
        kda: 5,
      },
      {
        gameMode: 'CLASSIC',
        gameType: 'MATCHED_GAME',
        queueType: '5v5 Ranked Solo games',
        gameStartTimestamp: 1656950215973,
        gameEndTimestamp: 1656952225921,
        win: true,
        championName: 'Belveth',
        primaryStyle:
          ' https://ddragon.canisback.com/img/perk-images/Styles/Domination/Electrocute/Electrocute.png',
        subStyle:
          'https://ddragon.canisback.com/img/perk-images/Styles/Resolve/Guardian/Guardian.png',
        spell1: 'SummonerSmite',
        spell2: 'SummonerFlash',
        item0: 0,
        item1: 0,
        item2: 3026,
        item3: 3091,
        item4: 6672,
        item5: 3111,
        item6: 3364,
        champLevel: 16,
        totalMinionsKilled: 206,
        kills: 5,
        deaths: 3,
        assists: 10,
        kda: 5,
      },
    ];

    return res(
      ctx.json({
        success: true,
        recentRecord,
      })
    );
  }),
];
