import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";
import {
  Music,
  Upload,
  Flame,
  Users,
  Heart,
  Home,
  User,
  Settings,
  LogOut,
  Menu,
  ChevronLeft,
  Radio,
} from "lucide-react";

interface SideMenuProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideMenu({
  collapsed,
  setCollapsed,
}: SideMenuProps) {
  const location = useLocation();

  const mainMenu = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "Trending", icon: <Flame size={18} />, path: "/trending" },
    { name: "Browse Beats", icon: <Music size={18} />, path: "/browse" },
    { name: "Collabs", icon: <Users size={18} />, path: "/collabs" },
    { name: "Producers", icon: <User size={18} />, path: "/producers" },
  ];

  const genres = ["Trap", "Drill", "R&B", "Afrobeat", "Lo-fi", "EDM"];

  return (
    <aside className={`side-menu ${collapsed ? "collapsed" : ""}`}>
      {/* Top */}
      <div className="menu-top">
        {!collapsed && <div className="menu-logo">🎛 FlopDrop</div>}

        <button
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav>

        {/* Primary Navigation */}
        {mainMenu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`menu-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}

        {/* Upload CTA */}
        <Link to="/upload" className="menu-item upload-cta">
          <Upload size={18} />
          {!collapsed && <span>Drop a Track</span>}
        </Link>

        {/* Genre Section */}
        {!collapsed && (
          <div className="sidebar-section">
            <div className="section-title">
              <Radio size={14} /> Genres
            </div>
            {genres.map((genre) => (
              <div key={genre} className="genre-item">
                {genre}
              </div>
            ))}
          </div>
        )}

        {/* Live Activity */}
        {!collapsed && (
          <div className="sidebar-section">
            <div className="section-title">🔥 Live</div>
            <div className="activity-item">+ 3 new drops</div>
            <div className="activity-item">+ 5 new likes</div>
            <div className="activity-item">1 collab invite</div>
          </div>
        )}

        {/* Bottom Section */}
        <div className="bottom-section">
          <Link to="/favorites" className="menu-item">
            <Heart size={18} />
            {!collapsed && <span>Favorites</span>}
          </Link>

          <Link to="/settings" className="menu-item">
            <Settings size={18} />
            {!collapsed && <span>Settings</span>}
          </Link>

          <div className="menu-item logout">
            <LogOut size={18} />
            {!collapsed && <span>Logout</span>}
          </div>
        </div>

      </nav>
    </aside>
  );
}
