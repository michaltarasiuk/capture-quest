"use client";

import {useRef} from "react";

import {QuestDetails, SkeletonQuestDetails} from "@/components/QuestDetails";
import {QuestList, SkeletonQuestList} from "@/components/QuestList";
import {SkeletonStats, Stats} from "@/components/Stats";
import {useIsMobile} from "@/hooks/use-is-mobile";
import {cn} from "@/lib/cn";

export function QuestContent() {
  const isMobile = useIsMobile();
  const questDetailsRef = useRef<React.ComponentRef<typeof QuestDetails>>(null);
  function scrollToDetails() {
    questDetailsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <>
      <Stats />
      <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3")}>
        <QuestList onNavigate={() => isMobile && scrollToDetails()} />
        <QuestDetails ref={questDetailsRef} />
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
