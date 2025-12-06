import {useAtomValue} from "jotai";
import {useSearchParams} from "next/navigation";

import {isDefined} from "#app/lib/is-defined";
import {completedQuestsAtom} from "#app/lib/storage";
import quests from "#quests";

export function useQuestId() {
  const questIdParam = useSearchParams().get("id");
  const completedQuests = useAtomValue(completedQuestsAtom);
  let questId: number | undefined;
  if (isDefined(questIdParam)) {
    questId = Number(questIdParam);
  } else {
    const firstIncompleteQuest = quests.find(
      (q) => !completedQuests.includes(q.id),
    );
    questId = firstIncompleteQuest?.id;
  }
  return questId;
}
