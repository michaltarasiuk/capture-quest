import {useSearchParams} from "next/navigation";

const DefaultSearchId = "1";

export function useSearchId() {
  return useSearchParams().get("id") ?? DefaultSearchId;
}
