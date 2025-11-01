import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AudioPlayer from "./components/AudioPlayer.tsx";
import ChonkBeatsGrid from "./ChonkBeatsGrid.tsx";
import FeaturedProducers from "./FeaturedProducers.jsx";
import TrendingBeats from "./TrendingBeats.jsx";
import UploadAudioPage from "./AudioUploadPage.jsx";
import RegisterPage from "./RegisterPage.jsx";
import LoginPage from "./LoginPage.jsx";

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<{ name: string; file: string; cover: string } | null>(null);

  // Inner component for Home page content
  const Home = () => {
    const navigate = useNavigate();

    return (
      <div className="content">
        {currentTrack && <div style={{ height: "100px" }} />} {/* AudioPlayer height */}
        <AudioPlayer track={currentTrack} />

        <ChonkBeatsGrid currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />

        <div>
          <img src="/flopdrop.png" alt="FlopDrop Logo" width="230" height="230" />
        </div>

        <button onClick={() => navigate("/upload")} className="drop-btn">
          Drop a beat! 🎵
        </button>

        <FeaturedProducers />
        <TrendingBeats />
      </div>
    );
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadAudioPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
