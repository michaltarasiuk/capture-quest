"use client";

import {Card, CardBody, CardFooter, CardHeader} from "@heroui/react";
import {CapturePhoto} from "./CapturePhoto";
import {DifficultyChip} from "./DifficultyChip";
import {Quests} from "@/lib/quests";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";
import {useSearchId} from "@/hooks/use-search-id";

export function QuestDetails() {
  const searchId = useSearchId();
  const selectedQuest = Quests.find((q) => String(q.id) === searchId);
  if (!isDefined(selectedQuest)) {
    return null;
  }
  return (
    <div className={cn("order-first md:order-none")}>
      <Card className={cn("sticky top-3")}>
        <CardHeader className={cn("flex justify-between")}>
          <h2 className={cn("text-lg font-semibold uppercase")}>
            {selectedQuest.title}
          </h2>
          <DifficultyChip difficulty={selectedQuest.difficulty} />
        </CardHeader>
        <CardBody className={cn("space-y-3")}>
          <div>
            <h3 className={cn("font-semibold uppercase")}>Description</h3>
            <p className={cn("text-sm text-gray-600")}>
              {selectedQuest.description}
            </p>
          </div>
          <div>
            <h3 className={cn("font-semibold uppercase")}>Hint</h3>
            <p className={cn("text-sm text-gray-600")}>{selectedQuest.hint}</p>
          </div>
        </CardBody>
        <CardFooter>
          <CapturePhoto />
        </CardFooter>
      </Card>
    </div>
  );
}
