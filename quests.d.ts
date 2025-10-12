declare module "@/quests" {
  interface Quest {
    id: number;
    title: string;
    description: string;
    difficulty: "easy" | "medium" | "hard";
    points: number;
    hint: string;
  }
  const quests: Quest[];
  export default quests;
}
