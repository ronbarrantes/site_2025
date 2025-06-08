import { Outlet } from "react-router";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const Root = () => {
  // basic layout

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header className="fixed top-0 left-0 z-20 w-full" />
      <main className="flex-1 py-16">
        <Outlet />
        <div className="h-20 w-20 bg-red-200"></div>
      </main>
      <Footer className="fixed bottom-0 left-0 z-20 w-full" />
    </div>
  );
};
