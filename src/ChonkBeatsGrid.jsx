import { useState } from "react";
import "./ChonkBeatsGrid.css";

export default function ChonkBeatsGrid() {
  const [currentTrack, setCurrentTrack] = useState(null);

  const beats = [
    { name: "Chonk Beat 1", file: "/beats/chonk1.mp3" },
    { name: "Chonk Beat 2", file: "/beats/chonk2.mp3" },
    { name: "Chonk Beat 3", file: "/beats/chonk3.mp3" },
    { name: "Chonk Beat 4", file: "/beats/chonk4.mp3" },
    { name: "Chonk Beat 5", file: "/beats/chonk5.mp3" },
    { name: "Chonk Beat 6", file: "/beats/chonk6.mp3" },
  ];

  const playBeat = (beat) => {
    setCurrentTrack(beat);
    const audio = new Audio(beat.file);
    audio.play();
  };

  return (
    <div className="chonk-grid-section">
      <h2>🔥 Latest Chonk Beats</h2>
      <div className="chonk-grid">
        {beats.map((beat, index) => (
          <div key={index} className="chonk-card">
            <div className="chonk-name">{beat.name}</div>
            <button onClick={() => playBeat(beat)} className="play-btn">
              ▶ Play
            </button>
          </div>
        ))}
      </div>
      {currentTrack && (
        <div className="now-playing">
          Now Playing: <strong>{currentTrack.name}</strong>
        </div>
      )}
    </div>
  );
}
