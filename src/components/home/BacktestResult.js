"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BlackDiamondEaV9_eurusd_Fix__no_01 from "../../../public/assets/home/backtest-result/BlackDiamondEaV9_eurusd_Fix_ no 01.png";
import BlackDiamondEaV9_eurusd_Fix__no_02 from "../../../public/assets/home/backtest-result/BlackDiamondEaV9_eurusd_Per_no 02.png";
import BlackDiamondEaV9_eurusd_Fix__no_03 from "../../../public/assets/home/backtest-result/BlackDiamondEaV9_gbpusd_no 03.png";
import BlackDiamondEaV9_eurusd_Fix__no_04 from "../../../public/assets/home/backtest-result/BlackDiamondEaV9_usdjpy_no 04.png";
import BlackDiamondEaV9_eurusd_Fix__no_05 from "../../../public/assets/home/backtest-result/BlackDiamondEaV9_usdchf_no 05.png";
import BlackDiamondEaV9_eurusd_Fix__no_06 from "../../../public/assets/home/backtest-result/BlackDiamondEaV9_audusd_no 06.png";
import PerformanceCover from "../../../public/assets/home/backtest-result/performance_cover.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BacktestResult() {
  // Track the index of the open image (null means modal is closed)
  const [activeIndex, setActiveIndex] = useState(null);

  const backtestCards = [
    {
      id: 1,
      cover: PerformanceCover,
      result: BlackDiamondEaV9_eurusd_Fix__no_01,
      alt: "EURUSD Fix Result 1",
    },
    {
      id: 2,
      cover: PerformanceCover,
      result: BlackDiamondEaV9_eurusd_Fix__no_02,
      alt: "EURUSD Fix Result 2",
    },
    {
      id: 3,
      cover: PerformanceCover,
      result: BlackDiamondEaV9_eurusd_Fix__no_03,
      alt: "EURUSD Fix Result 3",
    },
    {
      id: 4,
      cover: PerformanceCover,
      result: BlackDiamondEaV9_eurusd_Fix__no_04,
      alt: "EURUSD Fix Result 4",
    },
    {
      id: 5,
      cover: PerformanceCover,
      result: BlackDiamondEaV9_eurusd_Fix__no_05,
      alt: "EURUSD Fix Result 5",
    },
    {
      id: 6,
      cover: PerformanceCover,
      result: BlackDiamondEaV9_eurusd_Fix__no_06,
      alt: "EURUSD Fix Result 6",
    },
  ];

  // Navigation handlers
  const showNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % backtestCards.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIndex(
      (prev) => (prev - 1 + backtestCards.length) % backtestCards.length,
    );
  };

  // Keyboard navigation support (Left/Right arrow keys & Esc key)
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight")
        setActiveIndex((prev) => (prev + 1) % backtestCards.length);
      if (e.key === "ArrowLeft")
        setActiveIndex(
          (prev) => (prev - 1 + backtestCards.length) % backtestCards.length,
        );
      if (e.key === "Escape") setActiveIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, backtestCards.length]);

  return (
    <section className="w-full">
      <div className="container space-y-10 my-0 py-10 md:py-12 lg:py-15 xl:py-20">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-white text-center">
            BlackDiamond_SpecialEa V9.00 Backtest Result 99% Quality
          </h2>
        </div>

        {/* Grid Area */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-5 gap-y-10 mt-8 md:mt-10 lg:mt-15">
          {backtestCards.map((card, index) => (
            <div key={card.id} className="flex justify-center items-center">
              <div className="group h-90 w-90 perspective-[1000px]">
                <div className="relative h-full w-full transition-all duration-2000 transform-3d group-hover:transform-[rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col justify-center bg-card p-6 text-card-foreground shadow-sm backface-hidden border-2 border-primary overflow-hidden cursor-pointer">
                    <Image
                      src={card.cover}
                      alt="Performance Cover"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 overflow-hidden shadow-sm transform-[rotateY(180deg)] backface-hidden">
                    <div
                      className="relative w-full h-full cursor-zoom-in"
                      onClick={() => setActiveIndex(index)} // Pass the index here
                    >
                      <Image
                        src={card.result}
                        alt={card.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 mix-blend-multiply duration-200 hover:opacity-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL SCREEN SLIDER LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-between bg-black/95 p-4 md:p-10 cursor-zoom-out select-none"
          onClick={() => setActiveIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer z-50"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
          >
            <X className="size-6" />
          </button>

          {/* Left Sliding Button */}
          <button
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer ml-2 md:ml-4 z-50"
            onClick={showPrev}
          >
            <ChevronLeft className="size-6 md:size-8" />
          </button>

          {/* Main Active Slid Image Container */}
          <div
            className="relative w-full h-full max-w-4xl max-h-[80vh] mx-4 transition-all duration-300"
            onClick={(e) => e.stopPropagation()} // Keeps modal from closing when clicking image itself
          >
            <Image
              src={backtestCards[activeIndex].result}
              alt={backtestCards[activeIndex].alt}
              fill
              className="object-contain rounded-sm"
              priority
            />

            {/* Image Counter (e.g., 1 / 6) */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-medium">
              {activeIndex + 1} / {backtestCards.length}
            </div>
          </div>

          {/* Right Sliding Button */}
          <button
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer mr-2 md:mr-4 z-50"
            onClick={showNext}
          >
            <ChevronRight className="size-6 md:size-8" />
          </button>
        </div>
      )}
    </section>
  );
}
