"use client";
import { useEffect, useState } from "react";
import { Modal, ModalBody } from "@/components/ui/Modal";
import { VanishInput } from "@/components/ui/VanishInput";
import ImageCard from "@/components/ImageCard";
import ModalTriggerButton from "@/components/ui/ModalTriggerButton";
import UploadFiles from "@/components/UploadFiles";
import { useModal } from "@/context/ModalContext";
import { CiImageOn } from "react-icons/ci";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const GallerySection = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
  ];
  const [ImagesShow, setImagesShow] = useState(1);
  const imagesPerPage = 8;
  const { refresh } = useModal();
  const [images, setImages] = useState<{ url: string; title: string }[]>([]);
  const [displayedData, setDisplayedData] = useState<
    { url: string; title: string }[]
  >([]);

  const totalPages = images ? Math.ceil(images.length / imagesPerPage) : 0;

  useEffect(() => {
    const savedImages = JSON.parse(
      localStorage.getItem("uploadedImages") || "[]"
    );
    setImages(savedImages);
  }, [refresh]);

  useEffect(() => {
    const startIndex = (ImagesShow - 1) * imagesPerPage;
    const endIndex = ImagesShow * imagesPerPage;
    setDisplayedData(images.slice(startIndex, endIndex));
  }, [images, ImagesShow]);

  return (
    <section className="space-y-10">
      <div className="flex items-center justify-between">
        <VanishInput placeholders={placeholders} />
        <Modal>
          <ModalTriggerButton
            title="Upload"
            icon={<CiImageOn />}
            className="bg-white border border-[var(--primary-color)] text-[var(--primary-color)]"
          />
          <ModalBody>
            <UploadFiles />
          </ModalBody>
        </Modal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-8">
        {displayedData.map((image, index) => (
          <ImageCard key={index} url={image?.url} title={image.title} />
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-4 xl:mt-0 gap-4">
        <button
          onClick={() => {
            if (ImagesShow > 1) setImagesShow((prev) => prev - 1);
          }}
          className={`${
            ImagesShow === 1 ? "bg-[#16A34A66]" : "bg-[#16A34A33]"
          }  border-[#16A34A] border-2 rounded-full p-2`}
        >
          <GrFormPrevious className="text-xl text-[#16A34A]" />
        </button>
        <button
          onClick={() => {
            if (ImagesShow < totalPages) setImagesShow((prev) => prev + 1);
          }}
          className={`${
            ImagesShow === totalPages ? "bg-[#16A34A66]" : "bg-[#16A34A33]"
          }  border-[#16A34A] border-2 rounded-full p-2`}
        >
          <GrFormNext className="text-xl text-[#16A34A]" />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
