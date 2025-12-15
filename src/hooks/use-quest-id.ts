import {useSearchParams} from "next/navigation";

import {isDefined} from "#app/lib/is-defined";

import {useQuests} from "./use-quests";

export function useQuestId() {
  const quests = useQuests();
  const questIdParam = useSearchParams().get("id");
  let questId: number | undefined;
  if (isDefined(questIdParam)) {
    questId = Number(questIdParam);
  } else {
    const incompleteQuest = quests.find((q) => !q.completed);
    questId = incompleteQuest?.id;
  }
  return questId;
}
