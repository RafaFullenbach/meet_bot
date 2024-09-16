import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoIosMic } from "react-icons/io";

export default function TranslationCard({ translation, characters }) {
  return (
    <Card className="bg-gray-100">
      <CardHeader>
        <CardTitle className="font-roboto text-2xl">{translation}</CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-end w-full items-center gap-6">
          <p className="text-gray-600 text-[1.175rem]">{characters} Character</p>
          <IoMdVolumeHigh size={16} className="text-gray-500 bg-white rounded-full" />
          <IoIosMic size={14} className="text-gray-500 bg-white rounded-full" />
        </div>
      </CardFooter>
    </Card>
  );
}
