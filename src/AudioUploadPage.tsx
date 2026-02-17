import React, { useState, useRef, DragEvent } from "react";
import axios, { AxiosProgressEvent } from "axios";
import { UploadCloud, Loader2, Music2 } from "lucide-react";
import "./AudioUploadPage.css";

const AudioUploadPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState<string>("");
  const [titles, setTitles] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  const handleTitleChange = (filename: string, value: string) => {
    setTitles((prev) => ({ ...prev, [filename]: value }));
  };

  const handleUpload = async () => {
    if (!category) {
      alert("Please enter a category");
      return;
    }
    if (files.length === 0) {
      alert("Please select at least one audio file");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      window.location.href = "/login";
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("category", category);

    files.forEach((file) => {
      const title = titles[file.name] || file.name.replace(/\.[^/.]+$/, "");
      formData.append("audio", file);
      formData.append(`title_${file.name}`, title);
    });

    try {
      await axios.post("http://localhost:8080/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          }
        },
      });

      alert("Upload successful!");
      setFiles([]);
      setTitles({});
    } catch (err: any) {
      console.error(err);
      alert(err.response?.status === 401 ? "Unauthorized!" : "Upload failed!");
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <h2>Upload Audio Files</h2>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Afrobeat, Trap, Album"
          />
        </div>

        <div
          className="drop-zone"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current?.click()}
        >
          <UploadCloud size={48} className="drop-icon" />
          <p>Drag & drop your audio files here</p>
          <span>MP3 • WAV • FLAC • OGG</span>
          <input
            type="file"
            multiple
            accept=".mp3,.wav,.flac,.ogg"
            onChange={handleFilesChange}
            ref={fileInputRef}
            className="hidden-input"
          />
        </div>

        {files.length > 0 && (
          <div className="file-list">
            {files.map((file) => (
              <div key={file.name} className="file-row">
                <Music2 size={20} className="file-icon" />
                <span className="file-name">{file.name}</span>
                <input
                  type="text"
                  placeholder="Optional title"
                  value={titles[file.name] || ""}
                  onChange={(e) => handleTitleChange(file.name, e.target.value)}
                />
              </div>
            ))}
          </div>
        )}

        {uploading && (
          <div className="progress-wrapper">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        )}

        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? (
            <>
              <Loader2 size={18} className="spin" /> Uploading {progress}%
            </>
          ) : (
            "Publish"
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioUploadPage;
