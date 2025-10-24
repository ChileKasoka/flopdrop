import Header from "./Header.jsx";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer.tsx";
import UploadAudio from "./UploadAudio.tsx";
import ChonkBeatsGrid from "./ChonkBeatsGrid.tsx";
import FeaturedProducers from "./FeaturedProducers.jsx";
import TrendingBeats from "./TrendingBeats.jsx";
import Footer from "./Footer.jsx";
import { useAudioUpload } from "./hooks/useAudioUpload.ts";
import { useState } from "react";

export default function App() {
  const {
    fileInputRef,
    selectedFile,
    uploading,
    message,
    selectFile,
    onFileChange,
    uploadFile,
  } = useAudioUpload();

  const [currentTrack, setCurrentTrack] = useState<{ name: string, file: string, cover: string } | null>(null);


  return (
<div className="app">
  <Header />
  <div className="content">
    {currentTrack && <div style={{ height: '100px' }} />} {/* height = AudioPlayer height */}
    <AudioPlayer track={currentTrack} />

    <ChonkBeatsGrid
      currentTrack={currentTrack}
      setCurrentTrack={setCurrentTrack}
    />

    <div>
      <img src="/flopdrop.png" alt="FlopDrop Logo" width="230" height="230" />
    </div>
    
    <button onClick={selectFile} className="drop-btn">
      Drop a beat! 🎵
    </button>
    <FeaturedProducers />
    <TrendingBeats />

    <UploadAudio
      selectedFile={selectedFile}
      uploading={uploading}
      message={message}
      selectFile={selectFile}
      uploadFile={uploadFile}
    />

    <input
      type="file"
      ref={fileInputRef}
      onChange={onFileChange}
      style={{ display: "none" }}
    />

    <Footer />
  </div>
</div>
  );
}
