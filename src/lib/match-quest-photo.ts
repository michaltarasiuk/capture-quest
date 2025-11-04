"use server";

import {createGroq} from "@ai-sdk/groq";
import {generateObject} from "ai";
import dedent from "dedent";
import invariant from "tiny-invariant";
import * as z from "zod";

import quests from "@/quests";

import {ConfidenceRanges} from "./confidence";
import {isDefined} from "./is-defined";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function matchQuestPhoto(questId: number, imageDataUrl: string) {
  const quest = quests.find((q) => q.id === questId);
  invariant(isDefined(quest), `Quest with id ${questId} not found`);
  const [confidenceMin] = ConfidenceRanges.poor;
  const [, confidenceMax] = ConfidenceRanges.excellent;
  const {object} = await generateObject({
    model: groq("meta-llama/llama-4-maverick-17b-128e-instruct"),
    schema: z.object({
      confidence: z.number().min(confidenceMin).max(confidenceMax),
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
              You check photos for a quest game. Look at this photo and decide if it matches the quest.
              
              Quest:
              - Title: ${quest.title}
              - Description: ${quest.description}
              - Hint: ${quest.hint}
              
              Rules:
              1. Look for things in the photo that match the quest description
              2. Think about what the quest really means, not just the exact words
              
              Give your answer:
              - confidence: ${ConfidenceRanges.poor.join("-")} = doesn't match the quest
              - confidence: ${ConfidenceRanges.partial.join("-")} = matches a little bit
              - confidence: ${ConfidenceRanges.excellent.join("-")} = matches very well
              - reason: explain why in 1-2 sentences
              - hint: if it doesn't match well, say what's missing. If it matches well, say something nice
            `,
          },
          {
            type: "image",
            image: imageDataUrl,
          },
        ],
      },
    ],
    temperature: 0.3,
  });
  return object;
}
