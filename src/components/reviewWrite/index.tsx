import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import usePatchReviewWrite from '../../hooks/usePatchReviewWrite';

import OnGoodReview from './OnGoodReview';
import OnBadReview from './OnBadReview';
import { Asking, BaseContainer, Button, StickyBottom } from '../common';

import { ButtonContainer } from './style';

import { reviewWriteErrorMessage } from '../../constant';
import type { ReviewWriteDTO } from '../../types/api.type';

const reviewWriteSchema = yup.object().shape({
  isGood: yup.boolean(),
  goodReview: yup.array(yup.string()).when('isGood', {
    is: true,
    then: (schema) => schema.min(1, reviewWriteErrorMessage.feedback),
  }),
  badReview: yup.array(yup.string()).when('isGood', {
    is: false,
    then: (schema) => schema.min(1, reviewWriteErrorMessage.feedback),
  }),
  additionalBadReview: yup.string().max(800),
});

const userId = '1';

function ReviewWrite() {
  const [isGood, setIsGood] = useState(true);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    setValue,
    getValues,
  } = useForm<ReviewWriteDTO>({
    defaultValues: {
      isGood: true,
      goodReview: [],
      badReview: [],
      additionalBadReaview: '',
    },
    resolver: yupResolver(reviewWriteSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    const err = Object.keys(errors);
    if (err.length === 0) return;

    router.push(`#${err[0]}`);
  }, [errors]);

  useEffect(() => {
    if (isGood) {
      setValue('badReview', []);
    } else {
      setValue('goodReview', []);
    }
  }, [isGood]);

  const { mutate } = usePatchReviewWrite();

  const onSubmit: SubmitHandler<ReviewWriteDTO> = (payload) => {
    mutate({ userId, payload });
  };

  const handleClick = () => {
    setIsGood((p) => !p);
    setValue('isGood', !getValues('isGood'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseContainer>
        <Asking title="고수달님은 어떠셨나요?" caption="진짜 플레이 했을 때만 평가해라">
          <ButtonContainer>
            <Button
              type="button"
              color={isGood ? 'primary' : 'disable'}
              size="sm"
              onClick={handleClick}
              value="joyful"
            >
              즐겁게 플레이 했어요
            </Button>
            <Button
              type="button"
              color={isGood ? 'disable' : 'primary'}
              size="sm"
              onClick={handleClick}
              value="awful"
            >
              별로에요
            </Button>
          </ButtonContainer>
        </Asking>
        {isGood ? (
          <OnGoodReview errors={errors.goodReview} register={register} />
        ) : (
          <OnBadReview errors={errors.badReview} register={register} />
        )}
      </BaseContainer>
      <StickyBottom>
        <Button type="submit" size="lg" color={isValid ? 'primaryVariant' : 'disable'}>
          매너 평가하기
        </Button>
      </StickyBottom>
    </form>
  );
}

export default ReviewWrite;
