import { useState } from "react";

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

const logoColors = [
  "group-hover:fill-amber-500",
  "group-hover:fill-green-500",
  "group-hover:fill-cyan-500",
  "group-hover:fill-fuchsia-500",
  "group-hover:fill-cyan-500",
];

export const Header = ({ className }: { className: string }) => {
  const [logoColorIdx, setLogoColorIdx] = useState<number>(3);

  return (
    <div className={classNames(className)}>
      <header className="glass m-2 flex items-center justify-between rounded-xl p-1 drop-shadow-xl">
        <span>
          <NavLink
            onMouseOver={() => {
              setLogoColorIdx(
                logoColorIdx < logoColors.length - 1 ? logoColorIdx + 1 : 0
              );
            }}
            to="/"
            className="group"
            aria-label="Home navigation"
          >
            <Logo
              aria-label="Logo"
              className={classNames(
                "pointer-events-none mx-2 h-10 w-48 drop-shadow-sm/10 group-hover:transition-all dark:fill-white dark:drop-shadow-sm",
                logoColors[logoColorIdx]
              )}
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
