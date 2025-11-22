import {addToast} from "@heroui/react";
import {useSetAtom} from "jotai";
import invariant from "tiny-invariant";
import useSound from "use-sound";

import {isConfidenceExcellent} from "@/lib/confidence";
import {isDefined} from "@/lib/is-defined";
import {matchQuestPhoto as matchQuestPhotoAction} from "@/lib/match-quest-photo";
import {completedQuestsAtom} from "@/lib/storage";

export function useMatchQuestPhoto(questId?: number) {
  const setCompletedQuests = useSetAtom(completedQuestsAtom);
  const [playSuccessSound] = useSound("/success.mp3");
  async function matchQuestPhoto(imageDataUrl: string) {
    try {
      invariant(isDefined(questId), "Quest ID is required");
      const {confidence, reason, hint} = await matchQuestPhotoAction(
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
        playSuccessSound();
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
  return matchQuestPhoto;
}
