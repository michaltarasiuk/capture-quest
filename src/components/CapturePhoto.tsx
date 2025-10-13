"use client";

import {Button, Skeleton} from "@heroui/react";
import {Camera as CameraIcon, Circle as CircleIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {useScrollLock} from "usehooks-ts";

import {useEscapeDown} from "@/hooks/use-escape-down";
import {useVideoStream} from "@/hooks/use-video-stream";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

export function CapturePhoto({onCapture}: {onCapture: () => void}) {
  const {stream, startStream, stopStream} = useVideoStream();
  return (
    <>
      <Button
        color="primary"
        size="lg"
        startContent={<CameraIcon />}
        fullWidth
        onPress={startStream}>
        Capture photo
      </Button>
      {isDefined(stream) && (
        <Camera
          stream={stream}
          onCapture={() => {
            stopStream();
            onCapture();
          }}
          onClose={stopStream}
        />
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
    <div className={cn("fixed inset-0 z-50")}>
      <Video ref={videoRef} />
      <canvas ref={canvasRef} className={cn("hidden")} />
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
