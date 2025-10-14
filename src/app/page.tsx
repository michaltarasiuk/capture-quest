"use client";

import dynamic from "next/dynamic";
import {Suspense} from "react";

import {SkeletonQuestContent} from "@/components/QuestContent";
import {cn} from "@/lib/cn";

const QuestContent = dynamic(
  () =>
    import("@/components/QuestContent").then((module) => module.QuestContent),
  {
    ssr: false,
    loading() {
      return <SkeletonQuestContent />;
    },
  },
);

export default function Page() {
  return (
    <div className={cn("space-y-6")}>
      <h1 className={cn("text-3xl font-bold")}>Capture Photo</h1>
      <Suspense fallback={<SkeletonQuestContent />}>
        <QuestContent />
      </Suspense>
    </div>
  );
}
