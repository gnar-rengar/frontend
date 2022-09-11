import { useTheme } from '@emotion/react';
import Image from 'next/image';
import React from 'react';
import usePatchSMSAgree from '../../../hooks/usePatchSMSAgree';
import Button from '../button/Button';
import Typography from '../typography/Typography';
import {
  ButtonContainer,
  IconConatiner,
  IconsAndText,
  ModalContainer,
  TextContainer,
} from './style';

interface NotificationModalProps {
  setPortalState: React.Dispatch<React.SetStateAction<boolean>>;
}

function NotificationModal({ setPortalState }: NotificationModalProps) {
  const {
    icon: {
      size: { lg, xxl },
    },
  } = useTheme();

  const closeModal = () => {
    setPortalState(false);
  };

  const { mutate } = usePatchSMSAgree();

  return (
    <ModalContainer>
      <IconsAndText>
        <IconConatiner>
          <Image src="/icons/crying_fox.png" layout="fixed" width={xxl} height={xxl} unoptimized />
          <Image
            src="/icons/cross-mark.svg"
            layout="fixed"
            width={lg}
            height={lg}
            unoptimized
            color="white"
            onClick={closeModal}
          />
        </IconConatiner>
        <TextContainer>
          <div>
            <Typography variant="h3">채팅 알림을 문자로</Typography>
            <Typography variant="h3">그만 받고 싶으신가요?</Typography>
          </div>
          <div>
            <Typography variant="captionRegular">문자 수신 알림을 끄신다면</Typography>
            <Typography variant="captionRegular">
              찰떡 듀오의 듀오 신청 채팅을 놓칠 수도 있어요
            </Typography>
          </div>
        </TextContainer>
      </IconsAndText>
      <ButtonContainer>
        <Button color="disable" size="lg" variant="outlined" width="80px" onClick={closeModal}>
          취소
        </Button>
        <Button color="primaryVariant" size="lg" onClick={() => mutate(false)}>
          그만 받을래요
        </Button>
      </ButtonContainer>
    </ModalContainer>
  );
}

export default NotificationModal;
