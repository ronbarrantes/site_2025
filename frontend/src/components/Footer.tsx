import classNames from "classnames";

export const Footer = ({ className }: { className: string }) => {
  return (
    <div className={classNames(className)}>
      <footer className="glass m-2 flex items-center justify-between rounded-xl p-1 px-3 drop-shadow-xl">
        <div>left side of the footer</div>
        <div>right side of the footer</div>
      </footer>
    </div>
  );
};
