"use client";

import {Card, CardFooter} from "@heroui/react";

import {useQuest} from "#app/hooks/use-quest";
import {useQuestCapture} from "#app/hooks/use-quest-capture";
import {cn} from "#app/lib/cn";
import {isDefined} from "#app/lib/is-defined";

import {CapturePhoto} from "./CapturePhoto";
import {QuestHeader} from "./QuestHeader";

export function MobileQuestDetails() {
  const quest = useQuest();
  const capture = useQuestCapture();
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
        <CapturePhoto
          isDisabled={quest.completed}
          onCapture={(imageDataUrl) => capture(quest.id, imageDataUrl)}
        />
      </CardFooter>
    </Card>
  );
}
