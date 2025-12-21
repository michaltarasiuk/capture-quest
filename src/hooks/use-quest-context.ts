import {useContext} from "react";

import {isDefined} from "#app/lib/is-defined";
import {QuestContext} from "#app/lib/quest-context";

export function useQuestContext() {
  const quest = useContext(QuestContext);
  if (!isDefined(quest)) {
    throw new Error("useQuestContext must be used within a QuestProvider");
  }
  return quest;
}
