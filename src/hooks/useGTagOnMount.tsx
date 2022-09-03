import { useEffect } from 'react';
import { emit } from '../gtag';

const useGTagOnMount = (event: string, params?: { [key in string]: any }) => {
  useEffect(() => {
    emit(event, params);
  }, []);
};

export default useGTagOnMount;
