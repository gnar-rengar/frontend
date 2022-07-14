import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { goodReviewOptions } from '../../constant';
import { ReviewWriteDTO } from '../../types/api.type';
import { Asking, CheckBox, Typography } from '../common';

interface OnGoodReviewProps {
  register: UseFormRegister<ReviewWriteDTO>;
  errors?: FieldError[];
}

function OnGoodReview(props: OnGoodReviewProps) {
  const { register, errors } = props;

  return (
    <div id="goodReview">
      <Asking
        title="어떤 점이 즐거우셨나요?"
        caption="내가 표시한 평가는 상대에게 보여지지만 누가 했는지는 안보여요"
      >
        {goodReviewOptions.map((option) => (
          <CheckBox key={option} label={option} register={register('goodReview')} />
        ))}
      </Asking>
      {errors && (
        <Typography variant="caption" color="error" paragraph>
          {(errors as any).message}
        </Typography>
      )}
    </div>
  );
}

export default OnGoodReview;
