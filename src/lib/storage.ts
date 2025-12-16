import {atom} from "jotai";
import {
  atomWithStorage,
  createJSONStorage,
  unstable_withStorageValidator as withStorageValidator,
} from "jotai/utils";
import * as z from "zod";

import {percentage} from "./percentage";
import {difficultyToPoints, quests} from "./quests";

const completedQuestsStorageAtom = atomWithStorage(
  "completed_quests",
  [],
  withStorageValidator(isQuestIdArray)(createJSONStorage()),
  {getOnInit: true},
);

export const completedQuestsAtom = atom(
  (get) => new Set(get(completedQuestsStorageAtom)),
  (get, set, update: <T extends Set<number>>(completedQuests: T) => T) => {
    const completedQuests = get(completedQuestsAtom);
    set(completedQuestsStorageAtom, [...update(completedQuests)]);
  },
);

export const completedQuestsCountAtom = atom((get) => {
  const completedQuests = get(completedQuestsAtom);
  return completedQuests.size;
});

export const completedQuestsPercentageAtom = atom((get) => {
  const count = get(completedQuestsCountAtom);
  return percentage(count, quests.length);
});

export const completedQuestsPointsAtom = atom((get) => {
  const completedQuests = get(completedQuestsAtom);
  return quests
    .filter((q) => completedQuests.has(q.id))
    .map((q) => difficultyToPoints(q.difficulty))
    .reduce((a, b) => a + b, 0);
});

function isQuestIdArray(v: unknown): v is number[] {
  return z.array(z.number()).safeParse(v).success;
}
