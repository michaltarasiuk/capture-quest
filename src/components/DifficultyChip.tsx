import {Chip, type ChipProps} from "@heroui/react";

import {assertNever} from "#app/lib/assert-never";
import {capitalize} from "#app/lib/capitalize";
import type {Difficulty} from "#app/lib/difficulty";

export function DifficultyChip({difficulty}: {difficulty: Difficulty}) {
  let color: ChipProps["color"];
  switch (difficulty) {
    case "easy":
      color = "success";
      break;
    case "medium":
      color = "warning";
      break;
    case "hard":
      color = "danger";
      break;
    default:
      assertNever(difficulty);
  }
  return (
    <Chip variant="flat" color={color} size="sm">
      {capitalize(difficulty)}
    </Chip>
  );
}
