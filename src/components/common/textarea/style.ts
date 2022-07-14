import styled from '@emotion/styled';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 343px;
  min-height: 176px;
  padding: 16px;
  gap: 6px;
  border: 1px solid #949494;
  border-radius: 16px;
  background: inherit;
  color: #949494;

  textarea {
    width: 100%;
    min-height: 120px;
    background: inherit;
    overflow: hidden;
    resize: none;
    outline: none;
    border: none;
    color: inherit;
    font-family: 'Pretendard Variable', notokr, 'Nanum Gothic', 'Malgun Gothic', sans-serif;
    ${({ theme: { typography } }) => `
      font-size: ${typography.body3.fontSize};
      font-weight: ${typography.body3.fontWeight};
      line-height: ${typography.body3.lineHeight};
    `}
  }
`;
