import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginApi, useAuthStatus, useRoutes } from "@/hooks/use-api";
import { useAuthStore } from "@/store/use-auth";
import { tryCatch } from "@/utils/try-catch";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

const nowSchema = z.object({
  title: z.string().min(2, {
    message: "Title least 2 characters.",
  }),
  desc: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

export function AddNow() {
  // const { setIsAuth } = useAuthStore();
  const { data } = useRoutes();
  const form = useForm<z.infer<typeof nowSchema>>({
    resolver: zodResolver(nowSchema),
    defaultValues: {
      title: "",
      desc: "",
    },
  });

  async function onSubmit(values: z.infer<typeof nowSchema>) {
    const body = {
      title: values.title,
      desc: values.desc,
    };

    await data.now.post.mutateAsync({
      body,
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export function LoginForm() {
  const { setIsAuth } = useAuthStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, error } = await tryCatch(
      loginApi.login({
        username: values.username,
        password: values.password,
      })
    );

    if (error) {
      console.error(error);
      toast.error(`There was a problem: ${error}`);
      // form.reset();
      return;
    }

    console.log("sucess");

    console.info("data", data.data);
    setIsAuth(true);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="user..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="pass..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

const LogOutButton = () => {
  const { setIsAuth } = useAuthStore();
  return (
    <Button
      onClick={async () => {
        const { data, error } = await tryCatch(loginApi.logout());
        if (error) {
          console.error(error);
          toast.error(`There was a problem: ${error}`);
          return;
        }

        setIsAuth(false);
        console.info(data.data);
      }}
    >
      Logout
    </Button>
  );
};

export const Login = () => {
  const { isAuth, setIsAuth } = useAuthStore();
  const authStatus = useAuthStatus();

  const data = authStatus.me.get.data;
  const error = authStatus.me.get.error;

  if (error) console.warn(error);
  if (data) setIsAuth(true);

  return (
    <div>
      {isAuth ? <LogOutButton /> : <LoginForm />}
      {isAuth && <AddNow />}
    </div>
  );
};
