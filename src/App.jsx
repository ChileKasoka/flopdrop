import Header from "./Header";
import "./App.css";
import UploadAudio from "./UploadAudio";
import ChonkBeatsGrid from "./ChonkBeatsGrid";
import FeaturedProducers from "./FeaturedProducers";
import TrendingBeats from "./TrendingBeats";
import Footer from "./Footer";

export default function App() {

  return (
    <div className="app">
      <Header />
      <div className="content">
        <h1>💦 FlopDrop</h1>
        <div>
          <img src="/flopdrop.png" alt="FlopDrop Logo" />
        </div>

        <button onClick={() => playTrack(tracks[0])} className="drop-btn">
          Drop a beat! 🎵
        </button>
        <UploadAudio />
        <ChonkBeatsGrid />
        <FeaturedProducers />
        <TrendingBeats />
        <Footer />
      </div>
    </div>
  );
}
