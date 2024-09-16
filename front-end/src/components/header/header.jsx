// components/Header.tsx
import { Badge } from "@/components/ui/badge";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { SlBell, SlArrowDown } from "react-icons/sl";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/auth";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

export default function Header() {
  const { signOut, user } = useAuth();
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    async function fetchMeetings() {
      try {
        const response = await api.get("/meetings");
        setMeetings(response.data);
        console.log("meetings", response.data);
        console.log("user", user)
      } catch (error) {
        console.error("Erro ao buscar reuniões", error);
      }
    }

    if (user) {
      fetchMeetings();
    }
  }, [user]);

  let meetingTitle;

  if(meetings.length > 0){
    meetingTitle = meetings[0].title;
  }

  return (
    <nav className="w-full p-8 border-b">
      <div className="flex flex-row items-center justify-between pr-6">
        <div className="flex flex-row items-center gap-8">
          <h1 className="font-roboto font-bold text-4.5xl">{meetingTitle}</h1>
          <Badge
            className="px-4 py-1.5 text-2xl rounded-full inline-flex space-x-2"
            variant="secondary"
          >
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            <span className="text-red-500">Live Record</span>
          </Badge>
        </div>
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row gap-12 items-center">
            <HiMiniMagnifyingGlass size={26} />
            <SlBell size={22} />
          </div>
          <Separator
            orientation="vertical"
            className="border-gray-300 border-l w-0.5 h-10"
          />
          <div className="flex flex-row gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/RafaFullenbach.png" />
              <AvatarFallback>RF</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-roboto font-bold text-2.5xl">
                {user?.name}
              </span>
              <span className="font-roboto font-bold text-gray-400 text-lg">
              {user?.email}
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none focus:ring-0 active:border-none">
                <SlArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="text-lg">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-base cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base cursor-pointer">
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base cursor-pointer">
                  Team
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut} className="text-base cursor-pointer">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
