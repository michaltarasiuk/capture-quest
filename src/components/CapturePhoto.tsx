"use client";

import {Button} from "@heroui/react";
import {CameraIcon} from "lucide-react";
import {useTransition} from "react";
import {FocusScope} from "react-aria";
import {createPortal} from "react-dom";

import {useVideoStream} from "#app/hooks/use-video-stream";
import {isDefined} from "#app/lib/is-defined";

import {Camera} from "./Camera";

interface CapturePhotoProps {
  isDisabled: boolean;
  onCapture: (imageDataUrl: string) => void;
}

export function CapturePhoto({isDisabled, onCapture}: CapturePhotoProps) {
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
      {isDefined(stream) &&
        createPortal(
          <FocusScope autoFocus contain restoreFocus>
            <Camera
              stream={stream}
              onCapture={(imageDataUrl) => {
                stopStream();
                startTransition(() => onCapture(imageDataUrl));
              }}
              onClose={stopStream}
            />
          </FocusScope>,
          document.body,
        )}
    </>
  );
}
