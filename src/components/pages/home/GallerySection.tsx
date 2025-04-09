import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/Modal";
import { VanishInput } from "@/components/ui/VanishInput";
import React from "react";
import { ModalContent } from "../../ui/Modal";
import { CiImageOn } from "react-icons/ci";

const GallerySection = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "How to assemble your own PC?",
  ];

  const images = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
      alt: "",
    },
  ];

  return (
    <section className="space-y-10">
      {/* search and upload */}
      <div className="flex items-center justify-between">
        <VanishInput placeholders={placeholders} />
        <Modal>
          <ModalTrigger className="bg-white cursor-pointer border border-[var(--primary-color)] flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-[var(--primary-color)] font-bold">
              Upload
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
              <CiImageOn className="text-[var(--primary-color)]" />
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <div></div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
