import React, { useRef, useState } from 'react';
import TextField from '../components/common/TextField';

function Home() {
  const [inputValue, setInputValue] = useState('');

  const ref = useRef(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <TextField ref={ref} onChange={handleChange} name="" placeholder="닉네임" />
    </div>
  );
}

export default Home;
