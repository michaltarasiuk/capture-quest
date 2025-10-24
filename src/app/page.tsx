"use client";

import dynamic from "next/dynamic";
import {Suspense} from "react";

import {SkeletonQuestsContent} from "@/components/QuestsContent";
import {cn} from "@/lib/cn";

const QuestsContent = dynamic(
  () =>
    import("@/components/QuestsContent").then((module) => module.QuestsContent),
  {
    ssr: false,
    loading() {
      return <SkeletonQuestsContent />;
    },
  },
);

export default function Page() {
  return (
    <div className={cn("space-y-6")}>
      <h1 className={cn("text-3xl font-bold")}>Capture Photo</h1>
      <Suspense fallback={<SkeletonQuestsContent />}>
        <QuestsContent />
      </Suspense>
    </div>
  );
}
