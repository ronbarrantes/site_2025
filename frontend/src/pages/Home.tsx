export const Home = () => {
  // contains a blurp of me welcoming to my site
  // the things that I'm doing right now
  return (
    <div className="flex">
      <div>
        <h1>Welcome to my site</h1>
        <span>I'm glad you found it</span>
      </div>

      <div>
        <h2>What I'm up to</h2>
        <ul>
          <li>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </li>

          <li>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </li>

          <li>
            <h3>I'm rebuilding my website</h3>
            <p>This time around I'm doing a website with React and Golang</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
