import React, { useState } from 'react';
import Asking from '../common/Asking';
import Button from '../common/Button';

import { ButtonContainer } from '../common/Asking.style';
import { awfulReasons, joyfulReasons } from '../../constant';
import CheckBox from '../common/CheckBox';

function ReviewWrite() {
  const [isJoyful, setIsJoyful] = useState(true);
  const [isWillingToHide, setIsWillingToHide] = useState(true);

  return (
    <form>
      <Asking title="고수달님은 어떠셨나요?" caption="진짜 플레이 했을 때만 평가해라">
        <ButtonContainer>
          <Button
            type="button"
            color={isJoyful ? 'primary' : 'disable'}
            size="sm"
            onClick={() => setIsJoyful((p) => !p)}
          >
            즐겁게 플레이 했어요
          </Button>
          <Button
            type="button"
            color={isJoyful ? 'disable' : 'primary'}
            size="sm"
            onClick={() => setIsJoyful((p) => !p)}
          >
            별로에요
          </Button>
        </ButtonContainer>
      </Asking>
      {isJoyful ? (
        <Asking
          title="어떤 점이 즐거우셨나요?"
          caption="내가 표시한 평가는 상대에게 보여지지만 누가 했는지는 안보여요"
        >
          {joyfulReasons.map((reason) => (
            <CheckBox label={reason} />
          ))}
        </Asking>
      ) : (
        <Asking
          title="어떤 점이 별로였는지 알려주세요"
          caption="내가 표시한 평가는 상대에게 보여지지만 누가 했는지는 안보여요"
        >
          {awfulReasons.map((reason) => (
            <CheckBox label={reason} />
          ))}
        </Asking>
      )}
      <Asking
        title="내 프로필을 고수달님에게서 숨기고 다시 만나지 않으실래요?"
        caption="로그인 안한 상태에선 보일 수 있음"
      >
        <ButtonContainer>
          <Button
            type="button"
            color={isWillingToHide ? 'primary' : 'disable'}
            size="sm"
            onClick={() => setIsWillingToHide((p) => !p)}
          >
            숨겨주세요
          </Button>
          <Button
            type="button"
            color={isWillingToHide ? 'disable' : 'primary'}
            size="sm"
            onClick={() => setIsWillingToHide((p) => !p)}
          >
            괜찮아요
          </Button>
        </ButtonContainer>
      </Asking>
      <div style={{ textAlign: 'center' }}>
        <Button type="submit" size="lg" color="primaryVariant">
          매너 평가하기
        </Button>
      </div>
    </form>
  );
}

export default ReviewWrite;
