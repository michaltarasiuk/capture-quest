"use client";

import {CardBody, Skeleton} from "@heroui/react";
import {cva, type VariantProps} from "cva";
import {useAtomValue} from "jotai";

import {cn} from "#app/lib/cn";
import {
  completedQuestsCountAtom,
  completedQuestsPercentageAtom,
  completedQuestsPointsAtom,
} from "#app/lib/storage";

import {Card} from "./Card";
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
      <StatCard>
        <StatHeading>{count}</StatHeading>
        <Text>Quests Completed</Text>
      </StatCard>
      <StatCard>
        <StatHeading>{points}</StatHeading>
        <Text>Total Points</Text>
      </StatCard>
      <StatCard>
        <StatHeading variant="violet">{percentage}</StatHeading>
        <Text>Progress</Text>
      </StatCard>
    </div>
  );
}

function StatCard({children}: {children: React.ReactNode}) {
  return (
    <Card>
      <CardBody className={cn("space-y-2")}>{children}</CardBody>
    </Card>
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
