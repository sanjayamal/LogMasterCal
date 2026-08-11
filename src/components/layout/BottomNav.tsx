import { IconHome, IconTable, IconMath } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: IconHome, end: true },
  { to: "/log-table", label: "Log Table", icon: IconTable, end: false },
  { to: "/solver", label: "Solver", icon: IconMath, end: false },
];

export default function BottomNav() {
  return (
    <div className="nav-bottom">
      {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => `nav-btn${isActive ? " active" : ""}`}
        >
          <Icon size={22} />
          {label}
        </NavLink>
      ))}
    </div>
  );
}
