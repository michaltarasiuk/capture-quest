"use server";

import invariant from "tiny-invariant";

import quests from "@/quests";

import {isDefined} from "./is-defined";

export async function matchQuestPhoto(questId: number) {
  const quest = quests.find((q) => q.id === questId);
  invariant(isDefined(quest), `Quest with id ${questId} not found`);
}
