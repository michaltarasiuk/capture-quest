"use client";

import {Button} from "@heroui/react";
import {CameraIcon} from "lucide-react";
import dynamic from "next/dynamic";
import {useTransition} from "react";
import {FocusScope} from "react-aria";
import {createPortal} from "react-dom";

import {useVideoStream} from "@/hooks/use-video-stream";
import {isDefined} from "@/lib/is-defined";

const Camera = dynamic(() => import("./Camera").then((m) => m.Camera), {
  ssr: false,
});

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
