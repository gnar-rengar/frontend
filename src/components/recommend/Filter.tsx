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
  tier: yup.array(yup.string()).min(1, ''),
});

function Filter({ setFilterState }: FilterProps) {
  const [open, setOpen] = useState(false);
  const {
    icon: {
      size: { sm },
    },
  } = useTheme();

  const { register, handleSubmit, watch } = useForm<FilterRequestDTO>({
    resolver: yupResolver(filterSchema),
  });
  const checkedTier = watch('tier') as string[];

  const onSubmit: SubmitHandler<FilterRequestDTO> = (data) => {
    const selectTier = data.tier.map((item) => tierEng[item]);
    setFilterState([...selectTier]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FilterContainer open={open}>
        {checkedTier ? (
          <Typography variant="body3">{checkedTier.join(', ')}</Typography>
        ) : (
          <Typography variant="body3" color="onBackgroundSub">
            원하는 티어 조건을 선택해주세요
          </Typography>
        )}
        <ArrowButtonContainer>
          {open ? (
            <Image
              onClick={() => setOpen((prev) => !prev)}
              src="/icons/arrow-top.svg"
              width={sm}
              height={sm}
              alt="filter close"
            />
          ) : (
            <Image
              onClick={() => setOpen((prev) => !prev)}
              src="/icons/arrow-bottom.svg"
              width={sm}
              height={sm}
              alt="filter open"
            />
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
          <Button size="md" variant="outlined" color="onBackgroundSub">
            필터 초기화
          </Button>
          <Button type="submit" size="md" color="primaryVariant">
            필터 적용하기
          </Button>
        </ButtonContainer>
      </Accordion>
    </form>
  );
}

export default Filter;
