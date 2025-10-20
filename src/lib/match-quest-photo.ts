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

export async function matchQuestPhoto(questId: number, imageDataUrl: string) {
  const quest = quests.find((q) => q.id === questId);
  invariant(isDefined(quest), `Quest with id ${questId} not found`);
  const {object} = await generateObject({
    model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
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
              Determine if this photo completes the quest.

              QUEST REQUIREMENTS:
              Title: ${quest.title}
              Description: ${quest.description}

              YOUR TASK:
              Analyze the photo and check if it meets the quest requirements.
              Set "matches" to true only if the photo clearly fulfills the quest.

              If matches = false, provide brief feedback:
              - "reason": One sentence explaining why (proper grammar)
              - "hint": One practical tip to help complete the quest (proper grammar)
            `,
          },
          {
            type: "image",
            image: imageDataUrl,
          },
        ],
      },
    ],
  });
  return object;
}
