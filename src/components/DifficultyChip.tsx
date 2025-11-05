"use client";

import {Chip, type ChipProps} from "@heroui/react";

import {assertNever} from "@/lib/assert-never";
import {capitalize} from "@/lib/capitalize";

export type Difficulty = "easy" | "medium" | "hard";

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
