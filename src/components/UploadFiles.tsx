"use client";
import React from "react";
import type { UploadProps } from "antd";
import { Upload } from "antd";
import { RiImageAddFill } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import { Button } from "@mui/material";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  beforeUpload(file) {
    console.log("Uploaded file:", file);
    return false;
  },
};

const UploadFiles: React.FC = () => (
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

export default UploadFiles;
