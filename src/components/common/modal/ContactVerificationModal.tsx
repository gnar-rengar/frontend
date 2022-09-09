import { useTheme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button, TextField, Typography } from '..';
import usePostPhoneNumber from '../../../hooks/usePostPhoneNumber';
import PhoneNumberForm from './PhoneNumberForm';
import VerificationCodeForm from './VerificationCodeForm';

function ContactVerificationModal() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Image src="/icons/heart_stingray.png" layout="fixed" width={xl} height={xl} unoptimized />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <PhoneNumberForm phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        <VerificationCodeForm phoneNumber={phoneNumber} />
      </div>
    </div>
  );
}

export default ContactVerificationModal;
