"use client";

import {Card, CardFooter} from "@heroui/react";

import {useQuest} from "@/hooks/use-quest";
import {useQuestCapture} from "@/hooks/use-quest-capture";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

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
      <QuestHeader {...quest} />
      <CardFooter>
        <CapturePhoto
          isDisabled={quest.completed}
          onCapture={(imageDataUrl) => capture(quest.id, imageDataUrl)}
        />
      </CardFooter>
    </Card>
  );
}
