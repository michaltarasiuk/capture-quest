import {Button, Skeleton} from "@heroui/react";
import {CircleIcon, XIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import {useEscapeKey} from "#app/hooks/use-escape-key";
import {captureVideoFrame} from "#app/lib/capture-video-frame";
import {cn} from "#app/lib/cn";
import {isDefined} from "#app/lib/is-defined";

interface CameraProps {
  stream: MediaStream;
  onCapture: (imageDataUrl: string) => void;
  onClose: () => void;
}

export function Camera({stream, onCapture, onClose}: CameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (isDefined(videoRef.current)) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  useEscapeKey(onClose);
  function capturePhoto() {
    if (isDefined(videoRef.current) && isDefined(canvasRef.current)) {
      const imageDataUrl = captureVideoFrame(
        videoRef.current,
        canvasRef.current,
      );
      if (isDefined(imageDataUrl)) {
        onCapture(imageDataUrl);
      }
    }
  }
  return (
    <div className={cn("fixed inset-0 z-50 touch-none")}>
      <Video ref={videoRef} />
      <canvas ref={canvasRef} className={cn("hidden")} />
      <Button
        variant="flat"
        radius="full"
        className={cn("absolute end-4 top-4")}
        isIconOnly
        onPress={onClose}>
        <XIcon className={cn("size-6")} />
      </Button>
      <Button
        variant="flat"
        size="lg"
        radius="full"
        className={cn("absolute start-1/2 bottom-10 -translate-x-1/2")}
        isIconOnly
        onPress={capturePhoto}>
        <CircleIcon className={cn("size-10")} />
      </Button>
    </div>
  );
}

function Video({ref}: {ref: React.Ref<HTMLVideoElement>}) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <Skeleton className={cn("size-full")} />}
      <video
        ref={ref}
        className={cn("size-full object-cover", {
          hidden: !isLoaded,
        })}
        autoPlay
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      />
    </>
  );
}
