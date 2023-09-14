import React, { useEffect } from 'react';
import style from './Modal.module.css';
import close from '../picture/x.svg';
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, openModal }) => {


  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        openModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      openModal();
    }
  };

  return createPortal(
    <div
      className={style.backdrop}
      onClick={handleBackdropClick}
   
    >
      <div className={style.modal}>
        <button
          type="button"
          className={style.closeIcon}
          onClick={() => openModal()}
        >
          <svg className={style.icon}>
            <use href={close} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

