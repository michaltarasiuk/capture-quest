import {atom} from "jotai";
import {
  atomWithStorage,
  createJSONStorage,
  unstable_withStorageValidator as withStorageValidator,
} from "jotai/utils";
import * as z from "zod";

import {percentage} from "./percentage";
import {difficultyToPoints, quests} from "./quests";

const completedQuestsStorageAtom = atomWithStorage<number[]>(
  "completed_quests",
  [],
  withStorageValidator(isQuestIdArray)(createJSONStorage()),
  {getOnInit: true},
);

export const completedQuestsAtom = atom((get) => {
  const completedQuests = get(completedQuestsStorageAtom);
  return new Set(completedQuests);
});

export const completeQuestAtom = atom(null, (get, set, questId: number) => {
  const current = get(completedQuestsStorageAtom);
  if (!current.includes(questId)) {
    set(completedQuestsStorageAtom, [...current, questId]);
  }
});

export const statsAtom = atom((get) => {
  const completedQuests = get(completedQuestsAtom);
  const count = completedQuests.size;
  const progress = percentage(count, quests.length);
  const points = quests
    .filter((q) => completedQuests.has(q.id))
    .map((q) => difficultyToPoints(q.difficulty))
    .reduce((a, b) => a + b, 0);
  return {count, progress, points};
});

function isQuestIdArray(v: unknown): v is number[] {
  return z.array(z.number()).safeParse(v).success;
}
