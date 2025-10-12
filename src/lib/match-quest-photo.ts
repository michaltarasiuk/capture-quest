"use server";

import invariant from "tiny-invariant";

import {isDefined} from "./is-defined";
import {Quests} from "./quests";

export async function matchQuestPhoto(questId: number) {
  const quest = Quests.find((q) => q.id === questId);
  invariant(isDefined(quest), `Quest with id ${questId} not found`);
}
