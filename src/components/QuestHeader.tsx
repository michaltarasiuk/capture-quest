import {CardHeader} from "@heroui/react";

import {cn} from "#app/lib/cn";
import {useQuestContext} from "#app/lib/quest-context";

import {DifficultyChip} from "./DifficultyChip";
import {QuestTitle} from "./QuestTitle";

export function QuestHeader() {
  const quest = useQuestContext();
  return (
    <CardHeader className={cn("flex justify-between")}>
      <h2>
        <QuestTitle
          title={quest.title}
          completed={quest.completed}
          variant="header"
        />
      </h2>
      <DifficultyChip difficulty={quest.difficulty} />
    </CardHeader>
  );
}
