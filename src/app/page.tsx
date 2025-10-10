import {QuestDetails} from "@/components/QuestDetails";
import {QuestList} from "@/components/QuestList";
import {Stats} from "@/components/Stats";
import {cn} from "@/lib/cn";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className={cn("space-y-6")}>
      <h1 className={cn("text-4xl font-bold")}>Capture Photo</h1>
      <Stats />
      <div className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3")}>
        <QuestList />
        <QuestDetails />
      </div>
    </div>
  );
}
