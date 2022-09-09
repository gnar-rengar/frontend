import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button, TextField } from '..';
import usePostVerificationCode from '../../../hooks/usePostVerificationCode';

interface VerificationCodeFormProps {
  phoneNumber: string;
}

const codeSchema = yup.object().shape({
  code: yup.string().matches(/^\d{6}$/),
});

function VerificationCodeForm({ phoneNumber }: VerificationCodeFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(codeSchema),
    mode: 'onChange',
  });

  const { mutate } = usePostVerificationCode();

  const handleSubmitVerificationCode = ({ code }: { code: string }) => {
    mutate({ phoneNumber, code });
  };

  return (
    <form
      style={{ display: 'flex', gap: '6px' }}
      onSubmit={handleSubmit(handleSubmitVerificationCode)}
    >
      <TextField placeholder="인증코드 6자리" {...register('code')} error={errors.code} />
      <Button size="lg" width="80px" color={isValid ? 'primary' : 'disable'}>
        인증
      </Button>
    </form>
  );
}

export default VerificationCodeForm;
