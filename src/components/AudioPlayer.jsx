import { useEffect } from "react";
import Amplitude from "amplitudejs";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  useEffect(() => {
    Amplitude.init({
      songs: [
        {
          name: "Summer Breeze",
          artist: "C Kayzy",
          url: "/music/DAY19.BRAINCELLS.mp3",
          cover_art_url: "/images/Chile_passport.jpg",
        }
      ],
    });

    return () => {
      Amplitude.stop();
    };
  }, []);

  return (
    <div className="player-container">
      <img
        data-amplitude-song-info="cover_art_url"
        alt="cover"
        className="cover"
      />

      <div className="song-info">
        <span data-amplitude-song-info="name" className="song-name"></span>
        <span data-amplitude-song-info="artist" className="artist-name"></span>
      </div>

      <div className="controls">
        {/* Previous Button */}
        <button className="amplitude-prev control-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 19 2 12 11 5 11 19"></polygon>
            <line x1="22" y1="19" x2="22" y2="5"></line>
          </svg>
        </button>

        {/* Play / Pause Button */}
        <button className="amplitude-play-pause main-btn">
          {/* ▶️ Play Icon */}
          <svg
            className="icon-play"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>

          {/* ⏸ Pause Icon */}
          <svg
            className="icon-pause"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        </button>

        {/* Next Button */}
        <button className="amplitude-next control-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 19 22 12 13 5 13 19"></polygon>
            <line x1="2" y1="19" x2="2" y2="5"></line>
          </svg>
        </button>
      </div>

      <input type="range" className="amplitude-song-slider" />
      <div class="time-display">
        <span class="amplitude-current-time"></span>
        <span> / </span>
        <span class="amplitude-duration-time"></span>
      </div>
    </div>
  );
};

export default AudioPlayer;
