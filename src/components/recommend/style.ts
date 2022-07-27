import styled from '@emotion/styled';

export const HarmonyContainer = styled.div`
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HarmonyRecommend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const NewContainer = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border: 1px solid ${(props) => props.theme.color.onBackground};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Accordion = styled.div`
  width: 100%;
  height: 270px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.color.onBackground};
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  gap: 12px;
`;
