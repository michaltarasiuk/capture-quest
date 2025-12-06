import type quests from "#quests";

import {assertNever} from "./assert-never";

export type Quest = (typeof quests)[number];
export type Difficulty = Quest["difficulty"];

export function difficultyToPoints(d: Difficulty) {
  let points: number;
  switch (d) {
    case "easy":
      points = 100;
      break;
    case "medium":
      points = 150;
      break;
    case "hard":
      points = 200;
      break;
    default:
      assertNever(d);
  }
  return points;
}
