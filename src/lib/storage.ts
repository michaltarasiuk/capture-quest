import {atom} from "jotai";
import {
  atomWithStorage,
  createJSONStorage,
  unstable_withStorageValidator as withStorageValidator,
} from "jotai/utils";
import * as z from "zod";

import {percentage} from "./percentage";
import {difficultyToPoints, quests} from "./quests";

export const completedQuestsAtom = atomWithStorage(
  "completed_quests",
  [],
  withStorageValidator(isQuestIdArray)(createJSONStorage()),
  {getOnInit: true},
);

export const completedQuestsCountAtom = atom((get) => {
  const completed = get(completedQuestsAtom);
  return completed.length;
});

export const completedQuestsPercentageAtom = atom((get) => {
  const count = get(completedQuestsCountAtom);
  return percentage(count, quests.length);
});

export const completedQuestsPointsAtom = atom((get) => {
  const completed = get(completedQuestsAtom);
  return quests
    .filter((q) => completed.includes(q.id))
    .map((q) => difficultyToPoints(q.difficulty))
    .reduce((a, b) => a + b, 0);
});

function isQuestIdArray(v: unknown): v is number[] {
  return z.array(z.number()).safeParse(v).success;
}
