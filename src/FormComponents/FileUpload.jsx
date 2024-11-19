import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = ({ type = "default", label = "Upload File" }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className={`file-upload-container ${type}`}>
      <label className="file-upload-label">{label}</label>
      {type === "default" && (
        <div className="file-upload">
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input"
            id="fileInput"
          />
          <label htmlFor="fileInput" className="file-button">
            Choose File
          </label>
          <span className="file-name">{fileName || "No file chosen"}</span>
        </div>
      )}
      {type === "multiple" && (
        <div className="file-upload">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="file-input"
            id="multiFileInput"
          />
          <label htmlFor="multiFileInput" className="file-button">
            Choose Files
          </label>
          <span className="file-name">{fileName || "No files chosen"}</span>
        </div>
      )}
      {type === "drag-and-drop" && (
        <div
          className="file-drag-drop"
          onDrop={(e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            setFileName(files[0]?.name || "No file dropped");
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <p>{fileName || "Drag and drop a file here, or click to select"}</p>
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input"
            id="dragDropInput"
          />
        </div>
      )}
    </div>
  );
};

export const FileUploadExamples = () => {
  return (
    <div className="file-upload-examples">
      <h2>File Upload Examples</h2>
      <div className="example">
        <h3>Default File Upload</h3>
        <FileUpload label="Upload your file" />
      </div>
      <div className="example">
        <h3>Multiple File Upload</h3>
        <FileUpload type="multiple" label="Upload multiple files" />
      </div>
      <div className="example">
        <h3>Drag and Drop File Upload</h3>
        <FileUpload type="drag-and-drop" label="Drag and Drop File" />
      </div>
    </div>
  );
};

export default FileUpload;
