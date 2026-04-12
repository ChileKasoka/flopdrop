import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AudioPlayer from "./components/AudioPlayer";
import ChonkBeatsGrid from "./ChonkBeatsGrid";
import FeaturedProducers from "./FeaturedProducers";
import TrendingBeats from "./TrendingBeats";

export default function Dashboard() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="content">

      {/* PLAYER */}
      <AudioPlayer track={currentTrack} />

      {/* BEATS GRID */}
      <ChonkBeatsGrid
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
      />

      {/* ACTION BUTTON */}
      <button
        onClick={() => navigate("/upload")}
        className="drop-btn"
      >
        🎵 Drop a beat
      </button>

      {/* EXTRAS */}
      <FeaturedProducers />
      <TrendingBeats />

    </div>
  );
}