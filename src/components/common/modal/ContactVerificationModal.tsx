import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { Typography } from '..';
import PhoneNumberForm from './PhoneNumberForm';
import VerificationCodeForm from './VerificationCodeForm';
import { FormContainer, IconConatiner, IconsAndText, ModalContainer, TextContainer } from './style';
import useGetPhoneNumber from '../../../hooks/useGetPhoneNumber';

interface ContactVerificationModalProps {
  setPortalState: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContactVerificationModal({ setPortalState }: ContactVerificationModalProps) {
  const { phoneNumber: initialPhoneNumber } = useGetPhoneNumber();
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

  const {
    icon: {
      size: { lg, xxl },
    },
  } = useTheme();

  return (
    <ModalContainer>
      <IconsAndText>
        <IconConatiner>
          <Image
            src="/icons/heart_stingray.png"
            layout="fixed"
            width={xxl}
            height={xxl}
            unoptimized
          />
          <Image
            src="/icons/cross-mark.svg"
            layout="fixed"
            width={lg}
            height={lg}
            unoptimized
            color="white"
            onClick={() => setPortalState(false)}
          />
        </IconConatiner>
        <TextContainer>
          <div>
            <Typography variant="h3">연락처 인증하고</Typography>
            <Typography variant="h3">채팅 알림을 문자로 받아보세요</Typography>
          </div>
          <div>
            <Typography variant="captionRegular">핸드폰 인증 시 개인정보처리방침과 </Typography>
            <Typography variant="captionRegular">
              알림 수신에 동의하는 것으로 간주합니다.
            </Typography>
          </div>
        </TextContainer>
      </IconsAndText>
      <FormContainer>
        <PhoneNumberForm phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        <VerificationCodeForm phoneNumber={phoneNumber} setPortalState={setPortalState} />
      </FormContainer>
    </ModalContainer>
  );
}

export default ContactVerificationModal;
