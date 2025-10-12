"use client";

import {Card, CardBody, CardFooter, CardHeader} from "@heroui/react";

import {useSearchId} from "@/hooks/use-search-id";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";
import {Quests} from "@/lib/quests";

import {CapturePhoto} from "./CapturePhoto";
import {DifficultyChip} from "./DifficultyChip";

export function QuestDetails() {
  const searchId = useSearchId();
  const quest = Quests.find((q) => String(q.id) === searchId);
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
          <CapturePhoto questId={quest.id} />
        </CardFooter>
      </Card>
    </div>
  );
}
