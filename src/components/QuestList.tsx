import {useAtomValue} from "jotai";

import {useQuestNavigation} from "@/hooks/use-quest-navigation";
import {cn} from "@/lib/cn";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

import {QuestCard, SkeletonOrderCard} from "./QuestCard";

export function QuestList({onNavigate}: {onNavigate: () => void}) {
  const completedQuests = useAtomValue(completedQuestsAtom);
  const navigateToQuest = useQuestNavigation();
  return (
    <ul className={cn("space-y-3", "lg:col-span-2")}>
      {quests
        .map((q) => ({...q, completed: completedQuests.includes(q.id)}))
        .sort((a, b) => Number(a.completed) - Number(b.completed))
        .map((q) => (
          <li key={q.id}>
            <QuestCard
              onPress={() => {
                navigateToQuest(q.id);
                onNavigate();
              }}
              {...q}
            />
          </li>
        ))}
    </ul>
  );
}

export function SkeletonQuestList() {
  return (
    <div className={cn("space-y-3", "lg:col-span-2")}>
      {Array.from({length: quests.length}, (_, i) => (
        <SkeletonOrderCard key={i} />
      ))}
    </div>
  );
}
