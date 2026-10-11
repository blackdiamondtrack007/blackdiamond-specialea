// src/components/AffiliateTracker.jsx
"use client";
import { useEffect } from "react";
import { setAffiliateCookie } from "@/utils/affiliate";

export default function AffiliateTracker() {
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const refCode = queryParams.get("ref");

    if (refCode) {
      setAffiliateCookie(refCode);
    }
  }, []);

  return null;
}