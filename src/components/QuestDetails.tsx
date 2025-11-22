"use client";

import {Card, CardBody, CardFooter, CardHeader, Skeleton} from "@heroui/react";
import {AwardIcon} from "lucide-react";

import {useMatchQuestPhoto} from "@/hooks/use-match-quest-photo";
import {useQuest} from "@/hooks/use-quest";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

import {CapturePhoto} from "./CapturePhoto";
import {DifficultyChip} from "./DifficultyChip";
import {Text} from "./Text";

export function QuestDetails({ref}: {ref: React.Ref<HTMLDivElement>}) {
  const quest = useQuest();
  const matchQuestPhoto = useMatchQuestPhoto(quest?.id);
  if (!isDefined(quest)) {
    return null;
  }
  return (
    <div ref={ref} className={cn("order-first", "lg:order-none")}>
      <Card className={cn("sticky top-3")}>
        <CardHeader className={cn("flex justify-between")}>
          <h2
            className={cn("flex items-center text-lg font-semibold uppercase")}>
            {quest.title}
            {quest.completed && (
              <AwardIcon
                className={cn(
                  "ms-1 size-5 stroke-emerald-500",
                  "dark:stroke-emerald-400",
                )}
              />
            )}
          </h2>
          <DifficultyChip difficulty={quest.difficulty} />
        </CardHeader>
        <CardBody className={cn("space-y-3")}>
          <div>
            <h3 className={cn("font-semibold uppercase")}>Description</h3>
            <Text>{quest.description}</Text>
          </div>
          <div>
            <h3 className={cn("font-semibold uppercase")}>Hint</h3>
            <Text>{quest.hint}</Text>
          </div>
        </CardBody>
        <CardFooter>
          <CapturePhoto
            isDisabled={quest.completed}
            onCapture={matchQuestPhoto}
          />
        </CardFooter>
      </Card>
    </div>
  );
}

export function SkeletonQuestDetails() {
  return (
    <Skeleton className={cn("order-first h-72 rounded-2xl", "lg:order-none")} />
  );
}
