import {useAtomValue} from "jotai";
import {useSearchParams} from "next/navigation";

import {isDefined} from "#app/lib/is-defined";
import {quests} from "#app/lib/quests";
import {completedQuestsAtom} from "#app/lib/storage";

export function useQuestId() {
  const completedQuests = useAtomValue(completedQuestsAtom);
  const questIdParam = useSearchParams().get("id");
  if (isDefined(questIdParam)) {
    return Number(questIdParam);
  }
  const incompleteQuest = quests.find((q) => !completedQuests.has(q.id));
  return incompleteQuest?.id;
}
