import type quests from "@/quests";

import {assertNever} from "./assert-never";

type Quest = (typeof quests)[number];
type Difficulty = Quest["difficulty"];

export function difficultyToPoints(d: Difficulty) {
  let points: number;
  switch (d) {
    case "easy":
      points = 50;
      break;
    case "medium":
      points = 100;
      break;
    case "hard":
      points = 150;
      break;
    default:
      assertNever(d);
  }
  return points;
}
