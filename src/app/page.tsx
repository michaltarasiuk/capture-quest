"use client";

import {ClientGate} from "#app/components/ClientGate";
import {QuestsView, SkeletonQuestsView} from "#app/components/QuestsView";
import {cn} from "#app/lib/cn";

export default function Page() {
  return (
    <div className={cn("space-y-6")}>
      <h1 className={cn("text-3xl font-bold")}>Capture Quest</h1>
      <ClientGate fallback={<SkeletonQuestsView />}>
        {() => <QuestsView />}
      </ClientGate>
    </div>
  );
}
