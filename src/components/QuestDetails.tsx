"use client";

import {
  addToast,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@heroui/react";
import {useSetAtom} from "jotai";

import {useQuestId} from "@/hooks/use-quest-id";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";
import {matchQuestPhoto} from "@/lib/match-quest-photo";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

import {CapturePhoto} from "./CapturePhoto";
import {DifficultyChip} from "./DifficultyChip";

export function QuestDetails() {
  const questId = useQuestId();
  const setCompletedQuests = useSetAtom(completedQuestsAtom);
  const quest = quests.find((q) => q.id === questId);
  if (!isDefined(quest)) {
    return null;
  }
  return (
    <div className={cn("order-first lg:order-none")}>
      <Card className={cn("sticky top-3")}>
        <CardHeader className={cn("flex justify-between")}>
          <h2 className={cn("text-lg font-semibold uppercase")}>
            {quest.title}
          </h2>
          <DifficultyChip difficulty={quest.difficulty} />
        </CardHeader>
        <CardBody className={cn("space-y-3")}>
          <div>
            <h3 className={cn("font-semibold uppercase")}>Description</h3>
            <p className={cn("text-sm text-gray-600")}>{quest.description}</p>
          </div>
          <div>
            <h3 className={cn("font-semibold uppercase")}>Hint</h3>
            <p className={cn("text-sm text-gray-600")}>{quest.hint}</p>
          </div>
        </CardBody>
        <CardFooter>
          <CapturePhoto
            onCapture={async () => {
              const result = await matchQuestPhoto(quest.id);
              if (result.matches) {
                setCompletedQuests((completedQuests) => [
                  ...completedQuests,
                  quest.id,
                ]);
                addToast({
                  title: "Quest completed",
                  color: "success",
                });
              } else {
                const {reason, hint} = result;
                addToast({
                  title: "Photo did not match",
                  description: reason + " " + hint,
                  color: "danger",
                });
              }
            }}
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export function SkeletonQuestDetails() {
  return (
    <Skeleton className={cn("order-first h-72 rounded-2xl lg:order-none")} />
  );
}
