import React from 'react';
import { Typography } from '../common';
import { Section } from './style';

interface VoiceSectionProps {
  isVoiceOn: boolean;
  voiceChannel: string[];
  communication: string;
}

function VoiceSection(props: VoiceSectionProps) {
  const { isVoiceOn, voiceChannel, communication } = props;

  return (
    <Section>
      {isVoiceOn ? (
        <>
          <Typography variant="h3">{`주로 ${voiceChannel.join(', ')}에서`}</Typography>
          <Typography variant="h3">{communication}</Typography>
        </>
      ) : (
        <Typography variant="h3">보이스를 하지 않아요</Typography>
      )}
    </Section>
  );
}

export default VoiceSection;
