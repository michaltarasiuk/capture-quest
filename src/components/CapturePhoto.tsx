"use client";

import {Button, Skeleton} from "@heroui/react";
import {
  Camera as CameraIcon,
  Circle as CircleIcon,
  X as XIcon,
} from "lucide-react";
import {useEffect, useRef, useState, useTransition} from "react";
import {createPortal} from "react-dom";
import {useScrollLock} from "usehooks-ts";

import {useEscapeDown} from "@/hooks/use-escape-down";
import {useVideoStream} from "@/hooks/use-video-stream";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

export function CapturePhoto({onCapture}: {onCapture: () => void}) {
  const {stream, startStream, stopStream} = useVideoStream();
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Button
        color="primary"
        size="lg"
        endContent={<CameraIcon />}
        isDisabled={isPending}
        fullWidth
        onPress={startStream}>
        Capture photo
      </Button>
      {isDefined(stream) &&
        createPortal(
          <Camera
            stream={stream}
            onCapture={() => {
              stopStream();
              startTransition(onCapture);
            }}
            onClose={stopStream}
          />,
          document.body,
        )}
    </>
  );
}

interface CameraProps {
  stream: MediaStream;
  onCapture: () => void;
  onClose: () => void;
}

function Camera({stream, onCapture, onClose}: CameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (isDefined(videoRef.current)) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  useScrollLock();
  useEscapeDown(onClose);
  async function capturePhoto() {
    if (isDefined(videoRef.current) && isDefined(canvasRef.current)) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (isDefined(context)) {
        context.drawImage(video, 0, 0);
        onCapture();
      }
    }
  }
  return (
    <div className={cn("fixed inset-0")}>
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
