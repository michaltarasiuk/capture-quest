"use client";

import {Button, addToast} from "@heroui/react";
import {Camera as CameraIcon, Circle as CircleIcon} from "lucide-react";
import {type Ref, useImperativeHandle, useRef, useState} from "react";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

export function CapturePhoto() {
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const cameraRef = useRef<React.ComponentRef<typeof Camera>>(null);
  async function startCamera() {
    try {
      if (isDefined(cameraRef.current)) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        cameraRef.current.srcObject = stream;
        setMediaStream(stream);
      }
    } catch (error) {
      const errorName = error instanceof Error ? error.name : "UnknownError";
      switch (errorName) {
        case "NotAllowedError":
          addToast({
            title: "Not Allowed",
            color: "danger",
          });
          break;
        default:
          addToast({
            title: "Unknown Error",
            color: "danger",
          });
      }
    }
  }
  function stopCamera() {
    if (isDefined(mediaStream)) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  }
  return (
    <>
      <Button
        color="primary"
        size="lg"
        radius="none"
        endContent={<CameraIcon />}
        className={cn("fixed start-0 bottom-0 z-10")}
        disableAnimation
        fullWidth
        onPress={startCamera}>
        Capture photo
      </Button>
      <Camera
        ref={cameraRef}
        hidden={!isDefined(mediaStream)}
        onClose={stopCamera}
      />
    </>
  );
}

interface CameraProps {
  ref: Ref<{srcObject: MediaStream}>;
  hidden: boolean;
  onClose: () => void;
}

function Camera({ref, hidden, onClose}: CameraProps) {
  const videoRef = useRef<React.ComponentRef<"video">>(null);
  const canvasRef = useRef<React.ComponentRef<"canvas">>(null);
  useImperativeHandle(ref, () => ({
    set srcObject(stream: MediaStream) {
      if (isDefined(videoRef.current)) {
        videoRef.current.srcObject = stream;
      }
    },
  }));
  async function capturePhoto() {
    if (isDefined(videoRef.current) && isDefined(canvasRef.current)) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (isDefined(context)) {
        context.drawImage(video, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");
        await navigator.clipboard.writeText(dataUrl);
        onClose();
      }
    }
  }
  return (
    <div
      className={cn("fixed inset-0 z-20", {
        hidden,
      })}>
      <video
        ref={videoRef}
        className={cn("size-full object-cover")}
        autoPlay
        playsInline
      />
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
