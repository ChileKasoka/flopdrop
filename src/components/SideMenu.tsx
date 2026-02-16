import { Link, useLocation } from "react-router-dom";
import "./SideMenu.css";
import {
  Music,
  Upload,
  BarChart3,
  Heart,
  Home,
  User,
  Settings,
  LogOut,
  Menu,
  ChevronLeft,
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

  const menuItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "Library", icon: <Music size={18} />, path: "/library" },
    { name: "Upload Beat", icon: <Upload size={18} />, path: "/upload" },
    { name: "Analytics", icon: <BarChart3 size={18} />, path: "/analytics" },
    { name: "Favorites", icon: <Heart size={18} />, path: "/favorites" },
    { name: "Profile", icon: <User size={18} />, path: "/profile" },
    { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <aside className={`side-menu ${collapsed ? "collapsed" : ""}`}>
      <div className="menu-top">
        {!collapsed && <div className="menu-logo">🎛 Producer Hub</div>}

        <button
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav>
        {menuItems.map((item) => (
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

        <div className="menu-item logout">
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </div>
      </nav>
    </aside>
  );
}
