import {useAtomValue} from "jotai";
import {useSearchParams} from "next/navigation";

import {isDefined} from "@/lib/is-defined";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

export function useQuestId() {
  const searchId = useSearchParams().get("id");
  const completedQuests = useAtomValue(completedQuestsAtom);
  function getFirstIncompleteQuestId() {
    const quest = quests.find((q) => !completedQuests.includes(q.id));
    return quest?.id;
  }
  return isDefined(searchId) ? Number(searchId) : getFirstIncompleteQuestId();
}
