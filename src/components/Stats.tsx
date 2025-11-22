"use client";

import {Card, CardBody, Skeleton} from "@heroui/react";
import {cva, type VariantProps} from "cva";
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
          <StatHeading>{count}</StatHeading>
          <Text>Quests Completed</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <StatHeading>{points}</StatHeading>
          <Text>Total Points</Text>
        </CardBody>
      </Card>
      <Card>
        <CardBody className={cn("space-y-2")}>
          <StatHeading variant="violet">{percentage}</StatHeading>
          <Text>Progress</Text>
        </CardBody>
      </Card>
    </div>
  );
}

function StatHeading({
  children,
  ...props
}: VariantProps<typeof statHeadingVariants> & {children: React.ReactNode}) {
  return <h2 className={statHeadingVariants(props)}>{children}</h2>;
}

const statHeadingVariants = cva("text-3xl font-bold", {
  variants: {
    variant: {
      indigo: ["text-indigo-600", "dark:text-indigo-400"],
      violet: ["text-violet-600", "dark:text-violet-400"],
    },
  },
  defaultVariants: {
    variant: "indigo",
  },
});

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
