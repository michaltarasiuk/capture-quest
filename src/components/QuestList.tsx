import {Skeleton} from "@heroui/react";
import {useAtomValue} from "jotai";

import {useQuestNavigation} from "@/hooks/use-quest-navigation";
import {cn} from "@/lib/cn";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

import {QuestCard} from "./QuestCard";

export function QuestList({onNavigate}: {onNavigate: () => void}) {
  const completedQuests = useAtomValue(completedQuestsAtom);
  const navigateToQuest = useQuestNavigation();
  return (
    <div className={cn("space-y-3 lg:col-span-2")}>
      {quests.map((q) => (
        <QuestCard
          key={q.id}
          completed={completedQuests.includes(q.id)}
          onPress={() => {
            navigateToQuest(q.id);
            onNavigate();
          }}
          {...q}
        />
      ))}
    </div>
  );
}

export function SkeletonQuestList() {
  return (
    <div className={cn("space-y-3 lg:col-span-2")}>
      {Array.from({length: quests.length}, (_, i) => (
        <Skeleton key={i} className={cn("h-23 rounded-2xl md:h-18")} />
      ))}
    </div>
  );
}
