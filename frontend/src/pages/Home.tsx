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
  return (
    <li className={clx("glass border border-red-500 p-2", className)}>
      {children}
    </li>
  );
};

export const Home = () => {
  const { data } = useRoutes();
  const nowData = data.now.get.data || [];
  const isLoading = data.now.get.isLoading;

  return (
    <div className="block items-center justify-between gap-5 overflow-hidden md:flex">
      <div className="mb-5 h-fit w-full border-2 border-green-500 md:mb-0 md:w-1/3">
        <h1 className="mb-4">Welcome to my site</h1>
        <span className="text-2xl">I'm glad you found it</span>
      </div>
      <div
        className={clx(
          "spacer h-screen overflow-hidden overflow-y-scroll md:w-2/3 lg:w-7/12"
        )}
      >
        <h2 className="mb-4">What I've been up to:</h2>

        {isLoading ? (
          <span>LOADING ....</span>
        ) : (
          <ul className="flex flex-col gap-5">
            {nowData.map((item) => (
              <NowItem key={item.id}>
                <h3 className="text-2xl">{item.title}</h3>
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
