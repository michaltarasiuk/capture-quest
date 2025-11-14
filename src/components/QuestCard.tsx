import {Card, CardBody, Skeleton} from "@heroui/react";
import {AwardIcon} from "lucide-react";

import {useQuestId} from "@/hooks/use-quest-id";
import {cn} from "@/lib/cn";

import {type Difficulty, DifficultyChip} from "./DifficultyChip";
import {Text} from "./Text";

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
        "border-focus": id === questId,
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
        <div className={cn("flex items-start gap-2")}>
          <DifficultyChip difficulty={difficulty} />
          <Points>{points}</Points>
        </div>
      </CardBody>
    </Card>
  );
}

function Points({children}: {children: React.ReactNode}) {
  return (
    <span
      className={cn(
        "font-semibold text-indigo-600",
        "dark:text-indigo-400",
        "before:content-['+']",
      )}>
      {children}
    </span>
  );
}

export function SkeletonOrderCard() {
  return <Skeleton className={cn("h-23 rounded-2xl", "md:h-18")} />;
}
