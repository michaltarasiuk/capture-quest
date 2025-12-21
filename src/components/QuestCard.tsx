import {CardBody, Skeleton} from "@heroui/react";

import {useQuestId} from "#app/hooks/use-quest-id";
import {cn} from "#app/lib/cn";
import type {Quest} from "#app/lib/quests";

import {Card} from "./Card";
import {DifficultyChip} from "./DifficultyChip";
import {QuestTitle} from "./QuestTitle";
import {Text} from "./Text";

interface QuestCardProps
  extends Pick<Quest, "id" | "title" | "description" | "difficulty"> {
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
          <h3>
            <QuestTitle title={title} completed={completed} />
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
