import React from "react";
import "./UploadAudio.css";

interface Props {
  selectedFile: File | null;
  uploading: boolean;
  message: string;
  selectFile: () => void;
  uploadFile: () => void;
}

const UploadAudio: React.FC<Props> = ({
  selectedFile,
  uploading,
  message,
  selectFile,
  uploadFile,
}) => {
  return (
    <div className="upload-page">

      <div className="upload-card">

        {/* HEADER */}
        <div className="upload-header">
          <h2>🎧 Upload Your Sound</h2>
          <p>Drop your beat, share your vibe with the world</p>
        </div>

        {/* DROPZONE */}
        <div className="dropzone" onClick={selectFile}>
          {!selectedFile ? (
            <>
              <div className="icon">⬆️</div>
              <p>Click to select or upload your audio file</p>
              <span>MP3, WAV supported</span>
            </>
          ) : (
            <>
              <div className="icon">🎵</div>
              <p className="file-name">{selectedFile.name}</p>
              <span>Ready to upload</span>
            </>
          )}
        </div>

        {/* ACTION BUTTON */}
        {selectedFile && (
          <button
            onClick={uploadFile}
            disabled={uploading}
            className="upload-btn"
          >
            {uploading ? "Uploading..." : "🚀 Upload Track"}
          </button>
        )}

        {/* STATUS */}
        {message && <p className="status-text">{message}</p>}

      </div>
    </div>
  );
};

export default UploadAudio;