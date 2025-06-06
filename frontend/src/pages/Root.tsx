import { Outlet } from "react-router";

import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/Nav";

function Root() {
  return (
    <>
      <Navbar />
      <ModeToggle />
      <h1>Hello world</h1>
      <Outlet />
    </>
  );
}

export default Root;
