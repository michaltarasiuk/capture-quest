"use server";

import {createGroq} from "@ai-sdk/groq";
import {generateObject} from "ai";
import dedent from "dedent";
import invariant from "tiny-invariant";
import * as z from "zod";

import {CONFIDENCE_RANGES, getConfidenceRange} from "./confidence";
import {isDefined} from "./is-defined";
import {getQuestById} from "./quests";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function matchQuestPhoto(questId: number, imageDataUrl: string) {
  const quest = getQuestById(questId);
  invariant(isDefined(quest), `Quest with id ${questId} not found`);
  const [confidenceMin, confidenceMax] = getConfidenceRange();
  const {object} = await generateObject({
    model: groq("meta-llama/llama-4-scout-17b-16e-instruct"),
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
              3. Make sure the photo is a real picture taken with a camera
              4. Reject screenshots from websites, social media posts, or downloaded images
              5. Reject photos that are blurry, pixelated, or show poor image quality
              6. Only accept photos that look like they were taken in the real world

              Give your answer:
              - confidence: ${CONFIDENCE_RANGES.poor.join("-")} = doesn't match the quest OR looks like an internet screenshot/website
              - confidence: ${CONFIDENCE_RANGES.partial.join("-")} = matches a little bit
              - confidence: ${CONFIDENCE_RANGES.excellent.join("-")} = matches very well AND is clearly a real photo
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
  });
  return object;
}
