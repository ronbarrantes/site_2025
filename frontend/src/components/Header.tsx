import classNames from "classnames";
import { NavLink } from "react-router";

import { Logo } from "./logo/Logo";
import { ModeToggle } from "./mode-toggle";

const LinkItem = ({
  children,
  className,
  to,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="group p-1">
      <NavLink
        to={to}
        className={classNames(
          "border-black transition-all group-hover:border-b-4",
          className
        )}
      >
        {children}
      </NavLink>
    </li>
  );
};

export const Header = ({ className }: { className: string }) => {
  return (
    <div className={classNames(className)}>
      <header
        className={classNames(
          "md:bg-opacity-50 m-2 flex items-center justify-between rounded-xl border border-red-500 bg-white fill-red-500 p-1 drop-shadow-xl dark:bg-slate-950"
        )}
      >
        <span>
          <NavLink to="/" className="group" aria-label="Home navigation">
            <Logo
              aria-label="Logo"
              className="mx-2 h-10 w-48 transition-all group-hover:fill-fuchsia-600"
            />
          </NavLink>
        </span>
        <nav className="mx-2">
          <ul className="flex items-center gap-2 align-middle">
            <LinkItem className="border-slate-500" to="/">
              <span>Home</span>
            </LinkItem>
            <LinkItem className="border-green-500" to="/about">
              About
            </LinkItem>
            <LinkItem className="border-cyan-500" to="/resume">
              Resume
            </LinkItem>
            <LinkItem className="border-fuchsia-500" to="/portfolio">
              Portfolio
            </LinkItem>
            <LinkItem className="border-lime-500" to="/contact">
              Contact
            </LinkItem>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
