"use client";
import React, { useState } from "react";
import type { UploadProps } from "antd";
import { Upload, message } from "antd";
import { RiImageAddFill } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import { Button } from "@mui/material";

const { Dragger } = Upload;

const CLOUDINARY_UPLOAD_PRESET = "your_unsigned_preset";
const CLOUDINARY_CLOUD_NAME = "your_cloud_name";

const UploadFiles: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const props: UploadProps = {
    name: "file",
    multiple: true,
    beforeUpload(file) {
      setImageUrls((prev) => [...prev, URL.createObjectURL(file)]);
      return false; // Prevent default upload
    },
  };

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await (
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Upload failed:", error);
      message.error("Upload failed, please try again.");
      return null;
    }
  };

  console.log('imageUrls', imageUrls);

  return (
    <div>
      <Dragger
        style={{
          border: "2px dashed #80EEB4",
          fontFamily: "var(--font-nunito)",
        }}
        {...props}
      >
        <RiImageAddFill className="text-3xl mx-auto mb-1" />
        <p>Click or drag file to this area to upload</p>
        <p className="font-medium">or</p>
        <Upload {...props}>
          <Button
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              "&:hover": { opacity: "0.8" },
              textTransform: "capitalize",
              fontWeight: "semibold",
              padding: "4px 16px",
              fontFamily: "var(--font-nunito)",
            }}
          >
            <MdOutlineFileUpload className="text-xl" /> Click to Upload
          </Button>
        </Upload>
      </Dragger>

      <div className="mt-7 flex justify-end">
        <Button
          sx={{
            backgroundColor: "var(--primary-color)",
            color: "white",
            "&:hover": { opacity: "0.8" },
            textTransform: "capitalize",
            fontWeight: "semibold",
            padding: "4px 16px",
            fontFamily: "var(--font-nunito)",
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default UploadFiles;
