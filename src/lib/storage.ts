import {atom} from "jotai";
import {atomWithStorage} from "jotai/utils";

import quests from "@/quests";

import {percentage} from "./percentage";
import {difficultyToPoints} from "./points";

export const completedQuestsAtom = atomWithStorage<number[]>(
  "completed_quests",
  [],
  undefined,
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
