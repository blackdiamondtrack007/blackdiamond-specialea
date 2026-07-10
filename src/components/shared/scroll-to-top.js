"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // window.innerHeight / 4 calculates exactly 25vh
      if (window.scrollY > window.innerHeight / 4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-8.5 z-1000 p-2 bg-primary cursor-pointer transition-[opacity,transform] duration-300 ease-in-out rounded-xs"
      aria-label="Scroll to top"
    >
      <svg
        className="transform-[rotate(180deg)] fill-white"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="15px"
        height="15px"
        viewBox="57 35.171 26 16.043"
      >
        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
      </svg>
    </button>
  );
}
