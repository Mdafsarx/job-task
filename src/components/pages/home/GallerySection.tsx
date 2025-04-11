import { Modal, ModalBody } from "@/components/ui/Modal";
import { VanishInput } from "@/components/ui/VanishInput";
import ImageCard from "@/components/ImageCard";
import ModalTriggerButton from "@/components/ui/ModalTriggerButton";
import UploadFiles from "@/components/UploadFiles";

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
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;