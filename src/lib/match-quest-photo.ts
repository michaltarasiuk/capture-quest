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
  const {object} = await generateObject({
    model: groq("meta-llama/llama-4-maverick-17b-128e-instruct"),
    schema: z.object({
      confidence: z.number().min(0).max(1),
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
              You are photo validator for a quest game. Analyze how well the submitted photo matches the quest requirements.
              
              Quest Details:
              - Title: ${quest.title}
              - Description: ${quest.description}
              - Hint: ${quest.hint}
              
              Instructions:
              1. Carefully examine the photo for elements matching the quest description
              2. Be reasonable - consider the spirit of the quest, not just literal interpretation
              3. Lean towards being slightly lenient to encourage player engagement
              
              Provide your analysis with a confidence score:
              - confidence: ${ConfidenceRanges.poor.join("-")} = poor match, doesn't fulfill quest
              - confidence: ${ConfidenceRanges.partial.join("-")} = partial match, some elements present
              - confidence: ${ConfidenceRanges.excellent.join("-")} = excellent match, clearly fulfills quest
              - reason: explain your assessment in 1-2 sentences
              - hint: if low confidence, give guidance on what's missing. If high confidence, give encouraging feedback
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
