import styled from '@emotion/styled';

export const OnBoardingContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: calc(48px * 2);
`;

export const OnBoardingEachContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .flexContainer {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const ShareButton = styled.button`
  background-color: ${({ theme }) => theme.color.disable};
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.onPrimary};
  border: none;
  justify-content: center;
  cursor: pointer;
`;

export const NickNameButton = styled(ShareButton)`
  background-color: ${({ theme }) => theme.color.onBackgroundSub};
  padding: 8px 16px;
  height: 48px;
`;

export const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const VoiceButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const VoiceButton = styled(ShareButton)<{ active: boolean }>`
  padding: 8px 16px;
  ${({ active, theme }) => {
    if (active) {
      return `
        background-color: ${theme.color.primary};
      `;
    }
    return `
      background-color: ${theme.color.disable};
    `;
  }}
`;

export const SubmitButton = styled(ShareButton)<{ active: boolean }>`
  position: fixed;
  bottom: 20px;
  max-width: 343px;
  width: 100%;
  height: 48px;
  padding-top: 5px;
  ${({ active, theme }) => {
    if (active) {
      return `
        background-color: ${theme.color.primary};
      `;
    }
    return `
      background-color: ${theme.color.disable};
    `;
  }}
`;

export const CustomCheckbox = styled.input`
  display: none;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
