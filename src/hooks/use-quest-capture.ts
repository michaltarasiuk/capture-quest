import {addToast} from "@heroui/react";
import {useSetAtom} from "jotai";

import {isConfidenceExcellent} from "#app/lib/confidence";
import {matchQuestPhoto} from "#app/lib/match-quest-photo";
import {completedQuestsAtom} from "#app/lib/storage";

export function useQuestCapture() {
  const setCompletedQuests = useSetAtom(completedQuestsAtom);
  return async function captureQuest(questId: number, imageDataUrl: string) {
    try {
      const {confidence, reason, hint} = await matchQuestPhoto(
        questId,
        imageDataUrl,
      );
      if (isConfidenceExcellent(confidence)) {
        setCompletedQuests((completedQuests) => completedQuests.add(questId));
        addToast({
          title: "Quest completed",
          description: `${reason} ${hint}`,
          color: "success",
        });
      } else {
        addToast({
          title: "Photo did not match",
          description: `${reason} ${hint}`,
          color: "danger",
        });
      }
    } catch {
      addToast({
        title: "Unexpected error",
        description:
          "Something went wrong while processing your photo. " +
          "Please try again.",
        color: "danger",
      });
    }
  };
}
