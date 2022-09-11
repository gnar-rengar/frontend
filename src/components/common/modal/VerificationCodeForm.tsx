import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { QueryClient } from 'react-query';
import { Button, TextField } from '..';
import usePostVerificationCode from '../../../hooks/usePostVerificationCode';
import { queryKeys } from '../../../constant/queryKeys';
import { Form } from './style';

interface VerificationCodeFormProps {
  phoneNumber: string;
  setPortalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const codeSchema = yup.object().shape({
  code: yup.string().matches(/^\d{6}$/),
});

function VerificationCodeForm(props: VerificationCodeFormProps) {
  const { phoneNumber, setPortalState } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(codeSchema),
    mode: 'onChange',
  });

  const queryClient = new QueryClient();

  const { mutate } = usePostVerificationCode({
    onSuccess: () => {
      setPortalState(false);
      queryClient.invalidateQueries(queryKeys.myPage);
    },
  });

  const handleSubmitVerificationCode = ({ code }: { code: string }) => {
    mutate({ phoneNumber, code });
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitVerificationCode)}>
      <TextField placeholder="인증코드 6자리" {...register('code')} error={errors.code} />
      <Button size="lg" width="80px" color={isValid ? 'primary' : 'disable'}>
        인증
      </Button>
    </Form>
  );
}

export default VerificationCodeForm;
