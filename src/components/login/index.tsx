import React from 'react';
import { Button, Typography } from '../common';
import { ButtonContainer, LoginContainer } from './style';

function Login() {
  return (
    <LoginContainer>
      <Typography variant="caption">DUODUO</Typography>
      <ButtonContainer>
        <Button size="lg">카카오로 로그인</Button>
        <Button size="lg">구글 아디로 로그인</Button>
        <Button size="lg">네이버로 로그인</Button>
      </ButtonContainer>
    </LoginContainer>
  );
}

export default Login;
