import { NavLink } from "react-router";

import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <ModeToggle />
    </nav>
  );
}
