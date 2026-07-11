"use client";

export default function TelegramButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Label and Speech Bubble (Always Visible) */}
      <div className="flex items-center relative mr-3 drop-shadow-md">
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
          <span className="leading-tight whitespace-nowrap">Contact us</span>

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
      <a
        href="https://t.me/bdeaspecial"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our Telegram"
        className="
          relative
          flex items-center justify-center 
          w-14 h-14 
          rounded-full 
          bg-[#229ED9] 
          text-white 
          shadow-lg 
          origin-center
          animate-zoom-shake
        "
      >
        {/* SVG Paper Plane Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30"
          height="30"
          style={{ fill: "#fff" }}
        >
          <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
        </svg>

        {/* Red Notification Badge */}
        <div
          className="
            absolute top-0 right-0 
            flex items-center justify-center 
            w-6 h-6 
            bg-[#D92222] 
            rounded-full 
            border-2 border-white 
            shadow-md
            transform translate-x-1 -translate-y-1
          "
        >
          <span className="text-white text-xs font-bold leading-none">1</span>
        </div>
      </a>
    </div>
  );
}