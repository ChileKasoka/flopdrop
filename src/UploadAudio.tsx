import React from "react";
import { UploadCloud, Music2, Loader2 } from "lucide-react";
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
        <div className="upload-header">
          <Music2 size={28} />
          <h2>Upload Your Beat</h2>
          <p>Drop your sound and share it with the world.</p>
        </div>

        {/* Drop Zone */}
        <div className="drop-zone" onClick={selectFile}>
          {!selectedFile ? (
            <>
              <UploadCloud size={40} />
              <p>Click to select or drag & drop</p>
              <span>MP3, WAV up to 50MB</span>
            </>
          ) : (
            <>
              <Music2 size={32} />
              <p className="file-name">{selectedFile.name}</p>
              <span>Ready to upload</span>
            </>
          )}
        </div>

        {/* Upload Button */}
        {selectedFile && (
          <button
            onClick={uploadFile}
            disabled={uploading}
            className="upload-button"
          >
            {uploading ? (
              <>
                <Loader2 size={18} className="spin" />
                Uploading...
              </>
            ) : (
              "Publish Beat"
            )}
          </button>
        )}

        {message && <p className="status">{message}</p>}
      </div>
    </div>
  );
};

export default UploadAudio;
