import {CardHeader} from "@heroui/react";

import {cn} from "#app/lib/cn";
import type {Quest} from "#app/lib/quests";

import {DifficultyChip} from "./DifficultyChip";
import {QuestTitle} from "./QuestTitle";

interface QuestHeaderProps extends Pick<Quest, "title" | "difficulty"> {
  completed: boolean;
}

export function QuestHeader({title, difficulty, completed}: QuestHeaderProps) {
  return (
    <CardHeader className={cn("flex justify-between")}>
      <h2>
        <QuestTitle title={title} completed={completed} variant="header" />
      </h2>
      <DifficultyChip difficulty={difficulty} />
    </CardHeader>
  );
}
