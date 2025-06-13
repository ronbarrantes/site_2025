import clx from "classnames";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export const Home = () => {
  const { data } = useRoutes();
  const nowData = data.now.get.data || [];
  const isLoading = data.now.get.isLoading;

  return (
    <div className="block h-screen items-center justify-between gap-5 overflow-y-scroll pt-16 md:flex md:overflow-hidden">
      <div className="mb-8 h-fit w-full border-2 border-green-500 md:mb-10 md:w-1/3">
        <h1 className="mb-4">Welcome to my site</h1>
        <span className="text-2xl">I'm glad you found it</span>
      </div>
      <div className="h-screen md:w-2/3 md:overflow-hidden md:overflow-y-scroll md:pt-8 lg:w-7/12">
        <h2 className="mb-4">What I've been up to:</h2>
        {isLoading ? (
          <span>LOADING ....</span>
        ) : (
          <ul className="flex flex-col gap-5 pb-8 md:pt-8 md:pb-16">
            {nowData.map((item) => (
              <NowItem key={item.id}>
                <h3 className="text-2xl">
                  {item.id} {item.title}
                </h3>
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
