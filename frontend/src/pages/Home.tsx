import clx from "classnames";

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
        <ul>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>

          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>

          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>

          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>

          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>

          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
          <NowItem>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </NowItem>
        </ul>
      </div>
    </div>
  );
};
