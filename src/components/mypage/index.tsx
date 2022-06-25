import React from 'react';
import Asking from '../common/Asking';
import Button from '../common/Button';
import Card from '../common/Card';
import Divider from '../common/Divider';
import FeedBack from './FeedBack';

const goodFeedback = [{ 어쩌고1: 15 }, { 어쩌고2: 2 }, { 어쩌고3: 8 }];

const badFeedback = [{ 저쩌고1: 8 }, { 저쩌고2: 9 }, { 저쩌고3: 8 }];

function MyPage() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px 0' }}>
        <Card />
        <Button size="lg" variant="outlined" color="onBackground">
          내 플레이 정보 수정하기
        </Button>
      </div>
      <Divider />
      <Asking
        title="받은 긍정 플레이 리뷰"
        caption="같이 플레이한 유져중에 어쩌고 저쩌고. 긍정 플레이 ㅇ리뷰가 많으면 상위 노출 시스템????"
      >
        {goodFeedback.map((feedback) => (
          <FeedBack feedback={feedback} />
        ))}
      </Asking>
      <Divider />
      <Asking
        title="받은 부정 플레이 리뷰"
        caption="같이 플레이한 유져중에 어쩌고 저쩌고. 부정 플레이 리뷰가 너무 많으면 해명타임이 주어져야할짖도 몰라요. 모두가 사연이 있다고 하지만 자꾸 사건이 내 주변에서 일어나면 당신이 범인일지도 모릅니다."
      >
        {badFeedback.map((feedback) => (
          <FeedBack feedback={feedback} />
        ))}
      </Asking>
      <Divider />
    </div>
  );
}

export default MyPage;
