"use client";

import {Card, CardBody, Skeleton} from "@heroui/react";
import {useAtomValue} from "jotai";
import {Award} from "lucide-react";

import {useQuestId} from "@/hooks/use-quest-id";
import {useQuestNavigation} from "@/hooks/use-quest-navigation";
import {cn} from "@/lib/cn";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

import {DifficultyChip} from "./DifficultyChip";

export function QuestList() {
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
            className={cn({
              "ring-2 ring-blue-500": q.id === questId,
            })}
            isPressable={!q.completed}
            isDisabled={q.completed}
            fullWidth
            onPress={() => navigateToQuest(q.id)}>
            <CardBody className={cn("flex flex-row")}>
              <div className={cn("flex-1")}>
                <h3 className={cn("flex items-center gap-1 font-semibold")}>
                  {q.title}
                  {q.completed && (
                    <Award className={cn("size-5 stroke-green-600")} />
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
        <Skeleton key={i} className={cn("h-22 rounded-2xl md:h-17")} />
      ))}
    </div>
  );
}
