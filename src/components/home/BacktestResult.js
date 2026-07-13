"use client";

import React, { useState } from "react";
import Image from "next/image";
import BlackDiamondEaV7_5_EurusdFix from "../../../public/assets/home/backtest-result/BlackDiamondEaV7.5_eurusd_Fix.png";
import PerformanceCover from "../../../public/assets/home/backtest-result/performance_cover.jpg";
import { X } from "lucide-react";

export default function BacktestResult() {
  // FIXED: Removed TypeScript annotations for plain JavaScript
  const [activePreview, setActivePreview] = useState(null);

  const backtestCards = [
    { id: 1, cover: PerformanceCover, result: BlackDiamondEaV7_5_EurusdFix, alt: "EURUSD Fix Result 1" },
    { id: 2, cover: PerformanceCover, result: BlackDiamondEaV7_5_EurusdFix, alt: "EURUSD Fix Result 2" },
    { id: 3, cover: PerformanceCover, result: BlackDiamondEaV7_5_EurusdFix, alt: "EURUSD Fix Result 3" },
    { id: 4, cover: PerformanceCover, result: BlackDiamondEaV7_5_EurusdFix, alt: "EURUSD Fix Result 4" },
    { id: 5, cover: PerformanceCover, result: BlackDiamondEaV7_5_EurusdFix, alt: "EURUSD Fix Result 5" },
    { id: 6, cover: PerformanceCover, result: BlackDiamondEaV7_5_EurusdFix, alt: "EURUSD Fix Result 6" },
  ];

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
          {backtestCards.map((card) => (
            <div key={card.id} className="flex justify-center items-center cursor-pointer">
              <div className="group h-90 w-90 perspective-[1000px]">
                <div className="relative h-full w-full transition-all duration-2000 transform-3d group-hover:transform-[rotateY(180deg)]">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col justify-center bg-card p-6 text-card-foreground shadow-sm backface-hidden border-2 border-primary overflow-hidden">
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
                      onClick={() => setActivePreview(card.result)}
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

      {/* LIGHTBOX PREVIEW MODAL */}
      {activePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-zoom-out"
          onClick={() => setActivePreview(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setActivePreview(null);
            }}
          >
            <X className="size-6" />
          </button>

          {/* Large Image Container */}
          <div 
            className="relative w-full h-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePreview}
              alt="Backtest Fullscreen View"
              fill
              className="object-contain rounded-sm select-none"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}