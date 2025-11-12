"use client";

import {Card, CardBody, Skeleton} from "@heroui/react";
import {useAtomValue} from "jotai";

import {cn} from "@/lib/cn";
import {
  completedQuestsCountAtom,
  completedQuestsPercentageAtom,
  completedQuestsPointsAtom,
} from "@/lib/storage";

export function Stats() {
  const count = useAtomValue(completedQuestsCountAtom);
  const percentage = useAtomValue(completedQuestsPercentageAtom);
  const points = useAtomValue(completedQuestsPointsAtom);
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3")}>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2
            className={cn(
              "text-3xl font-bold text-blue-600",
              "dark:text-blue-400",
            )}>
            {count}
          </h2>
          <p className={cn("text-sm text-gray-600", "dark:text-gray-400")}>
            Quests Completed
          </p>
        </CardBody>
      </Card>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2
            className={cn(
              "text-3xl font-bold text-blue-600",
              "dark:text-blue-400",
            )}>
            {points}
          </h2>
          <p className={cn("text-sm text-gray-600", "dark:text-gray-400")}>
            Total Points
          </p>
        </CardBody>
      </Card>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <h2
            className={cn(
              "text-3xl font-bold text-purple-600",
              "dark:text-purple-400",
            )}>
            {percentage}
          </h2>
          <p className={cn("text-sm text-gray-600", "dark:text-gray-400")}>
            Progress
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export function SkeletonStats() {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3")}>
      <Skeleton className={cn("h-22 rounded-2xl")} />
      <Skeleton className={cn("h-22 rounded-2xl")} />
      <Skeleton className={cn("h-22 rounded-2xl")} />
    </div>
  );
}
