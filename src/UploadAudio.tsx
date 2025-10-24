import React from "react";
import "./UploadAudio.css";

interface Props {
  selectedFile: File | null;
  uploading: boolean;
  message: string;
  selectFile: () => void; // triggers file input
  uploadFile: () => void; // triggers upload
}

const UploadAudio: React.FC<Props> = ({
  selectedFile,
  uploading,
  message,
  selectFile,
  uploadFile,
}) => {
  return (
    <div className="page-wrapper">
      <div className="upload-container">
        {/* Always show button */}
        {!selectedFile && (
          <button onClick={selectFile} className="upload-btn">
            Select File 🎵
          </button>
        )}

        {/* Show file name and upload button if a file is selected */}
        {selectedFile && (
          <>
            <p className="file-name">Selected: {selectedFile.name}</p>
            <button
              onClick={uploadFile}
              disabled={uploading}
              className="upload-btn"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </>
        )}

        {/* Show message if any */}
        {message && <p className="status-text">{message}</p>}
      </div>
    </div>
  );
};

export default UploadAudio;
