import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Header from "./Header.tsx";
import Footer from "./Footer.jsx";
import AudioPlayer from "./components/AudioPlayer.tsx";
import ChonkBeatsGrid from "./ChonkBeatsGrid.tsx";
import FeaturedProducers from "./FeaturedProducers.jsx";
import TrendingBeats from "./TrendingBeats.jsx";
import UploadAudioPage from "./AudioUploadPage.tsx";
import RegisterPage from "./RegisterPage.jsx";
import LoginPage from "./LoginPage.jsx";
import SideMenu from "./components/SideMenu";

import { Beat } from "./types/Beat";

export default function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<Beat | null>(null);

  const Home = () => {
    const navigate = useNavigate();

    return (
      <div className="main-content">
        {currentTrack && <div style={{ height: "100px" }} />}
        <AudioPlayer track={currentTrack} />

        <ChonkBeatsGrid currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />

        {/* <button onClick={() => navigate("/upload")} className="drop-btn">
          Drop a beat! 🎵
        </button> */}

        <FeaturedProducers />
        <TrendingBeats />
      </div>
    );
  };

  return (
    <Router>
      <div className="app-layout">
        {/* Header full width at top */}
        <Header collapsed={collapsed} />

        {/* Main area below header: sidebar + page content */}
        <div className="main-area">
          

          <div className={`page-content ${collapsed ? "collapsed" : ""}`}>
            <SideMenu collapsed={collapsed} setCollapsed={setCollapsed} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<UploadAudioPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}
