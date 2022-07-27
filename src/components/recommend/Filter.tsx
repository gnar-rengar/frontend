import React from 'react';
import Image from 'next/image';
import { Button, CheckBox, Typography } from '../common';
import { FilterContainer, Accordion, CheckboxContainer, ButtonContainer } from './style';
import { filterTier } from '../../constant';

function Filter() {
  return (
    <div>
      <FilterContainer>
        <Typography variant="body3" color="onBackgroundSub">
          원하는 티어 조건을 선택해주세요
        </Typography>
        <Image src="/icons/arrow-bottom.svg" width="20px" height="20px" />
      </FilterContainer>
      <Accordion>
        <CheckboxContainer>
          {filterTier.map((tier) => (
            <CheckBox key={tier} label={tier} />
          ))}
        </CheckboxContainer>
        <ButtonContainer>
          <Button size="md" variant="outlined" color="onBackgroundSub">
            필터 초기화
          </Button>
          <Button size="md" color="primaryVariant">
            필터 적용하기
          </Button>
        </ButtonContainer>
      </Accordion>
    </div>
  );
}

export default Filter;
