"use client";

import { Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  rpgButtonBase,
  rpgButtonGradient,
  rpgButtonBorder,
  TAGS,
} from "./styles";

export function FilterTagsButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`${rpgButtonBase} ${rpgButtonGradient} ${rpgButtonBorder} bg-blue-600 border-blue-700 hover:bg-blue-500`}
        >
          <Tags className="w-5 h-5 mr-2" />
          タグ
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 bg-black/90 border-white/10 p-2">
        <div className="space-y-2">
          {TAGS.map((tag) => (
            <Button
              key={tag.id}
              variant="ghost"
              className={`w-full justify-start text-white bg-gradient-to-r ${tag.bgColor} hover:brightness-110`}
            >
              <span className={`w-2 h-2 rounded-full bg-white mr-2`} />
              {tag.name}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
