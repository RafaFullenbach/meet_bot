import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosMic } from "react-icons/io";
import { ImPhoneHangUp } from "react-icons/im";

export default function MeetingControls() {
  return (
    <ToggleGroup type="multiple" className="flex gap-8">
      <ToggleGroupItem
        value="a"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-0 data-[state=on]:bg-blue-700 data-[state=on]:text-black"
      >
        <IoCameraOutline size={24} className="text-white data-[state=on]:text-black" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="b"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-0 data-[state=on]:bg-lime-700 data-[state=on]:text-black"
      >
        <IoIosMic size={24} className="text-white data-[state=on]:text-black" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="c"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-0 data-[state=on]:bg-red-700"
      >
        <ImPhoneHangUp size={24} className="text-white" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
