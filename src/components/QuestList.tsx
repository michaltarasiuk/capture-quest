import {useQuestNavigation} from "#app/hooks/use-quest-navigation";
import {useQuests} from "#app/hooks/use-quests";
import {cn} from "#app/lib/cn";
import {quests} from "#app/lib/quests";

import {QuestCard, SkeletonOrderCard} from "./QuestCard";

export function QuestList({onNavigate}: {onNavigate: () => void}) {
  const quests = useQuests();
  const navigateToQuest = useQuestNavigation();
  return (
    <ul className={cn("space-y-3", "lg:col-span-2")}>
      {quests
        .toSorted((a, b) => Number(a.completed) - Number(b.completed))
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
