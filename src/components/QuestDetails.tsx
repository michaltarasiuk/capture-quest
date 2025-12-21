"use client";

import {CardBody, CardFooter, Skeleton} from "@heroui/react";

import {cn} from "#app/lib/cn";
import {useQuestContext} from "#app/lib/quest-context";

import {Card} from "./Card";
import {QuestHeader} from "./QuestHeader";
import {QuestPhotoCapture} from "./QuestPhotoCapture";
import {Text} from "./Text";

export function QuestDetails({ref}: {ref: React.Ref<HTMLDivElement>}) {
  const quest = useQuestContext();
  return (
    <div ref={ref} className={cn("order-first", "lg:order-none")}>
      <Card className={cn("sticky top-3")}>
        <QuestHeader />
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
          <QuestPhotoCapture />
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
