"use client";

import dynamic from "next/dynamic";
import {useIntersectionObserver} from "usehooks-ts";

import {QuestDetails, SkeletonQuestDetails} from "#app/components/QuestDetails";
import {QuestList, SkeletonQuestList} from "#app/components/QuestList";
import {SkeletonStats, Stats} from "#app/components/Stats";
import {cn} from "#app/lib/cn";
import {isMobile} from "#app/lib/media";

const MobileQuestDetails = dynamic(
  () => import("./MobileQuestDetails").then((m) => m.MobileQuestDetails),
  {ssr: false},
);

export function QuestsView() {
  const [detailsRef, isDetailsVisible, detailsEntry] =
    useIntersectionObserver();
  return (
    <>
      <Stats />
      <div
        className={cn(
          "grid grid-cols-1 gap-4 pb-22",
          "lg:grid-cols-3 lg:pb-0",
        )}>
        <QuestList
          onNavigate={() => {
            if (isMobile() && !isDetailsVisible) {
              detailsEntry!.target.scrollIntoView();
            }
          }}
        />
        <QuestDetails ref={detailsRef} />
      </div>
      {!isDetailsVisible && <MobileQuestDetails />}
    </>
  );
}

export function SkeletonQuestsView() {
  return (
    <>
      <SkeletonStats />
      <div className={cn("grid grid-cols-1 gap-4", "lg:grid-cols-3")}>
        <SkeletonQuestList />
        <SkeletonQuestDetails />
      </div>
    </>
  );
}
