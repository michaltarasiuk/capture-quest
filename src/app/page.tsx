import {Suspense} from "react";

import {QuestDetails, SkeletonQuestDetails} from "@/components/QuestDetails";
import {QuestList, SkeletonQuestList} from "@/components/QuestList";
import {SkeletonStats, Stats} from "@/components/Stats";
import {cn} from "@/lib/cn";

export default function Page() {
  return (
    <div className={cn("space-y-6")}>
      <h1 className={cn("text-4xl font-bold")}>Capture Photo</h1>
      <Suspense
        fallback={
          <>
            <SkeletonStats />
            <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3")}>
              <SkeletonQuestList />
              <SkeletonQuestDetails />
            </div>
          </>
        }>
        <Stats />
        <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3")}>
          <QuestList />
          <QuestDetails />
        </div>
      </Suspense>
    </div>
  );
}
