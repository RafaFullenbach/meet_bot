"use client";

import * as React from "react";
import { useState } from "react";
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
import api from "../../services/api";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastro com sucesso!");
        router.push("/signIn");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <Card className="w-[450px] h-[350px] p-8">
        <CardHeader>
          <CardTitle className="text-4xl font-roboto">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-2xl font-roboto">
                  Name
                </Label>
                <Input
                  className="text-2xl"
                  type="text "
                  id="name"
                  placeholder="enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="e-mail" className="text-2xl font-roboto">
                  E-mail
                </Label>
                <Input
                  className="text-2xl"
                  type="e-mail"
                  id="e-mail"
                  placeholder="enter your e-mail"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 justify-center">
          <Button onClick={handleSignUp} className="text-2xl font-roboto p-5 mt-6">
            Sign Up
          </Button>
          <div className="mt-6">
            <span className="text-2xl">Already have an account? </span>
            <Link href={"/signIn"} className="text-2xl font-roboto underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
