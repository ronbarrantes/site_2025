import classNames from "classnames";

import { Icon } from "@/components/icon";
import { useClock } from "@/hooks/use-clock";
import { useLinksStore } from "@/hooks/use-links";
import { toast } from "sonner";

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
  const { iconLink, pageIdx } = useLinksStore();
  const { date, time } = useClock();
  return (
    <div className={classNames(className)}>
      <footer className="glass flex items-center justify-between border-t drop-shadow-xl">
        <div className="flex">
          <LineSection
            direction="left"
            className="gap-1 bg-fuchsia-300 after:bg-fuchsia-300 dark:bg-fuchsia-800 dark:after:bg-fuchsia-800"
          >
            <Icon name={iconLink} />
            <span>{iconLink}</span>
          </LineSection>
          <LineSection
            direction="left"
            className="hidden bg-cyan-300 after:bg-cyan-300 sm:flex dark:bg-cyan-800 dark:after:bg-cyan-800"
          >
            <span className="ml-2">{pageIdx}</span>
          </LineSection>
          <LineSection
            direction="left"
            className="bg-slate-300 after:bg-slate-300 dark:bg-slate-800 dark:after:bg-slate-800"
          >
            <button onClick={() => toast("QUACK!")}>
              <Icon className="ml-2" name="duck" />
            </button>
          </LineSection>
        </div>

        <div className="flex">
          <LineSection className="flex gap-2">
            <a href="https://github.com/ronbarrantes" target="_blank">
              <Icon name="github" />
            </a>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <a
              className="mr-0"
              href="https://www.linkedin.com/in/ronbarrantes"
              target="_blank"
            >
              <Icon name="linkedin" />
            </a>
          </LineSection>
          <LineSection
            direction="right"
            className="bg-cyan-300 before:bg-cyan-300 dark:bg-cyan-800 dark:before:bg-cyan-800"
          >
            <span className="mr-2">{time}</span>
          </LineSection>
          <LineSection
            direction="right"
            className="hidden bg-fuchsia-300 before:bg-fuchsia-300 sm:flex dark:bg-fuchsia-800 dark:before:bg-fuchsia-800"
          >
            <span>{date}</span>
          </LineSection>
        </div>
      </footer>
    </div>
  );
};
