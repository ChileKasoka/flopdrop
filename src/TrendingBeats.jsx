import "./TrendingBeats.css";

const trendingBeats = [
  { name: "Chonk Bass 1", plays: 2345, downloads: 678 },
  { name: "Trap Groove", plays: 1987, downloads: 512 },
  { name: "Lo-fi Chill", plays: 1560, downloads: 430 },
  { name: "Funky Beat", plays: 1432, downloads: 389 },
];

export default function TrendingBeats() {
  return (
    <div className="trending-beats">
      <h2>🔥 Popular / Trending Beats</h2>
      <div className="beats-list">
        {trendingBeats.map((beat, i) => (
          <div key={i} className="beat-card">
            <h3>{beat.name}</h3>
            <p>🎧 Plays: {beat.plays} | ⬇ Downloads: {beat.downloads}</p>
            <button className="play-btn">▶ Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}
