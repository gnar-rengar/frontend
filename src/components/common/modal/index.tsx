import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import ContactVerificationModal from './ContactVerificationModal';

import { ModalContainer } from './style';

function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const portal = document.createElement('div');
    portal.setAttribute('id', 'portal');
    const root = document.querySelector('#__next');
    document.body.insertBefore(portal, root);

    return () => {
      document.body.removeChild(portal);
    };
  }, []);

  return (
    isMounted &&
    ReactDom.createPortal(
      <ModalContainer>
        <ContactVerificationModal />
      </ModalContainer>,
      document?.querySelector('#portal')
    )
  );
}

export default Modal;
