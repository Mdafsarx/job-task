import React from "react";
import { ModalTrigger } from "./Modal";
import { CiImageOn } from "react-icons/ci";

const ModalTriggerButton = () => {
  return (
    <ModalTrigger className="bg-white cursor-pointer border border-[var(--primary-color)] flex justify-center group/modal-btn">
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-[var(--primary-color)] font-bold">
        Upload
      </span>
      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
        <CiImageOn className="text-[var(--primary-color)]" />
      </div>
    </ModalTrigger>
  );
};

export default ModalTriggerButton;
