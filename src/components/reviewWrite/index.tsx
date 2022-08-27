import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import usePatchReviewWrite from '../../hooks/usePatchReviewWrite';

import OnGoodReview from './OnGoodReview';
import OnBadReview from './OnBadReview';
import { Asking, BaseContainer, Button, StickyBottom } from '../common';

import { ButtonContainer, Form } from './style';

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

interface ReviewWriteProps {
  userId: string;
  lolNickname: string;
}

function ReviewWrite(props: ReviewWriteProps) {
  const { userId, lolNickname } = props;

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
      additionalBadReview: '',
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
    setValue('additionalBadReview', '');
  }, [isGood]);

  const { mutate } = usePatchReviewWrite();

  const onSubmit: SubmitHandler<ReviewWriteDTO> = (payload) => {
    mutate({ userId, payload });
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const { value } = e.currentTarget;
    if (value === 'joyful') {
      setIsGood(true);
    } else {
      setIsGood(false);
    }
    setValue('isGood', !getValues('isGood'));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BaseContainer>
        <Asking
          title={`${lolNickname}님은 어떠셨나요?`}
          caption={
            '실제 플레이를 함께 했을 때만 남겨주세요\n허위 리뷰 작성 시 이용이 제한될 수 있어요'
          }
          whiteSpace="pre-line"
        >
          <ButtonContainer>
            <Button
              type="button"
              color={isGood ? 'primary' : 'disable'}
              size="sm"
              onClick={handleClick}
              value="joyful"
            >
              즐거웠어요
            </Button>
            <Button
              type="button"
              color={isGood ? 'disable' : 'primary'}
              size="sm"
              onClick={handleClick}
              value="awful"
            >
              실망했어요
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
    </Form>
  );
}

export default ReviewWrite;
