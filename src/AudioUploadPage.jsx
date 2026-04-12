import React, { useState } from "react";
import axios from "axios";
import "./AudioUploadPage.css";

const AudioUploadPage = () => {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState("");
  const [titles, setTitles] = useState({});
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFilesChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleTitleChange = (filename, value) => {
    setTitles((prev) => ({ ...prev, [filename]: value }));
  };

  const handleUpload = async () => {
    if (!category || files.length === 0) return alert("Fill all fields");

    const token = localStorage.getItem("token");
    if (!token) return (window.location.href = "/login");

    setUploading(true);

    const formData = new FormData();
    formData.append("category", category);

    files.forEach((file) => {
      const title =
        titles[file.name] || file.name.replace(/\.[^/.]+$/, "");

      formData.append("audio", file);
      formData.append(`title_${file.name}`, title);
    });

    try {
      await axios.post("http://localhost:8080/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (e) => {
          setProgress(Math.round((e.loaded * 100) / e.total));
        },
      });

      alert("Upload successful!");
      setFiles([]);
      setTitles({});
      setProgress(0);
    } catch (err) {
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="studio-page">

      <div className="studio-card">

        {/* HEADER */}
        <div className="studio-header">
          <h2>🎧 Creator Upload Studio</h2>
          <p>Upload and manage your projects like a pro</p>
        </div>

        {/* CATEGORY */}
        <input
          className="input"
          placeholder="Category (e.g. Trap, Afrobeats)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        {/* DROPZONE */}
        <label className="dropzone">
          <input
            type="file"
            multiple
            accept=".mp3,.wav,.flac,.ogg"
            onChange={handleFilesChange}
          />
          <div>
            <p>⬆️ Drag & drop or click to upload snips</p>
            <span>{files.length} file(s) selected</span>
          </div>
        </label>

        {/* FILE LIST */}
        {files.length > 0 && (
          <div className="file-list">
            {files.map((file) => (
              <div key={file.name} className="file-item">
                <span>{file.name}</span>
                <input
                  placeholder="Track title"
                  value={titles[file.name] || ""}
                  onChange={(e) =>
                    handleTitleChange(file.name, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        )}

        {/* PROGRESS BAR */}
        {uploading && (
          <div className="progress-wrapper">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            />
            <span>{progress}% uploading...</span>
          </div>
        )}

        {/* BUTTON */}
        <button
          className="upload-btn"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "🚀 Upload"}
        </button>
      </div>
    </div>
  );
};

export default AudioUploadPage;