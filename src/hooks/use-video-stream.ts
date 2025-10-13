import {addToast} from "@heroui/react";
import {useState} from "react";

import {isDefined} from "@/lib/is-defined";

export function useVideoStream() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  async function startStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(stream);
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
  function stopStream() {
    if (isDefined(stream)) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  }
  return {
    stream,
    startStream,
    stopStream,
  };
}
