"use client";

import {useIntersectionObserver} from "usehooks-ts";

import {QuestDetails, SkeletonQuestDetails} from "@/components/QuestDetails";
import {QuestList, SkeletonQuestList} from "@/components/QuestList";
import {SkeletonStats, Stats} from "@/components/Stats";
import {cn} from "@/lib/cn";
import {isMobile} from "@/lib/is-mobile";

export function QuestsView() {
  const [detailsRef, isDetailsVisible, detailsEntry] = useIntersectionObserver({
    threshold: 0.5,
  });
  function scrollToDetails() {
    detailsEntry?.target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <>
      <Stats />
      <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3")}>
        <QuestList
          onNavigate={() => {
            if (isMobile() && !isDetailsVisible) {
              scrollToDetails();
            }
          }}
        />
        <QuestDetails ref={detailsRef} />
      </div>
    </>
  );
}

export function SkeletonQuestsView() {
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
