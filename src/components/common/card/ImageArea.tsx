import React from 'react';
import Image from 'next/future/image';

import { ImageContainer, Vignette } from './style';

interface ImageAreaProps {
  profileUrl: string;
}

function ImageArea(props: ImageAreaProps) {
  const { profileUrl } = props;

  return (
    <ImageContainer>
      <Image src={profileUrl} width="120px" height="120px" />
      <Vignette />
      {/* <Filter /> */}
    </ImageContainer>
  );
}

export default ImageArea;

// TEMPORARY
// const Filter = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 80px;
//   height: 100%;
//   background: ${({ theme: { color } }) => color.surface};
//   filter: blur(33px);
//   transform: translateX(50%);
// `;
