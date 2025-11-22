"use client";

import {
  addToast,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@heroui/react";
import {useAtom} from "jotai";
import {AwardIcon} from "lucide-react";
import useSound from "use-sound";

import {useQuestId} from "@/hooks/use-quest-id";
import {cn} from "@/lib/cn";
import {isConfidenceExcellent} from "@/lib/confidence";
import {isDefined} from "@/lib/is-defined";
import {matchQuestPhoto} from "@/lib/match-quest-photo";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

import {CapturePhoto} from "./CapturePhoto";
import {DifficultyChip} from "./DifficultyChip";
import {Text} from "./Text";

export function QuestDetails({ref}: {ref: React.Ref<HTMLDivElement>}) {
  const questId = useQuestId();
  const [completedQuests, setCompletedQuests] = useAtom(completedQuestsAtom);
  const [playSuccessSound] = useSound("/success.mp3");
  const quest = quests.find((q) => q.id === questId);
  if (!isDefined(quest)) {
    return null;
  }
  const completed = completedQuests.includes(quest.id);
  return (
    <div ref={ref} className={cn("order-first", "lg:order-none")}>
      <Card className={cn("sticky top-3")}>
        <CardHeader className={cn("flex justify-between")}>
          <h2
            className={cn("flex items-center text-lg font-semibold uppercase")}>
            {quest.title}
            {completed && (
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
            isDisabled={completed}
            onCapture={async (imageDataUrl) => {
              try {
                const {confidence, reason, hint} = await matchQuestPhoto(
                  quest.id,
                  imageDataUrl,
                );
                if (isConfidenceExcellent(confidence)) {
                  setCompletedQuests((completedQuests) => [
                    ...completedQuests,
                    quest.id,
                  ]);
                  addToast({
                    title: "Quest completed",
                    description: reason + " " + hint,
                    color: "success",
                  });
                  playSuccessSound();
                } else {
                  addToast({
                    title: "Photo did not match",
                    description: reason + " " + hint,
                    color: "danger",
                  });
                }
              } catch {
                addToast({
                  title: "Unexpected error",
                  description:
                    "Something went wrong while processing your photo. " +
                    "Please try again.",
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
    <Skeleton className={cn("order-first h-72 rounded-2xl", "lg:order-none")} />
  );
}
