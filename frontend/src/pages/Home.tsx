import clx from "classnames";

import { useRoutes } from "@/hooks/use-api";
import { formatDate } from "@/utils/time";

const NowItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <li className={clx(className)}>{children}</li>;
};

export const Home = () => {
  const { data } = useRoutes();

  const nowData = data.now.get.data || [];

  const isLoading = data.now.get.isLoading;

  console.log("DATA", nowData);

  return (
    <div className="block items-center justify-between gap-5 overflow-hidden md:flex">
      <div className="mb-5 h-fit w-full bg-green-200 md:mb-0 md:w-1/3">
        <h1>Welcome to my site</h1>
        <span>I'm glad you found it</span>
      </div>
      <div
        className={clx(
          "spacer h-screen overflow-hidden overflow-y-scroll bg-red-200 md:w-2/3"
        )}
      >
        <h2>What I'm up to</h2>

        {isLoading ? (
          <span>LOADING ....</span>
        ) : (
          <ul>
            {nowData.map((item) => (
              <NowItem key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span>{formatDate(item.created_at)}</span>
              </NowItem>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
