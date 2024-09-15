import { Badge } from "@/components/ui/badge";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Meeting() {
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 p-4">
        <div className="container mx-auto">
          <h1 className="font-roboto font-bold text-4xl">Room Meeting</h1>
          <Badge
            className="px-4 py-2 text-1xl rounded-full inline-flex space-x-2"
            variant="secondary"
          >
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            <span className="text-red-500">Live Record</span>
          </Badge>
          <HiMiniMagnifyingGlass size={20} />
          <FaRegBell size={20} />
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/RafaFullenbach.png" />
              <AvatarFallback>RF</AvatarFallback>
            </Avatar>
            <div>
              <span>Rafael Carvalho Füllenbach</span>
              <span>rafael.fullenbach12@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
