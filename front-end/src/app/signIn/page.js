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

export default function SignIn() {
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
                  type="text "
                  id="e-mail"
                  placeholder="enter your e-mail"
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
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 justify-center">
          <Button className="text-2xl font-roboto p-5 mt-6">Sign In</Button>
          <div className="mt-6">
            <span className="text-2xl">Don't have an account? </span>
            <Link href={"/signUp"} className="text-2xl font-roboto underline">Sign up</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
