import { GradientBg, Styles, Themes } from "@/shared";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import React, { useState } from "react";

function Controller({
  selectedTheme,
  selectedBackground,
  selectedStyle,
  setSignInEnable,
}) {
  const [showMore, setShowMore] = useState(6);
  return (
    <div>
      <h2 className="my-1">Themes</h2>
      <Select onValueChange={(value) => selectedTheme(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {Themes.map((theme, index) => (
            <SelectItem value={theme.theme} key={index}>
              <div className="flex gap-3">
                <div className="flex">
                  <div
                    className="h-5 w-5 rounded-l-md"
                    style={{ backgroundColor: theme.primary }}
                  ></div>
                  <div
                    className="h-5 w-5"
                    style={{ backgroundColor: theme.secondary }}
                  ></div>
                  <div
                    className="h-5 w-5"
                    style={{ backgroundColor: theme.accent }}
                  ></div>
                  <div
                    className="h-5 w-5 rounded-r-md"
                    style={{ backgroundColor: theme.neutral }}
                  ></div>
                </div>
                {theme.theme}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <hr className="my-4" />
      <h2> Background </h2>
      <div className="grid grid-cols-3 gap-5">
        {GradientBg.map(
          (bg, index) =>
            index < showMore && (
              <div
                key={index}
                onClick={() => selectedBackground(bg.gradient)}
                className=" w-full h-[70px] rounded-lg cursor-pointer
                hover:border-black hover:border-2 flex items-center justify-center"
                style={{ background: bg.gradient }}
              >
                {index == 0 && "None"}
              </div>
            )
        )}
      </div>
      <Button
        variant="outline"
        size="sm"
        className="w-full my-1 "
        onClick={() => setShowMore(showMore > 6 ? 6 : 20)}
      >
        {showMore > 6 ? "Show Less" : "Show More"}
      </Button>
      <hr className="my-5" />
      {/* Style Selection Controller  */}
      <div>
        <label>Style</label>
        <div className="grid grid-cols-3  gap-3">
          {Styles.map((item, index) => (
            <div key={index}>
              <div
                className="cursor-pointer hover:border-2 rounded-lg"
                onClick={() => selectedStyle(item)}
              >
                <img
                  src={item.img}
                  width={600}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-center">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 my-4 items-center text-sm mt-10">
        <Checkbox onCheckedChange={(e) => setSignInEnable(e)} />{" "}
        <h2>Enable Social Authentication before submit the form</h2>
      </div>
    </div>
  );
}

export default Controller;
