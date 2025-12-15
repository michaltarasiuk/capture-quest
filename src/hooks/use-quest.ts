import {useQuestId} from "./use-quest-id";
import {useQuests} from "./use-quests";

export function useQuest() {
  const quests = useQuests();
  const questId = useQuestId();
  const quest = quests.find((q) => q.id === questId);
  return quest;
}
