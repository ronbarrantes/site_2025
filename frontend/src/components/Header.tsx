import { NavLink } from "react-router";

import { Logo } from "./logo/Logo";
import { ModeToggle } from "./mode-toggle";

const LinkItem = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

export const Header = () => {
  return (
    <header className="flex items-center justify-between border border-green-500">
      <span>
        <NavLink to="/" aria-label="Home navigation">
          <Logo
            aria-label="Logo"
            className="m-2 h-10 w-30 border border-red-500 fill-fuchsia-900 dark:fill-fuchsia-600"
          />
        </NavLink>
      </span>
      <nav className="mx-2">
        <ul className="flex items-center gap-2 border border-red-500 align-middle [&>li]:border [&>li]:border-green-500">
          <LinkItem>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink to="/about">About</NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink to="/resume">Resume</NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink to="/contact">Contact</NavLink>
          </LinkItem>
          <LinkItem>
            <ModeToggle />
          </LinkItem>
        </ul>
      </nav>
    </header>
  );
};
