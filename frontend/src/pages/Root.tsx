import { Outlet } from "react-router";

import { Navbar } from "@/components/Nav";

export const Root = () => {
  // basic layout
  // header will contain the logo and navigation
  // footer - make footer be at least the size of the page

  return (
    <div className="border border-red-500">
      <Navbar />
      <Outlet />
    </div>
  );
};
