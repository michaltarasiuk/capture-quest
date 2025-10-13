"use client";

import {Card, CardBody, Skeleton} from "@heroui/react";
import {useAtomValue} from "jotai";
import {useRouter} from "next/navigation";

import {useIsMobile} from "@/hooks/use-is-mobile";
import {useSearchId} from "@/hooks/use-search-id";
import {cn} from "@/lib/cn";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

import {DifficultyChip} from "./DifficultyChip";

export function QuestList() {
  const router = useRouter();
  const searchId = useSearchId();
  const completedQuests = useAtomValue(completedQuestsAtom);
  const isMobile = useIsMobile();
  function isCompleted(id: number) {
    return completedQuests.includes(id);
  }
  function selectQuest(id: number) {
    router.push(`?id=${id}`, {
      scroll: isMobile,
    });
  }
  return (
    <div className={cn("space-y-3 lg:col-span-2")}>
      {quests.map((q) => (
        <Card
          key={q.id}
          className={cn({
            "ring-2 ring-blue-500": String(q.id) === searchId,
          })}
          isPressable={!isCompleted(q.id)}
          isDisabled={isCompleted(q.id)}
          fullWidth
          onPress={() => selectQuest(q.id)}>
          <CardBody className={cn("flex flex-row")}>
            <div className={cn("flex-1")}>
              <h3 className={cn("font-semibold")}>{q.title}</h3>
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
