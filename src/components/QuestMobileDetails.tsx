"use client";

import {Card, CardFooter} from "@heroui/react";

import {cn} from "#app/lib/cn";

import {QuestHeader} from "./QuestHeader";
import {QuestPhotoCapture} from "./QuestPhotoCapture";

export function QuestMobileDetails() {
  return (
    <Card
      className={cn(
        "fixed start-0 bottom-0 z-50 w-full rounded-b-none",
        "animate-in slide-in-from-bottom duration-300",
      )}>
      <QuestHeader />
      <CardFooter>
        <QuestPhotoCapture />
      </CardFooter>
    </Card>
  );
}
