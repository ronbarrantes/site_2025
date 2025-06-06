import { Outlet } from "react-router";

import { ModeToggle } from "@/components/mode-toggle";

function Root() {
  return (
    <>
      <ModeToggle />
      <h1>Hello world</h1>
      <Outlet />
    </>
  );
}

export default Root;
