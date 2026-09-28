"use client";

import { CloudDownloadIcon } from "lucide-react";
import FreeOfferPopup from "../popup/FreeOfferPopup";
import { Button } from "../ui/button";
import { useState } from "react";

export default function GetFreeAIButton() {
  const [isFreePopupOpen, setIsFreePopupOpen] = useState(false);
  return (
    <>
      <div className="relative w-full">
        <FreeOfferPopup
          isOpen={isFreePopupOpen}
          setIsOpen={setIsFreePopupOpen}
        />
      </div>
      <div className="fixed bottom-24 right-6 z-50 flex items-center">
        {/* Label and Speech Bubble (Always Visible) */}
        <div className="hidden lg:flex items-center relative mr-3 drop-shadow-md">
          <div
            className="
            relative 
            px-4 py-2 
            bg-white 
            text-[#4a4a4a] 
            text-base font-semibold 
            rounded-2xl 
            shadow-sm
          "
          >
            {/* Label Text */}
            <span className="leading-tight whitespace-nowrap">Get Free AI</span>

            {/* Speech Bubble Pointer / Arrow */}
            <div
              className="
              absolute 
              top-1/2 -right-2 -translate-y-1/2 
              w-0 h-0 
              border-t-8 border-t-transparent 
              border-b-8 border-b-transparent 
              border-l-8 border-l-white
            "
            />
          </div>
        </div>

        {/* Telegram Link Wrapper with updated Zoom -> Shake -> Zoom Out sequence */}
        <Button
          onClick={() => setIsFreePopupOpen(true)}
          className="
          relative
          flex items-center justify-center 
          w-14 h-14 
          rounded-full 
          bg-primary 
          text-white 
          shadow-lg 
          origin-center
          animate-zoom-shake
        "
        >
          {/* SVG Paper Plane Icon */}
          <CloudDownloadIcon style={{ width: "32px", height: "32px" }} />
        </Button>
      </div>
    </>
  );
}
