import {Card, CardBody, Skeleton} from "@heroui/react";
import {AwardIcon} from "lucide-react";

import {useQuestId} from "#app/hooks/use-quest-id";
import {cn} from "#app/lib/cn";
import type {Difficulty} from "#app/lib/points";

import {DifficultyChip} from "./DifficultyChip";
import {Text} from "./Text";

interface QuestCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  completed: boolean;
  onPress: () => void;
}

export function QuestCard({
  id,
  title,
  description,
  difficulty,
  completed,
  onPress,
}: QuestCardProps) {
  const questId = useQuestId();
  return (
    <Card
      isPressable={!completed}
      isDisabled={completed}
      className={cn("border-2 border-transparent", {
        "border-focus": id === questId,
      })}
      fullWidth
      onPress={onPress}>
      <CardBody className={cn("flex flex-row gap-2")}>
        <div className={cn("flex-1")}>
          <h3 className={cn("flex items-center gap-1 font-semibold")}>
            {title}
            {completed && (
              <AwardIcon
                className={cn(
                  "size-5 stroke-emerald-500",
                  "dark:stroke-emerald-400",
                )}
              />
            )}
          </h3>
          <Text>{description}</Text>
        </div>
        <DifficultyChip difficulty={difficulty} />
      </CardBody>
    </Card>
  );
}

export function SkeletonOrderCard() {
  return <Skeleton className={cn("h-23 rounded-2xl", "md:h-18")} />;
}
