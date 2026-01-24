"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function StickyHeader({ children }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // scrolling up
        setShow(true);
      } else {
        // scrolling down
        setShow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-transform duration-300 ease-in-out",
        show ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {children}
    </header>
  );
}
