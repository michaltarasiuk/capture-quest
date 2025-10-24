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
              You are tasked with analyzing a photo for a quest. 
              The quest details are as follows:
              
              - Title: ${quest.title}
              - Description: ${quest.description}
              - Hint: ${quest.hint}
              
              Please determine if the submitted photo matches the quest criteria. 
              Provide your answer with the following structure:
              
              - matches: true if the photo meets the requirements, false otherwise.
              - reason: a brief explanation of your decision.
              - hint: any additional guidance or information regarding the match.
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
