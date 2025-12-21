import {createContext} from "react";

import type {useQuest} from "#app/hooks/use-quest";

export const QuestContext = createContext<ReturnType<typeof useQuest> | null>(
  null,
);
