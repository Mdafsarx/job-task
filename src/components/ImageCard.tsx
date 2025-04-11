"use client";
import { FC, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ModalTriggerButton from "./ui/ModalTriggerButton";
import { Modal, ModalBody } from "./ui/Modal";
import { RiEyeFill } from "react-icons/ri";
import Image from "next/image";
import Swal from "sweetalert2";

interface ImageCardProps {
  url: string;
  title: string;
}

const ImageCard: FC<ImageCardProps> = ({ url, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="max-w-2xl w-full h-72 rounded-xl object-full"
        width={0}
        height={0}
        src={url}
        alt={title}
        unoptimized
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black/40 rounded-xl">
          <div className="absolute top-0 right-0 p-2 rounded-lg text-white cursor-pointer">
            <AiFillDelete size={20} onClick={handleDelete} />
          </div>
          <Modal>
            <div className="absolute size-fit top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <ModalTriggerButton
                title={"preview"}
                icon={<RiEyeFill />}
                className="bg-white text-black"
              />
            </div>
            <ModalBody>
              <Image
                alt={title}
                src={url}
                width={0}
                height={0}
                className="h-full w-full object-fil rounded-2xl"
                unoptimized
              />
            </ModalBody>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
