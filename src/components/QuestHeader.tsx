import {CardHeader} from "@heroui/react";
import {AwardIcon} from "lucide-react";

import {cn} from "#app/lib/cn";
import type {Quest} from "#app/lib/quests";

import {DifficultyChip} from "./DifficultyChip";

interface QuestHeaderProps extends Pick<Quest, "title" | "difficulty"> {
  completed: boolean;
}

export function QuestHeader({title, difficulty, completed}: QuestHeaderProps) {
  return (
    <CardHeader className={cn("flex justify-between")}>
      <h2 className={cn("flex items-center text-lg font-semibold uppercase")}>
        {title}
        {completed && (
          <AwardIcon
            className={cn(
              "ms-1 size-5 stroke-emerald-500",
              "dark:stroke-emerald-400",
            )}
          />
        )}
      </h2>
      <DifficultyChip difficulty={difficulty} />
    </CardHeader>
  );
}
