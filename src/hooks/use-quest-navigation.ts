import {useSearchParams} from "next/navigation";

import {useIsMobile} from "./use-is-mobile";

export function useQuestNavigation() {
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();
  function navigateToQuest(id: number) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("id", String(id));
    window.history.pushState(null, "", "?" + newSearchParams);
    if (isMobile) {
      window.scrollTo(0, 0);
    }
  }
  return navigateToQuest;
}
