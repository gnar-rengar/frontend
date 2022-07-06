import styled from '@emotion/styled';

export const StyledCard = styled.div`
  display: flex;
  width: 343px;
  height: 120px;
  background: ${({ theme: { color } }) => color.surface};
  border-radius: 16px;
  overflow: hidden;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24p;
    border-radius: 50%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const Vignette = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    ${({ theme: { color } }) => color.surface}
  );
`;

export const Ul = styled.ul`
  display: flex;
  gap: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  width: 223px;
  gap: 20px;
`;

export const Tier = styled.span`
  width: 42px;
  height: 18px;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 9px;
  line-height: 12px;

  ${({ theme: { color } }) => `
    border: 0.5px solid ${color.onBackgroundSub};
    color: ${color.onBackgroundSub};

    &:first-of-type {
      border: 0.5px solid ${color.onSurface};
      color: ${color.onSurface};
    }
  `};
`;

export const NameVoiceAndPosition = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameVoice = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ImgWrapper = styled.span`
  width: 24px;
  height: 24px;
  img {
    border-radius: 50%;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
