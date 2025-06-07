import { Outlet } from "react-router";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Root = () => {
  // basic layout

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header className="absolute z-20 w-full" />
      <main className="flex-1 bg-blue-500 pt-16">
        <Outlet />
        <div className="absolute h-96 w-96 bg-amber-200"></div>
      </main>
      <Footer className="" />
    </div>
  );
};
