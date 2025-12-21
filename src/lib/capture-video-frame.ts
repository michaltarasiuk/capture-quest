import {isDefined} from "./is-defined";

export function captureVideoFrame(
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement,
) {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");
  if (!isDefined(context)) {
    return null;
  }
  context.drawImage(video, 0, 0);
  return canvas.toDataURL("image/jpeg");
}
