import styled from '@emotion/styled';

export const OnBoardingContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding-bottom: calc(48px * 2);
`;

export const OnBoardingEachContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .titleContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .nickNameContainer {
    & > div > p {
      color: ${(props) => props.theme.color.ERROR};
    }
    .flexContainer {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 8px;
    }
  }
`;

const ShareButton = styled.button`
  background-color: ${(props) => props.theme.color.DISABLE};
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.ON_PRIMARY};
  border: none;
  justify-content: center;
  cursor: pointer;
`;

export const NickNameButton = styled(ShareButton)`
  background-color: ${(props) => props.theme.color.SUB_ON_BACKGROUND};
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

export const VoiceButton = styled(ShareButton)`
  padding: 8px 16px;
`;

export const SubmitButton = styled(ShareButton)`
  max-width: 343px;
  width: 100%;
  height: 48px;
  padding-top: 5px;
  position: fixed;
  bottom: 20px;
`;
