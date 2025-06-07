import { Outlet } from "react-router";

import { Header } from "@/components/Header";

export const Root = () => {
  // basic layout
  // header will contain the logo and navigation
  // footer - make footer be at least the size of the page

  return (
    <div className="relative">
      <Header className="absolute z-20 w-full" />
      <div className="absolute h-96 w-96 bg-amber-200"></div>
      <Outlet />
    </div>
  );
};
