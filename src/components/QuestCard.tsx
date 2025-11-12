import {Card, CardBody, Skeleton} from "@heroui/react";
import {AwardIcon} from "lucide-react";

import {useQuestId} from "@/hooks/use-quest-id";
import {cn} from "@/lib/cn";

import {type Difficulty, DifficultyChip} from "./DifficultyChip";

interface QuestCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  points: number;
  completed: boolean;
  onPress: () => void;
}

export function QuestCard({
  id,
  title,
  description,
  difficulty,
  points,
  completed,
  onPress,
}: QuestCardProps) {
  const questId = useQuestId();
  return (
    <Card
      key={id}
      className={cn("border-2 border-transparent", {
        "border-[hsl(var(--heroui-focus))]": id === questId,
      })}
      isPressable={!completed}
      isDisabled={completed}
      fullWidth
      onPress={onPress}>
      <CardBody className={cn("flex flex-row gap-2")}>
        <div className={cn("flex-1")}>
          <h3 className={cn("flex items-center gap-1 font-semibold")}>
            {title}
            {completed && (
              <AwardIcon className={cn("size-5 stroke-green-600")} />
            )}
          </h3>
          <p className={cn("text-sm text-gray-600", "dark:text-gray-400")}>
            {description}
          </p>
        </div>
        <div className={cn("flex gap-2")}>
          <DifficultyChip difficulty={difficulty} />
          <span
            className={cn(
              "font-semibold text-orange-500",
              "before:content-['+']",
            )}>
            {points}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}

export function SkeletonOrderCard() {
  return <Skeleton className={cn("h-23 rounded-2xl md:h-18")} />;
}
