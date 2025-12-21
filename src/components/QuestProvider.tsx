"use client";

import {useQuest} from "#app/hooks/use-quest";
import {isDefined} from "#app/lib/is-defined";
import {QuestContext} from "#app/lib/quest-context";

export function QuestProvider({children}: {children: React.ReactNode}) {
  const quest = useQuest();
  if (!isDefined(quest)) {
    return null;
  }
  return <QuestContext value={quest}>{children}</QuestContext>;
}
