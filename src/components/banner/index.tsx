import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { ColorVariant } from '../../types/theme.type';
import { Button } from '../common';
import { ButtonContainer, CloseButton, Container, ImageContainer } from './style';

interface BannerDetailProps {
  src: string;
  height: number;
  buttonColor: ColorVariant;
  buttonText: string;
}

function BannerDetail(props: BannerDetailProps) {
  const router = useRouter();
  const { src, height, buttonText, buttonColor } = props;
  const {
    icon: {
      size: { xl },
    },
  } = useTheme();

  return (
    <Container>
      <ImageContainer>
        <Image src={src} layout="responsive" width="480px" height={`${height}px`} />
      </ImageContainer>
      <CloseButton onClick={() => router.back()}>
        <Image src="/icons/close.svg" width={xl} height={xl} />
      </CloseButton>
      <ButtonContainer>
        <Button onClick={() => router.push('/')} color={buttonColor} size="lg">
          {buttonText}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default BannerDetail;
