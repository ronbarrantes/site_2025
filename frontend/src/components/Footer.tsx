import { useEffect, useState } from "react";

import classNames from "classnames";

import { Icon } from "@/components/icon";
import type { IconLink } from "./types/links";
import { useLinksStore } from "@/hooks/use-links";

const LineSection = ({
  direction,
  children,
  className,
}: {
  direction?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={classNames(
      "flex items-center",
      direction === "left" &&
        "pl-3 after:h-4 after:w-4 after:translate-x-2 after:rotate-45",
      direction === "right" &&
        "pr-3 before:h-4 before:w-4 before:-translate-x-2 before:rotate-45",
      !direction && "px-5",
      className
    )}
  >
    {children}
  </div>
);

export const Footer = ({ className }: { className: string }) => {
  // console.log(theName);
  const { iconLink } = useLinksStore();
  return (
    <div className={classNames(className)}>
      <footer className="glass flex items-center justify-between border-t drop-shadow-xl">
        <div className="flex">
          <LineSection
            direction="left"
            className="bg-fuchsia-500 after:bg-fuchsia-500"
          >
            <span>ronb</span>
          </LineSection>
          <LineSection
            direction="left"
            className="bg-blue-500 after:bg-blue-500"
          >
            <Icon className="ml-2 text-white" name={iconLink} />
            <Icon className="ml-2 text-white" name={"info"} />
          </LineSection>
          <LineSection
            direction="left"
            className="bg-green-500 after:bg-green-500"
          >
            <span className="ml-2">{iconLink}</span>
          </LineSection>
        </div>
        <div className="flex">
          <LineSection
            direction="right"
            className="bg-green-500 before:bg-green-500"
          >
            <Icon name="home" className="mr-2" />
          </LineSection>
          <LineSection
            direction="right"
            className="bg-blue-500 before:bg-blue-500"
          >
            <span className="mr-2">ronb</span>
          </LineSection>
          <LineSection
            direction="right"
            className="bg-fuchsia-500 before:bg-fuchsia-500"
          >
            <span>ronb</span>
          </LineSection>
        </div>
      </footer>
    </div>
  );
};
