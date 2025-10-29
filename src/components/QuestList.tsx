import {Card, CardBody, Skeleton} from "@heroui/react";
import {useAtomValue} from "jotai";
import {AwardIcon} from "lucide-react";

import {useQuestId} from "@/hooks/use-quest-id";
import {useQuestNavigation} from "@/hooks/use-quest-navigation";
import {cn} from "@/lib/cn";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

import {DifficultyChip} from "./DifficultyChip";

export function QuestList({onNavigate}: {onNavigate: () => void}) {
  const questId = useQuestId();
  const completedQuests = useAtomValue(completedQuestsAtom);
  const navigateToQuest = useQuestNavigation();
  return (
    <div className={cn("space-y-3 lg:col-span-2")}>
      {quests
        .map((q) => ({
          ...q,
          completed: completedQuests.includes(q.id),
        }))
        .map((q) => (
          <Card
            key={q.id}
            className={cn("border-2 border-transparent", {
              "border-[hsl(var(--heroui-focus))]": q.id === questId,
            })}
            isPressable={!q.completed}
            isDisabled={q.completed}
            fullWidth
            onPress={() => {
              navigateToQuest(q.id);
              onNavigate();
            }}>
            <CardBody className={cn("flex flex-row gap-2")}>
              <div className={cn("flex-1")}>
                <h3 className={cn("flex items-center gap-1 font-semibold")}>
                  {q.title}
                  {q.completed && (
                    <AwardIcon className={cn("size-5 stroke-green-600")} />
                  )}
                </h3>
                <p className={cn("text-sm text-gray-600")}>{q.description}</p>
              </div>
              <div className={cn("flex gap-2")}>
                <DifficultyChip difficulty={q.difficulty} />
                <span className={cn("font-semibold text-orange-500")}>
                  +{q.points}
                </span>
              </div>
            </CardBody>
          </Card>
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
