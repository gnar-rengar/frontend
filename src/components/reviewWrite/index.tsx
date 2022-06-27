import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { awfulReasons, joyfulReasons, reviewWriteErrorMessage } from '../../constant';

import { Asking, Button, CheckBox, Typography } from '../common';

import { Form, SubmitButtonWrapper } from './style';
import { ButtonContainer } from '../common/asking/Asking.style';

import type { ReviewWriteDTO } from '../../types/dto/reviewWrite.type';
import usePatchReviewWrite from '../../hooks/usePatchReviewWrite';

const reviewWriteSchema = yup.object().shape({
  isJoyful: yup.boolean(),
  goodFeedback: yup.array(yup.string()).when('isJoyful', {
    is: true,
    then: (schema) => schema.min(1, reviewWriteErrorMessage.feedback),
  }),
  badFeedback: yup.array(yup.string()).when('isJoyful', {
    is: false,
    then: (schema) => schema.min(1, reviewWriteErrorMessage.feedback),
  }),
  ban: yup.boolean().required(),
});

const userId = '1';

function ReviewWrite() {
  const [isJoyful, setIsJoyful] = useState(true);
  const [isWillinToBan, setIsWillingToBan] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    setValue,
    getValues,
  } = useForm<ReviewWriteDTO>({
    defaultValues: {
      isJoyful: true,
      goodFeedback: [],
      badFeedback: [],
      ban: true,
    },
    resolver: yupResolver(reviewWriteSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (isJoyful) {
      setValue('badFeedback', []);
    } else {
      setValue('goodFeedback', []);
    }
  }, [isJoyful]);

  const { mutate } = usePatchReviewWrite();

  const onSubmit: SubmitHandler<ReviewWriteDTO> = (payload) => {
    mutate({ userId, payload });
  };

  const handleClickIsJoyfulButton = () => {
    setIsJoyful((p) => !p);
    setValue('isJoyful', !getValues('isJoyful'));
  };

  const handleClickBanButton = () => {
    setIsWillingToBan((p) => !p);
    setValue('ban', !getValues('ban'));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Asking title="고수달님은 어떠셨나요?" caption="진짜 플레이 했을 때만 평가해라">
        <ButtonContainer>
          <Button
            type="button"
            color={isJoyful ? 'primary' : 'disable'}
            size="sm"
            onClick={handleClickIsJoyfulButton}
            value="joyful"
          >
            즐겁게 플레이 했어요
          </Button>
          <Button
            type="button"
            color={isJoyful ? 'disable' : 'primary'}
            size="sm"
            onClick={handleClickIsJoyfulButton}
            value="awful"
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
            <CheckBox key={reason} label={reason} register={register('goodFeedback')} />
          ))}
        </Asking>
      ) : (
        <Asking
          title="어떤 점이 별로였는지 알려주세요"
          caption="내가 표시한 평가는 상대에게 보여지지만 누가 했는지는 안보여요"
        >
          {awfulReasons.map((reason) => (
            <CheckBox key={reason} label={reason} register={register('badFeedback')} />
          ))}
        </Asking>
      )}
      <Typography variant="caption">{(errors?.goodFeedback as any)?.message}</Typography>
      <Asking
        title="내 프로필을 고수달님에게서 숨기고 다시 만나지 않으실래요?"
        caption="로그인 안한 상태에선 보일 수 있음"
      >
        <ButtonContainer>
          <Button
            type="button"
            color={isWillinToBan ? 'primary' : 'disable'}
            size="sm"
            onClick={handleClickBanButton}
          >
            숨겨주세요
          </Button>
          <Button
            type="button"
            color={isWillinToBan ? 'disable' : 'primary'}
            size="sm"
            onClick={handleClickBanButton}
          >
            괜찮아요
          </Button>
        </ButtonContainer>
      </Asking>
      <SubmitButtonWrapper>
        <Button type="submit" size="lg" color="primaryVariant" disabled={!isValid}>
          매너 평가하기
        </Button>
      </SubmitButtonWrapper>
    </Form>
  );
}

export default ReviewWrite;
