import MeetingControls from "@/components/meeting controls/meeting-controls";
import LanguageSelect from "@/components/language select/language-select";
import TranslationCard from "@/components/translation card/translation-card";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GoArrowSwitch } from "react-icons/go";
import { ImBlocked } from "react-icons/im";

export default function Meeting() {
  return (
    <>
      <header className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-[100v]">
          <Header />
          <main className="flex w-full h-full gap-10 p-10">
            <div className="w-55p flex flex-col gap-10">
              <Card className="h-12.5p flex justify-center items-center gap-2">
                it's not working <ImBlocked className="text-red-500" />
              </Card>

              <Card className="relative w-full max-w-full h-auto overflow-hidden">
                <AspectRatio ratio={16 / 9} className="w-full h-full">
                  <Image
                    src="/images/videocall.jpeg"
                    alt="Image"
                    className="rounded-md object-cover"
                    fill
                    priority
                  />
                </AspectRatio>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
                  <MeetingControls />
                </div>
              </Card>

              <Card className="h-30p flex justify-center items-center gap-2">
                it's not working <ImBlocked className="text-red-500" />
              </Card>
            </div>

            <div className="w-45p flex flex-col gap-10">
              <Card className="h-50p overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-4xl font-roboto border-b p-6">
                    Translate
                  </CardTitle>
                </CardHeader>
                <div className="flex flex-col gap-8 p-8">
                  <div className="flex items-center justify-center gap-8 w-full">
                    <LanguageSelect />
                    <GoArrowSwitch size={48} className="text-lime-700" />
                    <LanguageSelect />
                  </div>

                  <TranslationCard translation="Sangat menarik" characters="14" />
                  <TranslationCard translation="Very interesting" characters="16" />
                </div>
              </Card>

              <Card className="h-50p flex justify-center items-center gap-2">
                it's not working <ImBlocked className="text-red-500" />
              </Card>
            </div>
          </main>
        </div>
      </header>
    </>
  );
}
