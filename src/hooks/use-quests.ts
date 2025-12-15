import {useAtomValue} from "jotai";

import {quests} from "#app/lib/quests";
import {completedQuestsAtom} from "#app/lib/storage";

export function useQuests() {
  const completedQuests = useAtomValue(completedQuestsAtom);
  function isCompleted(id: number) {
    return completedQuests.includes(id);
  }
  return quests.map((q) => ({...q, completed: isCompleted(q.id)}));
}
