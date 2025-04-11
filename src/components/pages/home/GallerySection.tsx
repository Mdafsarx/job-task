"use client";
import { Modal, ModalBody } from "@/components/ui/Modal";
import { VanishInput } from "@/components/ui/VanishInput";
import ImageCard from "@/components/ImageCard";
import ModalTriggerButton from "@/components/ui/ModalTriggerButton";
import UploadFiles from "@/components/UploadFiles";
import { useEffect, useState } from "react";
import { useModal } from "@/context/ModalContext";

const GallerySection = () => {
  const { refresh } = useModal();
  const [images, setImages] = useState<{ url: string; title: string }[]>([]);
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
  ];

  useEffect(() => {
    const savedImages = JSON.parse(
      localStorage.getItem("uploadedImages") || "[]"
    );
    if (savedImages.length > 0) {
      setImages(savedImages);
    }
  }, [refresh]);

  return (
    <section className="space-y-10">
      <div className="flex items-center justify-between">
        <VanishInput placeholders={placeholders} />
        <Modal>
          <ModalTriggerButton />
          <ModalBody>
            <UploadFiles />
          </ModalBody>
        </Modal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} url={image?.url} title={image.title} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
