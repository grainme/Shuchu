import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { change } from "@/store";

export function Settings() {
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [TimerValue, setTimerValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    setBackgroundImage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setBackgroundImage(file ?? null);
    setSelectedColor("");
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimerValue(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="rounded-lg border p-5">SETTINGS</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Settings</DialogTitle>
          <DialogDescription>
            Make changes to your page here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="timer" className="text-right">
              Initial Time
            </label>
            <div className="col-span-3">
              <select
                id="timer"
                value={TimerValue || ""}
                onChange={handleTimeChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="" disabled>
                  Select Initial Time
                </option>
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="25">25 minutes</option>
                <option value="60">60 minutes</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color" className="text-right">
              Color
            </Label>
            <div className="col-span-3">
              <div className="flex space-x-4">
                <div
                  onClick={() => handleColorClick("red-500")}
                  className="w-8 h-8 cursor-pointer rounded-full border-b-2 shadow-sm bg-red-500"
                ></div>
                <div
                  onClick={() => handleColorClick("blue-500")}
                  className="w-8 h-8 cursor-pointer rounded-full border-b-2 shadow-sm bg-blue-500"
                ></div>
                <div
                  onClick={() => handleColorClick("green-500")}
                  className="w-8 h-8 cursor-pointer rounded-full border-b-2 shadow-sm bg-green-500"
                ></div>
                <div
                  onClick={() => handleColorClick("black")}
                  className="w-8 h-8 cursor-pointer rounded-full border-b-2 shadow-sm bg-black"
                ></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="background" className="text-right">
              Background
            </Label>
            <div className="col-span-3">
              <input
                type="file"
                id="background"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={() => {
                dispatch(
                  change({
                    color: selectedColor,
                    backgroundImage: backgroundImage,
                    time: TimerValue,
                  })
                );
              }}
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
