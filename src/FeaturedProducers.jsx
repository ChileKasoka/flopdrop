import "./FeaturedProducers.css";

const producers = [
  {
    name: "BeatMaster Jay",
    bio: "Trap and Lo-fi wizard",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    profileLink: "#",
  },
  {
    name: "Chonk Queen",
    bio: "Funky basslines & grooves",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
    profileLink: "#",
  },
  {
    name: "SynthLord",
    bio: "Electronic soundscapes",
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=300&q=80",
    profileLink: "#",
  },
  {
    name: "Night Vibes",
    bio: "Dark ambient & cinematic beats",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    profileLink: "#",
  },
];

export default function FeaturedProducers() {
  return (
    <div className="featured-section">
      
      <div className="featured-header">
        <h2>🌟 Featured Producers</h2>
        <p>Discover the creators shaping the sound of tomorrow</p>
      </div>

      <div className="producers-grid">
        {producers.map((p, i) => (
          <div key={i} className="producer-card">

            <div className="avatar-wrapper">
              <img src={p.avatar} alt={p.name} />
              <span className="glow-ring"></span>
            </div>

            <h3>{p.name}</h3>
            <p>{p.bio}</p>

            <a href={p.profileLink} className="profile-btn">
              View Tracks
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}