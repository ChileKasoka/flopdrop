import "./TrendingBeats.css";

const trendingBeats = [
  { name: "Chonk Bass 1", plays: 2345, downloads: 678 },
  { name: "Trap Groove", plays: 1987, downloads: 512 },
  { name: "Lo-fi Chill", plays: 1560, downloads: 430 },
  { name: "Funky Beat", plays: 1432, downloads: 389 },
];

export default function TrendingBeats() {
  return (
    <div className="trending-section">

      <div className="trending-header">
        <h2>🔥 Trending Snips</h2>
        <p>Most played tracks this week</p>
      </div>

      <div className="beats-list">
        {trendingBeats.map((beat, i) => (
          <div key={i} className="beat-card">

            {/* RANK BADGE */}
            <div className="rank">#{i + 1}</div>

            {/* INFO */}
            <div className="beat-info">
              <h3>{beat.name}</h3>

              <div className="stats">
                <span>🎧 {beat.plays.toLocaleString()}</span>
                <span>⬇ {beat.downloads.toLocaleString()}</span>
              </div>
            </div>

            {/* ACTION */}
            <button className="play-btn">▶</button>

          </div>
        ))}
      </div>
    </div>
  );
}