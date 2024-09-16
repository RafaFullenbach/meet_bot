"use client";

import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import api from "../../services/api";

export default function New() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");

  async function handleNewMeeting() {
    if (!name) {
      return alert("Digite o título da reunião!");
    }

    await api.delete(`/meetings/${user._id}`);
    await api.post("/meetings", { title: name });
    alert("Reunião criada com sucesso!");
    router.push("/meeting");
  }

  useEffect(() => {
    if (!user && !loading) {
      router.push("/signIn");
    }
  }, [user, router, loading]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <Card className="w-[450px] h-[170px] p-8">
        <div className="flex flex-col space-y-1.5 gap-6">
          <Label htmlFor="meeting" className="text-4xl font-roboto">
            New meeting
          </Label>
          <Input
            className="text-2xl"
            type="text"
            id="meeting"
            placeholder="enter a name for your meeting"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleNewMeeting}
            className="text-2xl font-roboto p-5"
          >
            Create
          </Button>
        </div>
      </Card>
    </div>
  );
}
