import {addToast} from "@heroui/react";
import {useSetAtom} from "jotai";

import {useQuestContext} from "#app/hooks/use-quest-context";
import {isConfidenceExcellent} from "#app/lib/confidence";
import {matchQuestPhoto} from "#app/lib/match-quest-photo";
import {completedQuestsAtom} from "#app/lib/storage";

import {PhotoCapture} from "./PhotoCapture";

export function QuestPhotoCapture() {
  const quest = useQuestContext();
  const setCompletedQuests = useSetAtom(completedQuestsAtom);
  return (
    <PhotoCapture
      isDisabled={quest.completed}
      onCapture={async (imageDataUrl) => {
        try {
          const {confidence, reason, hint} = await matchQuestPhoto(
            quest.id,
            imageDataUrl,
          );
          if (isConfidenceExcellent(confidence)) {
            setCompletedQuests((completedQuests) =>
              completedQuests.add(quest.id),
            );
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
      }}
    />
  );
}
