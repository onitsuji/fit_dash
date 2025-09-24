import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "~/lib/auth-client";
import { useNavigate } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

const accountSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export function SignUpView() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSumbit = async (values: z.infer<typeof accountSchema>) => {
    authClient.signUp.email(
      {
        name: values.name,
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          navigate("/dashboard");
        },
        onError: (ctx) => {
          setError(ctx.error.message);
        },
      },
    );
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-svh w-full">
      <Card className="w-md md:w-xl">
        <CardHeader>
          <CardTitle>Welcome to Fitdash</CardTitle>
          <CardDescription>
            Create your account to unlock all the features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSumbit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="acme@example.com" {...field} />
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
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={form.formState.isSubmitting}>
                Submit
              </Button>
            </form>
            {error ? (
              <Alert className="bg-red-200">
                <AlertTitle className="text-red-600">
                  Authentication Error
                </AlertTitle>
                <AlertDescription className="text-red-600">
                  {error}
                </AlertDescription>
              </Alert>
            ) : null}
          </Form>
        </CardContent>
        <CardFooter>
          <p className="text-xs">
            By signing up, you agree to our{" "}
            <strong className="font-medium underline">Terms of Service</strong>{" "}
            and
            <strong className="font-medium underline">
              {" "}
              Data Processing Agreement.
            </strong>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
