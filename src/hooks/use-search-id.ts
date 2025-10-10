import {DefaultSearchId} from "@/lib/search-params";
import {useSearchParams} from "next/navigation";

export function useSearchId() {
  return useSearchParams().get("id") ?? DefaultSearchId;
}
