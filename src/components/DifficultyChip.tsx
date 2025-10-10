import {Chip} from "@heroui/react";
import {assertNever} from "@/lib/assert-never";

type Difficulty = "easy" | "medium" | "hard";

export function DifficultyChip({difficulty}: {difficulty: Difficulty}) {
  switch (difficulty) {
    case "easy":
      return (
        <Chip variant="flat" color="success" size="sm">
          Easy
        </Chip>
      );
    case "medium":
      return (
        <Chip variant="flat" color="warning" size="sm">
          Medium
        </Chip>
      );
    case "hard":
      return (
        <Chip variant="flat" color="danger" size="sm">
          Hard
        </Chip>
      );
    default:
      assertNever(difficulty);
  }
}
