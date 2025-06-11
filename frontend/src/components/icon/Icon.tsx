import classNames from "classnames";

import { iconFileNames, type IconsLisType } from "./icons-list-files";

type IconProps = {
  name: IconsLisType;
  className?: string;
};

export const Icon = ({ name, className, ...props }: IconProps) => {
  const ComponentToRender = iconFileNames[name].icon;

  return <ComponentToRender {...props} className={classNames(className)} />;
};

export const UpDownArrowIcon = ({
  direction,
  className,
  iconName = "arrow",
}: {
  direction?: "up" | "down";
  className?: string;
  iconName?: IconsLisType;
}) => {
  return (
    <Icon
      name={iconName}
      className={classNames(
        "transition-transform hover:!text-inherit",
        direction === "down" ? "rotate-90" : "-rotate-90",
        className
      )}
    />
  );
};
