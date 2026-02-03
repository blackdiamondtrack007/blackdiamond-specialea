"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <div className="w-full min-h-[85vh] mt-15 lg:mt-36.75 bg-[url('/not-found-bg.webp')] bg-no-repeat bg-center bg-cover pt-8 pb-12 md:pt-10 md:pb-20 lg:pt-15 lg:pb-30 flex flex-col justify-end items-center">
      <div className="container my-0 text-center">
        <div className="space-y-1 text-white">
          <h3>OOPS!</h3>
          <h4>PAGE NOT FOUND</h4>
        </div>
        <div className="space-x-4 mt-3 lg:mt-5 text-white">
          <Button
            onClick={() => router.push("/")}
            className="text-white text-body-large cursor-pointer"
          >
            GO HOME
          </Button>
          <Button
            onClick={() => goBack()}
            className="text-white text-body-large cursor-pointer"
          >
            GO BACK
          </Button>
        </div>
      </div>
    </div>
  );
}
