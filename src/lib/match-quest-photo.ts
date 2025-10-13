"use server";

import {createGroq} from "@ai-sdk/groq";
import {generateObject} from "ai";
import dedent from "dedent";
import invariant from "tiny-invariant";
import * as z from "zod";

import quests from "@/quests";

import {isDefined} from "./is-defined";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function matchQuestPhoto(questId: number) {
  const quest = quests.find((q) => q.id === questId);
  invariant(isDefined(quest), `Quest with id ${questId} not found`);
  const {object} = await generateObject({
    model: groq("openai/gpt-oss-20b"),
    schema: z.object({
      matches: z.boolean(),
      reason: z.string(),
      hint: z.string(),
    }),
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: dedent`
              You are a photo quest validator. Analyze this photo to determine if it matches the quest requirements.

              Quest: ${quest.title}
              Description: ${quest.description}

              Evaluate if the photo correctly completes this quest.
            `,
          },
        ],
      },
    ],
  });
  return object;
}
