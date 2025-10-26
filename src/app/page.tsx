"use client";

import {ClientGate} from "@/components/ClientGate";
import {QuestsView, SkeletonQuestsView} from "@/components/QuestsView";
import {cn} from "@/lib/cn";

export default function Page() {
  return (
    <div className={cn("space-y-6")}>
      <h1 className={cn("text-3xl font-bold")}>Capture Photo</h1>
      <ClientGate fallback={<SkeletonQuestsView />}>
        {() => <QuestsView />}
      </ClientGate>
    </div>
  );
}
