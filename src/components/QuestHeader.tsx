import {CardHeader} from "@heroui/react";
import {AwardIcon} from "lucide-react";

import {cn} from "@/lib/cn";
import type quests from "@/quests";

import {DifficultyChip} from "./DifficultyChip";

type Quest = (typeof quests)[number];
type Difficulty = Quest["difficulty"];

interface QuestHeaderProps {
  title: string;
  difficulty: Difficulty;
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
      <DifficultyChip difficulty={difficulty as "easy" | "medium" | "hard"} />
    </CardHeader>
  );
}
