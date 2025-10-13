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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<React.ComponentRef<"video">>(null);
  const canvasRef = useRef<React.ComponentRef<"canvas">>(null);
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
      {!isVideoLoaded && <Skeleton className={cn("absolute inset-0")} />}
      <video
        ref={videoRef}
        className={cn("size-full object-cover", {
          hidden: !isVideoLoaded,
        })}
        autoPlay
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      />
      <canvas ref={canvasRef} className={cn("hidden")} />
      <Button
        variant="flat"
        size="lg"
        radius="full"
        className={cn("absolute start-1/2 bottom-10 -translate-x-1/2")}
        isDisabled={!isVideoLoaded}
        isIconOnly
        onPress={capturePhoto}>
        <CircleIcon className={cn("size-10")} />
      </Button>
    </div>
  );
}
