import "./FeaturedProducers.css";

const producers = [
  {
    name: "BeatMaster Jay",
    bio: "Trap and Lo-fi wizard",
    avatar: "/producers/jay.jpg",
    profileLink: "#",
  },
  {
    name: "Chonk Queen",
    bio: "Funky basslines & grooves",
    avatar: "/producers/queen.jpg",
    profileLink: "#",
  },
  {
    name: "SynthLord",
    bio: "Electronic soundscapes",
    avatar: "/producers/synth.jpg",
    profileLink: "#",
  },
];

export default function FeaturedProducers() {
  return (
    <div className="featured-producers">
      <h2>🌟 Featured Producers</h2>
      <div className="producers-grid">
        {producers.map((p, i) => (
          <div key={i} className="producer-card">
            <img src={p.avatar} alt={p.name} className="producer-avatar" />
            <h3>{p.name}</h3>
            <p>{p.bio}</p>
            <a href={p.profileLink} className="profile-link">
              View Tracks
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
