import Image from 'next/image';
import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CheckBox, StickyBottom, Typography } from '../common';
import TextArea from '../common/textarea';
import { WithdrawalDTO } from '../../types/api.type';
import {
  CheckboxContainer,
  ImageContainer,
  TextAreaContainer,
  Ul,
  WithdrawalForm,
  WithdrawalInfoContainer,
} from './style';
import { withdrawalErrorMessage } from '../../constant';
import useWithdrawalMutation from '../../hooks/useWithdrawalMutation';

const withdrawalSchema = yup.object().shape({
  agree: yup.boolean().oneOf([true], withdrawalErrorMessage.agree),
});

function Withdrawal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<WithdrawalDTO>({
    resolver: yupResolver(withdrawalSchema),
    mode: 'onChange',
  });
  const agreeRegister = register('agree');
  const reasonRegister = register('reason');
  const submitMutation = useWithdrawalMutation();

  const onSubmit = async (data: WithdrawalDTO) => {
    submitMutation.mutate(data);
  };
  return (
    <>
      <ImageContainer>
        <Image src="/expression/cry.png" width="256px" height="256" />
      </ImageContainer>
      <WithdrawalForm onSubmit={handleSubmit(onSubmit)}>
        <WithdrawalInfoContainer id="agree">
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
          <CheckboxContainer>
            <CheckBox
              valueIsBoolean
              register={agreeRegister}
              variant="body1"
              label="주의사항을 읽고 이해했어요"
            />
            {errors && (
              <Typography variant="caption" color="error">
                {(errors?.agree as any)?.message}
              </Typography>
            )}
          </CheckboxContainer>
        </WithdrawalInfoContainer>
        <TextAreaContainer id="reason">
          <div>
            <Typography variant="h3">...정 그렇다면</Typography>
            <Typography variant="h3">떠나시는 이유라도 알려주세요</Typography>
          </div>
          <TextArea placeholder="탈퇴 사유를 입력해주세요" register={reasonRegister} />
        </TextAreaContainer>
        <StickyBottom>
          <Button type="submit" size="lg" color={isValid ? 'primaryVariant' : 'disable'}>
            탈퇴하기
          </Button>
        </StickyBottom>
      </WithdrawalForm>
    </>
  );
}

export default Withdrawal;
