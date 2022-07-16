import Image from 'next/image';
import React from 'react';
import { CheckBox, Typography } from '../common';
import { ImageContainer, Ul, WithdrawalForm, WithdrawalInfoContainer } from './style';

function Withdrawal() {
  return (
    <>
      <ImageContainer>
        <Image src="/expression/cry.png" width="256px" height="256" />
      </ImageContainer>
      <WithdrawalForm>
        <WithdrawalInfoContainer>
          <div>
            <Typography variant="h3">...떠나시는 건가요?</Typography>
            <Typography variant="h3">아래 주의사항을 확인해주세요</Typography>
          </div>
          <Ul>
            <li>
              <Typography variant="caption">
                회원 탈퇴 시 회원님의 모든 정보는 삭제됩니다.
              </Typography>
            </li>
            <li>
              <Typography variant="caption">
                탈퇴 신청 한 아이디로 24시간 이내 재가입이 불가능합니다.
              </Typography>
            </li>
            <li>
              <Typography variant="caption">
                재가입 후에도 계정 정보는 복구되지 않습니다.
              </Typography>
            </li>
          </Ul>
          <CheckBox variant="body1" label="주의사항을 읽고 이해했어요" />
        </WithdrawalInfoContainer>
      </WithdrawalForm>
    </>
  );
}

export default Withdrawal;
