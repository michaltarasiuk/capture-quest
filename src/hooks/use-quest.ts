import {useAtomValue} from "jotai";

import {isDefined} from "#app/lib/is-defined";
import {quests} from "#app/lib/quests";
import {completedQuestsAtom} from "#app/lib/storage";

import {useQuestId} from "./use-quest-id";

export function useQuest() {
  const questId = useQuestId();
  const completedQuests = useAtomValue(completedQuestsAtom);
  const quest = quests.find((q) => q.id === questId);
  if (!isDefined(quest)) {
    return;
  }
  return {
    ...quest,
    completed: completedQuests.includes(quest.id),
  };
}
