import {QuestDetails, SkeletonQuestDetails} from "@/components/QuestDetails";
import {QuestList, SkeletonQuestList} from "@/components/QuestList";
import {SkeletonStats, Stats} from "@/components/Stats";
import {cn} from "@/lib/cn";

export function QuestContent() {
  return (
    <>
      <Stats />
      <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3")}>
        <QuestList />
        <QuestDetails />
      </div>
    </>
  );
}

export function SkeletonQuestContent() {
  return (
    <>
      <SkeletonStats />
      <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3")}>
        <SkeletonQuestList />
        <SkeletonQuestDetails />
      </div>
    </>
  );
}
