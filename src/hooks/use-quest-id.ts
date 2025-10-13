import {useAtomValue} from "jotai";
import {useSearchParams} from "next/navigation";

import {isDefined} from "@/lib/is-defined";
import {completedQuestsAtom} from "@/lib/storage";
import quests from "@/quests";

export function useQuestId() {
  const searchId = useSearchParams().get("id");
  const completedQuests = useAtomValue(completedQuestsAtom);
  function getFirstIncompleteQuestId() {
    const {id} = quests.find((q) => !completedQuests.includes(q.id)) ?? {};
    return id;
  }
  return isDefined(searchId) ? Number(searchId) : getFirstIncompleteQuestId();
}
