"use client";
import { FC, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

interface ImageCardProps {
  image: {
    src: string;
    alt: string;
  };
}

const ImageCard: FC<ImageCardProps> = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="h-auto max-w-full rounded-lg"
        src={image.src}
        alt={image.alt}
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black/40 rounded-lg">
          <div className="absolute top-0 right-0 p-2 rounded-lg text-white cursor-pointer">
            <AiFillDelete size={20} />
          </div>
          <button className="absolute size-fit top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-black bg-white rounded py-1 px-2 cursor-pointer">
            Preview
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
