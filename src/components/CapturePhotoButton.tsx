import {Camera, Circle} from "lucide-react";
import {type Ref, useRef, useState} from "react";
import {Button} from "@heroui/react";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

export function CapturePhotoButton() {
  const [isStreaming, setIsStreaming] = useState(false);
  const videoRef = useRef<React.ComponentRef<"video">>(null);
  async function getUserMedia() {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {},
    });
    if (isDefined(videoRef.current)) {
      videoRef.current.srcObject = mediaStream;
      setIsStreaming(true);
    }
  }
  return (
    <>
      <Button
        color="primary"
        size="lg"
        radius="none"
        endContent={<Camera />}
        fullWidth
        disableAnimation
        onPress={getUserMedia}>
        Capture photo
      </Button>
      <Video ref={videoRef} hidden={!isStreaming} />
    </>
  );
}

interface VideoProps {
  ref: Ref<React.ComponentRef<"video">>;
  hidden: boolean;
}

function Video({ref, hidden}: VideoProps) {
  return (
    <div
      className={cn("absolute inset-0", {
        hidden,
      })}>
      <video
        ref={ref}
        className={cn("size-full object-cover")}
        autoPlay
        playsInline
      />
      <Button
        variant="flat"
        size="lg"
        radius="full"
        isIconOnly
        className={cn("absolute start-1/2 bottom-10 -translate-x-1/2")}>
        <Circle className={cn("size-10")} />
      </Button>
    </div>
  );
}
