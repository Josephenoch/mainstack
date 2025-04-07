import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type TProps = {
  children: ReactNode;
  opacity: number;
  onClick?:  () => void,
  open: boolean;
  blur?: boolean;
};

const Overlay: FC<TProps> = ({ children, onClick, opacity, open, blur }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLBodyElement | null>(null)
  const [modalOpen, setModalOpen] = useState(false);
  const [shouldRenderModal, setShouldRenderModal] = useState(false)

  useEffect(() => {
    bodyRef.current = document.querySelector<HTMLBodyElement>("body")
    ref.current = document.querySelector<HTMLDivElement>('#modal-portal');
  }, []);

  const handleBTNPressed = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && onClick) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) => handleBTNPressed(e));
    return () =>
      document.removeEventListener('keydown', (e) => handleBTNPressed(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleOpen = () => {
    if (open) {
        bodyRef.current?.classList.add("overflow-hidden")
        setShouldRenderModal(open)
        setTimeout(() => { setModalOpen(open) }, 100)
      }
      else {
        bodyRef.current?.classList.remove("overflow-hidden")
        setModalOpen(open)
        setTimeout(() => { setShouldRenderModal(open) }, 500)
      }
    }
    handleOpen()
  }, [open]);

  return ref.current && shouldRenderModal ? (
    createPortal(
      <div
        className={`fixed inset-0 z-[100000000] ${modalOpen ? "opacity-100" : "opacity-0"} transition-all duration-500 ${blur ? 'backdrop-blur-sm' : ''}`}
        style={{
          background: `rgba(0, 0, 0, ${opacity / 100})`,
        }}
      >
        <div className={`absolute blur-md w-full h-full left-0 right-0`} onClick={onClick} />
            {children}
        </div>,
      ref.current
    )
  ) : null;
};


export default Overlay