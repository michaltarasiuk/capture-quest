"use client";

import {Card, CardBody, CardFooter, Skeleton} from "@heroui/react";

import {useQuest} from "@/hooks/use-quest";
import {useQuestCapture} from "@/hooks/use-quest-capture";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

import {CapturePhoto} from "./CapturePhoto";
import {QuestHeader} from "./QuestHeader";
import {Text} from "./Text";

export function QuestDetails({ref}: {ref: React.Ref<HTMLDivElement>}) {
  const quest = useQuest();
  const capture = useQuestCapture();
  if (!isDefined(quest)) {
    return null;
  }
  const headerProps = {
    title: quest.title,
    difficulty: quest.difficulty,
    completed: quest.completed,
  };
  return (
    <div ref={ref} className={cn("order-first", "lg:order-none")}>
      <Card className={cn("sticky top-3")}>
        <QuestHeader
          title={headerProps.title}
          difficulty={headerProps.difficulty}
          completed={headerProps.completed}
        />
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
            onCapture={(imageDataUrl) => capture(quest.id, imageDataUrl)}
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
