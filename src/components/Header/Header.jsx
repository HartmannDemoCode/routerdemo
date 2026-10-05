import { NavLink } from "react-router";
import './header.css';

/* Concepts:
1. NavLink for navigation with active states
2. Link for navigation without active states

*/
export default function Header() {
  return (
    <nav className="header">
      {/* NavLink makes it easy to show active states */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Students
        </NavLink>
      </li>
      
    </nav>
  );
}