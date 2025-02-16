import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-[9999]">
      <div className="w-full h-full sm:h-max sm:mx-4 md:mx-0 md:w-2/3 lg:w-2/3 bg-white py-4 px-8 rounded-lg animate-jump ease-in-out">
        {children}
      </div>
      <div
        className="absolute top-0 w-full h-full bg-black bg-opacity-90 cursor-pointer z-[-1]"
        onClick={onClose}
      />
    </div>,
    document.body
  );
};

export default Modal;
