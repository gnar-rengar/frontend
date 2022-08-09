import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CheckBox, Typography } from '../common';
import {
  FilterContainer,
  Accordion,
  CheckboxContainer,
  ButtonContainer,
  ArrowButtonContainer,
} from './style';
import { filterTier, tierEng } from '../../constant';
import { FilterRequestDTO } from '../../types/api.type';

interface FilterProps {
  setFilterState: React.Dispatch<React.SetStateAction<string[]>>;
}

const filterSchema = yup.object().shape({
  // tier: yup.array(yup.string()).min(1, ''),
});

function Filter({ setFilterState }: FilterProps) {
  const [open, setOpen] = useState(false);
  const {
    icon: {
      size: { md },
    },
  } = useTheme();

  const { register, handleSubmit, watch, reset } = useForm<FilterRequestDTO>({
    resolver: yupResolver(filterSchema),
  });
  const checkedTier = watch('tier') as string[];

  const onClickFilterReset = () => {
    setFilterState([]);
    reset();
  };

  const onSubmit: SubmitHandler<FilterRequestDTO> = (data) => {
    const selectTier = data.tier ? data.tier.map((item) => tierEng[item]) : [];
    setFilterState([...selectTier]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FilterContainer onClick={() => setOpen((prev) => !prev)} open={open}>
        {checkedTier && checkedTier.length > 0 ? (
          <Typography variant="body3">{checkedTier.join(', ')}</Typography>
        ) : (
          <Typography variant="body3" color="onBackgroundSub">
            원하는 티어 조건을 선택해주세요
          </Typography>
        )}
        <ArrowButtonContainer>
          {open ? (
            <Image src="/icons/arrow-top.svg" width={md} height={md} alt="filter close" />
          ) : (
            <Image src="/icons/arrow-bottom.svg" width={md} height={md} alt="filter open" />
          )}
        </ArrowButtonContainer>
      </FilterContainer>
      <Accordion open={open}>
        <CheckboxContainer>
          {filterTier.map((tier) => (
            <CheckBox key={tier} label={tier} register={register('tier')} />
          ))}
        </CheckboxContainer>
        <ButtonContainer>
          <Button
            size="lg"
            onClick={onClickFilterReset}
            width="120px"
            variant="outlined"
            color="onBackgroundSub"
          >
            조건 초기화
          </Button>
          <Button type="submit" width="calc(100% - 120px)" size="lg" color="primaryVariant">
            조건 적용하기
          </Button>
        </ButtonContainer>
      </Accordion>
    </form>
  );
}

export default Filter;
