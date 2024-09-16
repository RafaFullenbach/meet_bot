import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full h-16 text-2xl">
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
  );
}
