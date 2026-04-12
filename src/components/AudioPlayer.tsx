import { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ track }: { track: any }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!track) return;

    if (audioRef.current) {
      audioRef.current.src = track.file;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [track]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const percent = (audio.currentTime / audio.duration) * 100;
    setProgress(percent || 0);
  };

  const seek = (e: { target: { value: any; }; }) => {
    const audio = audioRef.current;
    const value = e.target.value;

    if (!audio) return;
    audio.currentTime = (value / 100) * audio.duration;
    setProgress(value);
  };

  if (!track) return null;

  return (
    <div className="player-dock">

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* LEFT */}
      <div className="player-left">
        <img src={track.cover} className="cover" />
        <div>
          <div className="title">{track.name}</div>
          <div className="artist">{track.artist || "C Kayzy"}</div>
        </div>
      </div>

      {/* CENTER */}
      <div className="player-center">

        <div className="controls">
          <button className="ctrl">⏮</button>

          <button className="play" onClick={togglePlay}>
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <button className="ctrl">⏭</button>
        </div>

        {/* PROGRESS */}
        <input
          type="range"
          value={progress}
          onChange={seek}
          className="progress"
        />
      </div>

      {/* RIGHT */}
      <div className="player-right">
        <span>{Math.floor(progress)}%</span>
      </div>

    </div>
  );
};

export default AudioPlayer;