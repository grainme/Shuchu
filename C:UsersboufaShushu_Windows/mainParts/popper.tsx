import { CalendarIcon } from "@radix-ui/react-icons";
import image from "../assets/Marouane.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Card() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-white font-CD">
          Made With Love By @Grainme 💀
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@Grainme</h4>
            <p className="text-sm">CS Student – Creating, Making, Promoting!</p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Hiking since 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
