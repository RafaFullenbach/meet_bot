// components/Sidebar.tsx
import { BsBrowserChrome } from "react-icons/bs";
import { PiSquaresFourLight } from "react-icons/pi";
import { ImYoutube } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RxExit } from "react-icons/rx";

export default function Sidebar() {
  return (
    <aside className="h-screen flex flex-col items-center border-r justify-between py-4 p-10 pt-11">
      <div className="flex flex-col gap-10">
        <BsBrowserChrome size={26} className="text-lime-600" />
        <PiSquaresFourLight size={26} className="mt-10 text-gray-500" />
        <ImYoutube size={26} className="text-lime-500" />
        <CiBookmark size={26} className="text-gray-500" />
        <IoCalendarOutline size={26} className="text-gray-500" />
        <GoGear size={26} className="text-gray-500" />
      </div>
      <div className="flex flex-col gap-10 mb-8">
        <IoIosHelpCircleOutline size={28} />
        <RxExit size={26} className="transform rotate-180 text-red-700" />
      </div>
    </aside>
  );
}
