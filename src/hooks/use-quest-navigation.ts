import {useSearchParams} from "next/navigation";

export function useQuestNavigation() {
  const params = useSearchParams();
  function navigateToQuest(id: number) {
    const updatedParams = new URLSearchParams(params);
    updatedParams.set("id", String(id));
    window.history.pushState(null, "", `?${updatedParams}`);
  }
  return navigateToQuest;
}
