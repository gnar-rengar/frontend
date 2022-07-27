import Link from 'next/link';
import React from 'react';
import { Button, Typography } from '../common';
import { InValidContainer } from './style';

interface InValidProps {
  title: string;
  path: string;
  buttonText: string;
}

function InValid(props: InValidProps) {
  const { title, path, buttonText } = props;

  return (
    <InValidContainer>
      <div>
        <Typography variant="body1" color="onBackground" align="center" whiteSpace="pre-line">
          {title}
        </Typography>
      </div>
      <Link href={path}>
        <a>
          <Button variant="contained" size="sm">
            {buttonText}
          </Button>
        </a>
      </Link>
    </InValidContainer>
  );
}

export default InValid;
