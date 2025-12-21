import {AwardIcon} from "lucide-react";

import {cn} from "#app/lib/cn";

export function CompletedBadge() {
  return (
    <AwardIcon
      className={cn("size-5 stroke-emerald-500", "dark:stroke-emerald-400")}
    />
  );
}

