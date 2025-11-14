"use client";

import {Card, CardBody, Skeleton} from "@heroui/react";
import {useAtomValue} from "jotai";

import {cn} from "@/lib/cn";
import {
  completedQuestsCountAtom,
  completedQuestsPercentageAtom,
  completedQuestsPointsAtom,
} from "@/lib/storage";

import {Text} from "./Text";

export function Stats() {
  const count = useAtomValue(completedQuestsCountAtom);
  const percentage = useAtomValue(completedQuestsPercentageAtom);
  const points = useAtomValue(completedQuestsPointsAtom);
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4",
        "sm:grid-cols-2",
        "md:grid-cols-3",
      )}>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2
            className={cn(
              "text-3xl font-bold text-indigo-600",
              "dark:text-indigo-400",
            )}>
            {count}
          </h2>
          <Text>Quests Completed</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2
            className={cn(
              "text-3xl font-bold text-indigo-600",
              "dark:text-indigo-400",
            )}>
            {points}
          </h2>
          <Text>Total Points</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2
            className={cn(
              "text-3xl font-bold text-violet-600",
              "dark:text-violet-400",
            )}>
            {percentage}
          </h2>
          <Text>Progress</Text>
        </CardBody>
      </Card>
    </div>
  );
}

export function SkeletonStats() {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4",
        "sm:grid-cols-2",
        "md:grid-cols-3",
      )}>
      <Skeleton className={cn("h-22 rounded-2xl")} />
      <Skeleton className={cn("h-22 rounded-2xl")} />
      <Skeleton className={cn("h-22 rounded-2xl")} />
    </div>
  );
}
