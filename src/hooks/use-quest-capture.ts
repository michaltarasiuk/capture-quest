import {addToast} from "@heroui/react";
import {useSetAtom} from "jotai";

import {isConfidenceExcellent} from "@/lib/confidence";
import {matchQuestPhoto} from "@/lib/match-quest-photo";
import {completedQuestsAtom} from "@/lib/storage";

export function useQuestCapture() {
  const setCompletedQuests = useSetAtom(completedQuestsAtom);
  async function captureQuest(questId: number, imageDataUrl: string) {
    try {
      const {confidence, reason, hint} = await matchQuestPhoto(
        questId,
        imageDataUrl,
      );
      if (isConfidenceExcellent(confidence)) {
        setCompletedQuests((completedQuests) => [...completedQuests, questId]);
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
  }
  return captureQuest;
}
