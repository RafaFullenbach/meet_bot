"use client"

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <Card className="w-[450px] h-[300px] p-8">
        <CardHeader>
          <CardTitle className="text-4xl font-roboto">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="e-mail" className="text-2xl font-roboto">
                  E-mail
                </Label>
                <Input
                  className="text-2xl"
                  type="e-mail "
                  id="e-mail"
                  placeholder="enter your e-mail"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-2xl font-roboto">
                  Password
                </Label>
                <Input
                  className="text-2xl"
                  type="password"
                  id="password"
                  placeholder="enter your password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 justify-center">
          <Button onClick={handleSignIn} className="text-2xl font-roboto p-5 mt-6">Sign In</Button>
          <div className="mt-6">
            <span className="text-2xl">Don't have an account? </span>
            <Link href={"/signUp"} className="text-2xl font-roboto underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
