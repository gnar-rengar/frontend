import React from 'react';
import Image from 'next/image';

import { ImageContainer, Vignette } from './style';

interface ImageAreaProps {
  profileUrl: string;
}

function ImageArea(props: ImageAreaProps) {
  const { profileUrl } = props;

  return (
    <ImageContainer>
      <Image src={profileUrl} width="120px" height="120px" alt="summoner icon" />
      <Vignette />
    </ImageContainer>
  );
}

export default ImageArea;
