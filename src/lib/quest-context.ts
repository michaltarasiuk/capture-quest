import type {useQuest} from "#app/hooks/use-quest";

import {createSafeContext} from "./create-safe-context";

type Quest = NonNullable<ReturnType<typeof useQuest>>;

export const [QuestProvider, useQuestContext] =
  createSafeContext<Quest>("Quest");
