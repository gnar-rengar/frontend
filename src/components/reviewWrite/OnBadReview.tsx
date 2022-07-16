import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import TextArea from '../common/textarea';
import { Asking, CheckBox, Typography } from '../common';

import { badReviewOptions } from '../../constant';

import type { ReviewWriteDTO } from '../../types/api.type';

interface OnBadReviewProps {
  register: UseFormRegister<ReviewWriteDTO>;
  errors?: FieldError[];
}

function OnBadReview(props: OnBadReviewProps) {
  const { register, errors } = props;

  return (
    <>
      <div id="badReview">
        <Asking
          title="어떤 점이 별로였는지 알려주세요"
          caption="작성하신 리뷰는 익명으로 전달돼요."
        >
          {badReviewOptions.map((option) => (
            <CheckBox key={option} label={option} register={register('badReview')} />
          ))}
        </Asking>
        {errors && (
          <Typography variant="caption" color="error" paragraph>
            {(errors as any).message}
          </Typography>
        )}
      </div>
      <Asking
        title="어떤 점이 별로였는지 알려주세요"
        caption={'작성하신 리뷰는 운영팀에게만 전달되어\n서비스 개선에 활용할 예정이에요.'}
        whiteSpace="pre-line"
      >
        <TextArea register={register('additionalBadReaview')} />
      </Asking>
    </>
  );
}

export default OnBadReview;
