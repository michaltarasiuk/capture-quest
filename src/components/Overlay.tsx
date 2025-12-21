"use client";

import {FocusScope} from "react-aria";
import {createPortal} from "react-dom";
import {useScrollLock} from "usehooks-ts";

interface OverlayProps {
  children: React.ReactNode;
}

export function Overlay({children}: OverlayProps) {
  useScrollLock();
  return createPortal(
    <FocusScope autoFocus contain restoreFocus>
      {children}
    </FocusScope>,
    document.body,
  );
}
