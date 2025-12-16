"use client";

import {Card, CardFooter} from "@heroui/react";

import {useQuest} from "#app/hooks/use-quest";
import {cn} from "#app/lib/cn";
import {isDefined} from "#app/lib/is-defined";

import {QuestHeader} from "./QuestHeader";
import {QuestPhotoCapture} from "./QuestPhotoCapture";

export function QuestMobileDetails() {
  const quest = useQuest();
  if (!isDefined(quest)) {
    return null;
  }
  return (
    <Card
      className={cn(
        "fixed start-0 bottom-0 z-50 w-full rounded-b-none",
        "animate-in slide-in-from-bottom duration-300",
      )}>
      <QuestHeader
        title={quest.title}
        difficulty={quest.difficulty}
        completed={quest.completed}
      />
      <CardFooter>
        <QuestPhotoCapture />
      </CardFooter>
    </Card>
  );
}
