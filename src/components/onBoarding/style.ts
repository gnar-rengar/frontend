import styled from '@emotion/styled';

export const OnBoardingContainer = styled.form`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.header.height});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const OnBoardingEachContainer = styled.div<{ gap: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? '16' : '0')}px;

  .flexContainer {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IconAndNickname = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const IconImageContainer = styled.div`
  width: 50px;
  height: 48px;
  border-radius: 100px;
  border: 1px solid #35383d;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const NicknameContainer = styled.div`
  width: calc(100% - 50px);
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ShareButton = styled.button<{ active?: boolean }>`
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
  padding: 8px 12px;
  height: 48px;
  background-color: ${({ active, theme }) => active && theme.color.primary};
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

export const PlayStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PlayStyleRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SubmitButton = styled(ShareButton)<{ active: boolean }>`
  position: fixed;
  bottom: 20px;
  max-width: 343px;
  width: 100%;
  height: 48px;
  padding-top: 5px;
  background-color: ${({ active, theme }) => active && theme.color.primary};
`;

export const CustomInputBox = styled.input`
  display: none;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ChannelAndCommunication = styled.div`
  display: flex;
  flex-direction: column;
`;
