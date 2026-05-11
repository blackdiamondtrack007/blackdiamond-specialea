"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    if (window.__googleTranslateLoaded) return;
    window.__googleTranslateLoaded = true;

    window.googleTranslateElementInit = () => {
      if (document.getElementById("google_translate_element")?.children.length)
        return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="relative inline-block gt-container w-40">
        <div
          id="google_translate_element"
          className="google-translate-fixed gt-wrapper"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          <svg
            className="h-6 w-6 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </>
  );
}
