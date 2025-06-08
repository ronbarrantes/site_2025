import classNames from "classnames";

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
      "flex items-center gap-2",
      direction === "left" &&
        "pl-5 after:h-4 after:w-4 after:translate-x-2 after:rotate-45 after:bg-green-400",
      direction === "right" &&
        "pr-5 after:h-4 after:w-4 after:translate-x-2 after:rotate-45 after:bg-blue-400",
      !direction && "px-5",
      className
    )}
  >
    {children}
  </div>
);

import { Icon } from "@/components/icon";
export const Footer = ({ className }: { className: string }) => {
  return (
    <div className={classNames(className)}>
      <footer className="glass flex items-center justify-between drop-shadow-xl">
        <div className="flex">
          <LineSection direction="left" className="bg-fuchsia-300">
            <span>ronb</span>
          </LineSection>
          <LineSection direction="left">
            <Icon name="home" />
          </LineSection>
          <LineSection direction="left">1</LineSection>
        </div>
        <div className="flex">
          <LineSection direction="right">
            <Icon name="home" />
          </LineSection>
          <LineSection direction="right">1</LineSection>
          <LineSection direction="right" className="bg-fuchsia-300">
            <span>ronb</span>
          </LineSection>
        </div>
      </footer>
    </div>
  );
};
