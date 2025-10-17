"use client";

import {useIntersectionObserver} from "usehooks-ts";

import {QuestDetails, SkeletonQuestDetails} from "@/components/QuestDetails";
import {QuestList, SkeletonQuestList} from "@/components/QuestList";
import {SkeletonStats, Stats} from "@/components/Stats";
import {useIsMobile} from "@/hooks/use-is-mobile";
import {cn} from "@/lib/cn";

export function QuestContent() {
  const isMobile = useIsMobile();
  const [detailsRef, isDetailsVisible, detailsEntry] = useIntersectionObserver({
    threshold: 0.5,
  });
  function handleNavigate() {
    if (isMobile && !isDetailsVisible) {
      detailsEntry?.target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  return (
    <>
      <Stats />
      <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3")}>
        <QuestList onNavigate={handleNavigate} />
        <QuestDetails ref={detailsRef} />
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
