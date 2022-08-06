import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px 0;
`;

export const WithdrawalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const WithdrawalInfoContainer = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Ul = styled.ul`
  list-style: disc;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li::marker {
    font-size: 10px;
  }
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SuccessContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.header.height});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
