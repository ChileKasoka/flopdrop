import "./ChonkBeatsGrid.css";

export default function ChonkBeatsGrid({ setCurrentTrack, currentTrack }: { setCurrentTrack: (beat: any) => void; currentTrack: any }) {
  const beats = [
    { name: "TIMEGOESBY", file: "/music/DAY12.TIMEGOESBY.mp3", cover: "/images/p1.jpg" },
    { name: "CRAZYLOOKS", file: "/music/DAY16.CRAZYLOOKS2021.wav", cover: "/images/p2.jpg" },
    { name: "MIXEDUP", file: "/music/DAY25.MIXEDUPv2.wav", cover: "/images/p3.jpg" },
    { name: "EYES CHINESE", file: "/music/DAY41.EYESCHINESE.snip.wav", cover: "/images/p4.jpg" },
    { name: "BOW", file: "/music/DAY42.BOW.wav", cover: "/images/p1.jpg" },
    { name: "INDABOOF", file: "/music/DAY46.INDABOOF.wav", cover: "/images/Chile_passport.jpg" },
  ];

  const playBeat = (beat: { name: string; file: string; cover: string; }) => {
    setCurrentTrack(beat);
  };

  return (
    <div className="chonk-grid-section">
      <h2>🎧 Latest Chonk Beats</h2>

      <div className="chonk-grid">
        {beats.map((beat, index) => (
          <div key={index} className="chonk-card">
            
            <div className="cover-wrapper">
              <img src={beat.cover} alt={beat.name} />
              
              <div className="overlay">
                <button onClick={() => playBeat(beat)} className="play-btn">
                  ▶
                </button>
              </div>
            </div>

            <div className="chonk-name">{beat.name}</div>
          </div>
        ))}
      </div>

      {currentTrack && (
        <div className="now-playing">
          🎶 Now Playing: <strong>{currentTrack.name}</strong>
        </div>
      )}
    </div>
  );
}