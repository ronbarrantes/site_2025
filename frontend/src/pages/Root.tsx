import { Outlet } from "react-router";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/icon";

const TheCheck = ({ children }: { children: React.ReactNode }) => (
  <span className="flex">{children}</span>
);

export const Root = () => {
  // basic layout

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header className="fixed top-0 left-0 z-20 w-full" />
      <main className="flex-1 py-16">
        <Outlet />
        <div className="h-20 w-20 bg-red-200"></div>
        <TheCheck>
          <Icon name="core" />
          :core
        </TheCheck>
        <TheCheck>
          <Icon name="info" />
          :info
        </TheCheck>
        <TheCheck>
          <Icon name="power" />
          :power
        </TheCheck>
        <TheCheck>
          <Icon name="cpu" />
          :cpu
        </TheCheck>
        <TheCheck>
          <Icon name="none" />
          :none
        </TheCheck>
        <TheCheck>
          <Icon name="arrow" />
          :arrow
        </TheCheck>
        <TheCheck>
          <Icon name="flatArrow" />
          :flatArrow
        </TheCheck>
        <TheCheck>
          <Icon name="warning" />
          :warning
        </TheCheck>
        <TheCheck>
          <Icon name="remove" />
          :remove
        </TheCheck>
        <TheCheck>
          <Icon name="settings" />
          :settings
        </TheCheck>
        <TheCheck>
          <Icon name="home" />
          :home
        </TheCheck>
        <TheCheck>
          <Icon name="chevron" />
          :chevron
        </TheCheck>
        <TheCheck>
          <Icon name="close" />
          :close
        </TheCheck>
        <TheCheck>
          <Icon name="check" />
          :check
        </TheCheck>
        <TheCheck>
          <Icon name="refresh" />
          :refresh
        </TheCheck>
        <TheCheck>
          <Icon name="clock" />
          :clock
        </TheCheck>
      </main>
      <Footer className="fixed bottom-0 left-0 z-20 w-full" />
    </div>
  );
};
