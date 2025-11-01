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

    for (const file of files) {
      const title = titles[file.name] || file.name.replace(/\.[^/.]+$/, "");
      formData.append("audio", file);
      formData.append(`title_${file.name}`, title);

      // capture duration (optional)
      const audio = new Audio(URL.createObjectURL(file));
      audio.addEventListener("loadedmetadata", () => {
        formData.append(`duration_${file.name}`, audio.duration);
      });
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/upload",
        formData,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );

      console.log(response.data);
      alert("Upload successful!");
      setFiles([]);
      setTitles({});
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        alert("Unauthorized! Please login again.");
        // window.location.href = "/login";
      } else {
        alert("Upload failed!");
      }
    } finally {
      setUploading(false);
      setProgress(0);
    }
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
            placeholder="e.g., free-beats, album"
          />
        </div>

        <div className="form-group">
          <label>Select Audio Files</label>
          <input
            type="file"
            multiple
            accept=".mp3,.wav,.flac,.ogg"
            onChange={handleFilesChange}
          />
        </div>

        {files.length > 0 && (
          <div className="file-titles">
            <h3>File Titles (optional)</h3>
            {files.map((file) => (
              <div key={file.name} className="file-row">
                <span className="file-name">{file.name}</span>
                <input
                  type="text"
                  placeholder="Title"
                  value={titles[file.name] || ""}
                  onChange={(e) =>
                    handleTitleChange(file.name, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        )}

        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? `Uploading ${progress}%` : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default AudioUploadPage;
