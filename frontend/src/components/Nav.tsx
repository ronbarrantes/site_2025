import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
