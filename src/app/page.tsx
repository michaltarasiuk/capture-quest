import {CapturePhoto} from "@/components/CapturePhoto";
import {FruitList} from "@/components/FruitList";
import {Spacer} from "@heroui/react";

export default function RootPage() {
  return (
    <>
      <FruitList />
      <Spacer y={12} />
      <CapturePhoto />
    </>
  );
}
