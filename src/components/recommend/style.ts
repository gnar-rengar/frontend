import styled from '@emotion/styled';

export const FitContainer = styled.div`
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FitRecommend = styled.div`
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

export const FilterContainer = styled.div<{ open: boolean }>`
  position: relative;
  width: 100%;
  height: 44px;
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.color.onBackground};
  border-radius: ${(props) => (props.open ? '8px 8px 0 0' : '8px')};
  border-bottom: ${(props) => props.open && 'none'};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Accordion = styled.div<{ open: boolean }>`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  position: absolute;
  left: 16px;
  right: 16px;
  height: 270px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.color.onBackground};
  border-radius: 0px 0px 8px 8px;
  border-top: ${(props) => !props.open && 'none'};
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme.color.background};
  z-index: 99;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const ArrowButtonContainer = styled.div`
  cursor: pointer;
`;

export const NoneContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
