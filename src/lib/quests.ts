import * as z from "zod";

import questsData from "#quests";

import {assertNever} from "./assert-never";

export type Quest = z.infer<typeof QuestSchema>;
export type Difficulty = Quest["difficulty"];

const QuestSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(["easy", "medium", "hard"]),
  hint: z.string(),
});

export const quests = questsData.map((q) => QuestSchema.parse(q));

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
