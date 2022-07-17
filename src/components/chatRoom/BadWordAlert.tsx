import React, { useEffect, useState } from 'react';
import { Button, Typography } from '../common';
import { ButtonContainer, Notice } from './style';

interface BadWordAlertProps {
  setHasBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  ignore: Event;
}

function BadWordAlert(props: BadWordAlertProps) {
  const { setHasBadWord, ignore } = props;
  const [status, setStatus] = useState<'ignore' | 'rewrite'>('rewrite');

  useEffect(() => {
    if (status === 'ignore') {
      document.querySelector('#message').dispatchEvent(ignore);
      setStatus('rewrite');
    }
  }, [status]);

  const handleClickRewrite = () => {
    setHasBadWord(false);
  };

  const handleClickIgnore = () => {
    setStatus('ignore');
  };

  return (
    <Notice>
      <div>
        <Typography variant="body1" mb={2}>
          잠시만요, 나쁜 말은 안돼요!
        </Typography>
        <Typography variant="caption">분노는 목적 없는 충동을 일으킬 뿐이오. - 마스터이</Typography>
      </div>
      <Typography variant="body3">상대방을 조금 더 배려하는건 어떨까요?</Typography>
      <ButtonContainer>
        <Button variant="contained" color="primaryVariant" size="sm" onClick={handleClickRewrite}>
          다시 작성
        </Button>
        <Button variant="contained" color="disable" size="sm" onClick={handleClickIgnore}>
          그대로 전송
        </Button>
      </ButtonContainer>
    </Notice>
  );
}

export default BadWordAlert;
