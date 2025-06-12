import { useState } from "react";

import classNames from "classnames";
import { NavLink, type NavLinkProps } from "react-router";

import { useLinksStore } from "@/hooks/use-links";
import type { IconLink } from "@/lib/types";
import { Logo } from "./logo/Logo";
import { ModeToggle } from "./mode-toggle";

type CustomLinkType = {
  to: string;
  pageIdx: number;
  className?: string;
  children: React.ReactNode;
} & NavLinkProps;

const CustomNavLink = ({
  to,
  pageIdx,
  className,
  children,
  ...props
}: CustomLinkType) => {
  const { setIcon } = useLinksStore();

  const handleClick = () => {
    const icon = to.split("/")[1] ? to.split("/")[1] : "home";
    setIcon(icon as IconLink, pageIdx);
  };

  return (
    <NavLink
      onClick={handleClick}
      to={to}
      className={classNames(
        window.location.pathname === to && "border-b-4",
        "border-black transition-all group-hover:border-b-4",
        className
      )}
      {...props}
    >
      {children}
    </NavLink>
  );
};

const LinkItem = ({
  to,
  pageIdx,
  className,
  children,
}: {
  to: string;
  pageIdx: number;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="group p-1">
      <CustomNavLink to={to} pageIdx={pageIdx} className={className}>
        {children}
      </CustomNavLink>
    </li>
  );
};

const MainNav = () => {
  return (
    <nav className="mx-2">
      <ul className="flex items-center gap-2 align-middle">
        <LinkItem pageIdx={1} className="border-slate-500" to="/">
          <span>Home</span>
        </LinkItem>
        <LinkItem pageIdx={2} className="border-green-500" to="/about">
          About
        </LinkItem>
        <LinkItem pageIdx={3} className="border-cyan-500" to="/resume">
          Resume
        </LinkItem>
        <LinkItem pageIdx={4} className="border-fuchsia-500" to="/portfolio">
          Portfolio
        </LinkItem>
        <LinkItem pageIdx={5} className="border-lime-500" to="/contact">
          Contact
        </LinkItem>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

const logoColors = [
  "group-hover:fill-slate-500 dark:group-hover:fill-slate-500",
  "group-hover:fill-green-500 dark:group-hover:fill-green-500",
  "group-hover:fill-cyan-500 dark:group-hover:fill-cyan-500",
  "group-hover:fill-fuchsia-500 dark:group-hover:fill-fuchsia-500",
  "group-hover:fill-lime-500 dark:group-hover:fill-lime-500",
];

export const Header = ({ className }: { className: string }) => {
  const [logoColorIdx, setLogoColorIdx] = useState<number>(3);

  return (
    <div className={classNames("px-2 pt-1", className)}>
      <header className="glass container mx-auto flex items-center justify-between rounded-xl border border-slate-950/5 p-1 pt-1.5 drop-shadow-xl dark:border-slate-50/10">
        <span>
          <CustomNavLink
            onMouseOver={() => {
              setLogoColorIdx(
                logoColorIdx < logoColors.length - 1 ? logoColorIdx + 1 : 0
              );
            }}
            to="/"
            pageIdx={1}
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
          </CustomNavLink>
        </span>
        <MainNav />
      </header>
    </div>
  );
};
