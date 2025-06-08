import classNames from "classnames";

import { Icon } from "@/components/icon";
export const Footer = ({ className }: { className: string }) => {
  return (
    <div className={classNames(className)}>
      <footer className="glass m-2 flex items-center justify-between rounded-xl p-1 px-3 drop-shadow-xl">
        <div>
          <Icon name="core" />
          <span>ronb</span>
          <span>1</span>
          <span>1</span>
        </div>
        <div>right side of the footer</div>
      </footer>
    </div>
  );
};
