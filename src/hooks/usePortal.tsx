import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { modalState } from '../atom';

const usePortal = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const modalAtom = useRecoilValue(modalState);

  useEffect(() => {
    if (!modalAtom) return;

    const portal = document.createElement('div');
    portal.setAttribute('id', 'portal');
    const root = document.querySelector('#__next');
    document.body.insertBefore(portal, root);

    return () => {
      document.body.removeChild(portal);
    };
  }, [modalAtom]);
};

export default usePortal;
