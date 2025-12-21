import {cva, type VariantProps} from "cva";

import {cn} from "#app/lib/cn";

import {CompletedBadge} from "./CompletedBadge";

interface QuestTitleProps extends VariantProps<typeof questTitleVariants> {
  title: string;
  completed: boolean;
}

export function QuestTitle({title, completed, variant}: QuestTitleProps) {
  return (
    <span
      className={cn(
        questTitleVariants({
          variant,
        }),
      )}>
      {title}
      {completed && <CompletedBadge />}
    </span>
  );
}

const questTitleVariants = cva("flex items-center gap-1 font-semibold", {
  variants: {
    variant: {
      default: null,
      header: "text-lg uppercase",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
