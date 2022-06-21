import React, { useRef, useState } from 'react';
import CheckBox from '../components/common/CheckBox';
import Chip from '../components/common/Chip';
import TextField from '../components/common/TextField';
import Typography from '../components/common/Typography';

function Home() {
  const [, setInputValue] = useState('');

  const ref = useRef(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <TextField ref={ref} onChange={handleChange} name="" placeholder="닉네임" />
      <Chip chosen>Chip</Chip>
      <CheckBox label="click" checked />
      <Typography variant="h3">hello world</Typography>
    </div>
  );
}

export default Home;
