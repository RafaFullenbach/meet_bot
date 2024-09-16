import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosMic } from "react-icons/io";
import { ImPhoneHangUp } from "react-icons/im";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImBlocked } from "react-icons/im";
import { GoArrowSwitch } from "react-icons/go";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
                  <ToggleGroup type="multiple" className="flex gap-8">
                    <ToggleGroupItem
                      value="a"
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-0 data-[state=on]:bg-blue-700 data-[state=on]:text-black"
                    >
                      <IoCameraOutline
                        size={24}
                        className="text-white data-[state=on]:text-black"
                      />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="b"
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-0 data-[state=on]:bg-lime-700 data-[state=on]:text-black"
                    >
                      <IoIosMic
                        size={24}
                        className="text-white data-[state=on]:text-black"
                      />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="c"
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 bg-opacity-50 hover:bg-opacity-75 focus:outline-none focus:ring-0 data-[state=on]:bg-red-700"
                    >
                      <ImPhoneHangUp size={24} className="text-white" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </Card>

              <Card className="h-30p flex justify-center items-center gap-2">
                it's not working
                <ImBlocked className="text-red-500" />
              </Card>
            </div>

            <div className="w-45p flex flex-col gap-10">
              <Card className="h-50p">
                <CardHeader>
                  <CardTitle className="text-4xl font-roboto border-b p-6">
                    Translate
                  </CardTitle>
                </CardHeader>

                <div className="flex items-center w-full justify-around">
                  <Select>
                    <SelectTrigger className="w-[300px] text-2xl">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portugues" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/br.png" />
                            <AvatarFallback>BR</AvatarFallback>
                          </Avatar>
                          <span>Português</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="ingles" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/us.png" />
                            <AvatarFallback>US</AvatarFallback>
                          </Avatar>
                          <span>Inglês</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="espanhol" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/es.png" />
                            <AvatarFallback>ES</AvatarFallback>
                          </Avatar>
                          <span>Espanhol</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="chines" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/cn.png" />
                            <AvatarFallback>JP</AvatarFallback>
                          </Avatar>
                          <span>Mandarim</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="frances" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/fr.png" />
                            <AvatarFallback>FR</AvatarFallback>
                          </Avatar>
                          <span>Francês</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <GoArrowSwitch size={26} className="text-lime-700" />

                  <Select>
                    <SelectTrigger className="w-[300px] text-2xl">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portugues" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/br.png" />
                            <AvatarFallback>BR</AvatarFallback>
                          </Avatar>
                          <span>Português</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="ingles" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/us.png" />
                            <AvatarFallback>US</AvatarFallback>
                          </Avatar>
                          <span>Inglês</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="espanhol" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/es.png" />
                            <AvatarFallback>ES</AvatarFallback>
                          </Avatar>
                          <span>Espanhol</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="chines" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/cn.png" />
                            <AvatarFallback>JP</AvatarFallback>
                          </Avatar>
                          <span>Mandarim</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="frances" className="text-1xl">
                        <div className="flex gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://flagpedia.net/data/flags/h80/fr.png" />
                            <AvatarFallback>FR</AvatarFallback>
                          </Avatar>
                          <span>Francês</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              <Card className="h-50p flex justify-center items-center gap-2">
                it's not working
                <ImBlocked className="text-red-500" />
              </Card>
            </div>
          </main>
        </div>
      </header>
    </>
  );
}
