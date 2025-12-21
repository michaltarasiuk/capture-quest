"use client";

import {Button} from "@heroui/react";
import {CameraIcon} from "lucide-react";
import {useTransition} from "react";

import {useVideoStream} from "#app/hooks/use-video-stream";
import {isDefined} from "#app/lib/is-defined";

import {Camera} from "./Camera";
import {Overlay} from "./Overlay";

interface PhotoCaptureProps {
  isDisabled: boolean;
  onCapture: (imageDataUrl: string) => void;
}

export function PhotoCapture({isDisabled, onCapture}: PhotoCaptureProps) {
  const {stream, startStream, stopStream} = useVideoStream();
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Button
        color="primary"
        size="lg"
        endContent={<CameraIcon />}
        isDisabled={isDisabled || isPending}
        fullWidth
        onPress={startStream}>
        Capture photo
      </Button>
      {isDefined(stream) && (
        <Overlay>
          <Camera
            stream={stream}
            onCapture={(imageDataUrl) => {
              stopStream();
              startTransition(() => onCapture(imageDataUrl));
            }}
            onClose={stopStream}
          />
        </Overlay>
      )}
    </>
  );
}
