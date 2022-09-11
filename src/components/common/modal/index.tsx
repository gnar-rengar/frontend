import { createElement, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../atom';
import ContactVerificationModal from './ContactVerificationModal';
import NotificationModal from './NotificationModal';

const modalTypes = {
  contact: ContactVerificationModal,
  notification: NotificationModal,
};

function Modal({ type }: { type: 'contact' | 'notification' }) {
  const [isMounted, setIsMounted] = useState(false);
  const [portalState, setPortalState] = useRecoilState(modalState);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    portalState &&
    isMounted &&
    ReactDom.createPortal(
      createElement(modalTypes[type], { setPortalState }),
      document?.querySelector('#portal')
    )
  );
}

export default Modal;
