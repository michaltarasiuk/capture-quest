import {useSearchParams} from "next/navigation";

import {useIsMobile} from "./use-is-mobile";

export function useQuestNavigation() {
  const params = useSearchParams();
  const isMobile = useIsMobile();
  function navigateToQuest(id: number) {
    const updatedParams = new URLSearchParams(params);
    updatedParams.set("id", String(id));
    window.history.pushState(null, "", "?" + updatedParams);
    if (isMobile) {
      window.scroll({top: 0, behavior: "smooth"});
    }
  }
  return navigateToQuest;
}
