import { useState } from "react";
import "./ChonkBeatsGrid.css";

interface Beat {
  name: string;
  file: string;
  cover: string;
}

interface Props {
  setCurrentTrack: (beat: Beat) => void;
  currentTrack: Beat | null;
}

export default function ChonkBeatsGrid({ setCurrentTrack, currentTrack }: Props) {
  const beats: Beat[] = [
    { name: "Chonk Beat 1", file: "/music/DAY12.TIMEGOESBY.mp3", cover: "/images/p1.jpg" },
    { name: "Chonk Beat 2", file: "/music/DAY16.CRAZYLOOKS2021.wav", cover: "/images/p2.jpg" },
    { name: "Chonk Beat 3", file: "/music/DAY25.MIXEDUPv2.wav", cover: "/images/p3.jpg" },
    { name: "Chonk Beat 4", file: "/music/DAY41.EYESCHINESE.snip.wav", cover: "/images/p4.jpg" },
    { name: "Chonk Beat 5", file: "/music/DAY42.BOW.wav", cover: "/images/p1.jpg" },
    { name: "Chonk Beat 6", file: "/music/DAY46.INDABOOF.wav", cover: "/images/Chile_passport.jpg" },
  ];

  const playBeat = (beat: Beat) => {
    setCurrentTrack(beat);
  };

  return (
    <div className="chonk-grid-section">
      <h2>🔥 Latest Chonk Beats</h2>
      <div className="chonk-grid">
        {beats.map((beat, index) => (
          <div key={index} className="chonk-card">
            <img src={beat.cover} alt={beat.name} className="cover-thumb" />
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

