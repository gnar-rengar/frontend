import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { tendencyImage, tendencyResult } from '../../constant';
import { Kakao } from '../../types/kakao.type';
import { Button, Chip, Typography } from '../common';
import {
  ResultContainer,
  EndContainer,
  PlayStyleContainer,
  StartEndButtonContainer,
  ShareContainer,
  ShareButton,
  Share,
} from './style';

declare global {
  interface Window {
    Kakao: Kakao;
  }
}

interface EndProps {
  testAnswer: string[];
  setTestNumber: React.Dispatch<React.SetStateAction<number>>;
  setTestAnswer: React.Dispatch<React.SetStateAction<string[]>>;
}

function End({ testAnswer, setTestNumber, setTestAnswer }: EndProps) {
  const [result, setResult] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const resultArray = testAnswer.map(
      (answer: 'top' | 'bottom', index) => tendencyResult[index][answer]
    );
    setResult([...resultArray]);
  }, []);

  const onClickTestReset = () => {
    setTestNumber(-1);
    setTestAnswer([]);
  };

  const onClickKakao = () => {
    if (typeof window !== 'undefined') {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SDK);
      }
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '나의 롤 플레이 스타일은?',
          description: '듀오해듀오에서 플레이 스타일 테스트하고, 맞춤 듀오 추천받자!',
          imageUrl: 'https://duoplz.s3.ap-northeast-2.amazonaws.com/kakaoShare.png',
          link: {
            mobileWebUrl: 'https://duoduo.lol',
          },
        },
      });
    }
  };

  const onClickShare = async () => {
    if (navigator.share) {
      navigator
        .share({
          title: '나의 롤 플레이 스타일은?',
          text: '듀오해듀오에서 플레이 스타일 테스트하고, 맞춤 듀오 추천받자!',
          url: window.location.href,
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log('공유 실패', error));
    }
  };

  return (
    <>
      <EndContainer>
        <PlayStyleContainer>
          <Typography variant="h3" align="center">
            소환사님은
          </Typography>
          <ResultContainer>
            {result.map((style) => (
              <Chip key={style} size="lg" chosen color="secondary">
                {`#${style}`}
              </Chip>
            ))}
          </ResultContainer>
        </PlayStyleContainer>
        <Typography variant="h3" align="center">
          이런 플레이 스타일이군요!
        </Typography>
        <Image src={tendencyImage.end} width={240} height={240} />
        <Typography variant="h3" align="center">
          소환사님과 딱 맞는
          <br />
          찰떡궁합 듀오가 기다리오 있어요
        </Typography>
        <ShareContainer>
          <Share>
            <ShareButton onClick={onClickKakao} color="kakao">
              <Image src="/icons/kakao.svg" width="24px" height="24px" alt="kakao share" />
            </ShareButton>
            <Typography align="center" variant="captionSmallRegular">
              카카오톡으로
              <br />
              공유하기
            </Typography>
          </Share>
          <Share>
            <ShareButton onClick={onClickShare} color="linkShare">
              <Image src="/icons/link.svg" width="24px" height="24px" alt="kakao share" />
            </ShareButton>
            <Typography align="center" variant="captionSmallRegular">
              링크로
              <br />
              공유하기
            </Typography>
          </Share>
        </ShareContainer>
      </EndContainer>
      <StartEndButtonContainer>
        <Button onClick={onClickTestReset} size="md" variant="text" color="primaryVariant">
          테스트 다시 하기
        </Button>
        <Button
          onClick={() =>
            router.push(
              `/on-boarding?battle=${result[0]}&line=${result[1]}&champion=${result[2]}&physical=${result[3]}`
            )
          }
          size="lg"
          variant="contained"
          color="primaryVariant"
        >
          가입하고 찰떡 듀오 매칭하기
        </Button>
      </StartEndButtonContainer>
    </>
  );
}

export default End;
