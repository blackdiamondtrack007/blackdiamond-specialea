import React from "react";
import Image from "next/image";
import BlackDiamondEaV7_5_EurusdFix from "../../../public/assets/home/backtest-result/BlackDiamondEaV7.5_eurusd_Fix.png";
import PerformanceCover from "../../../public/assets/home/backtest-result/performance_cover.jpg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BacktestResult() {
  return (
    <section className="w-full">
      <div className="container space-y-10 my-0 py-10 md:py-12 lg:py-15 xl:py-20">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">
            BlackDiamond_SpecialEa V9.00 Backtest Result 99% Quality
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-5 gap-y-10 mt-8 md:mt-10 lg:mt-15">
          <div className="flex justify-center items-center">
            <div className="group h-90 w-90 perspective-[1000px] cursor-pointer">
              {" "}
              <div className="relative h-full w-full transition-all duration-2000 transform-3d group-hover:transform-[rotateY(180deg)]">
                {" "}
                {/* Front Side */}{" "}
                <div className="absolute inset-0 flex flex-col justify-center bg-card p-6 text-card-foreground shadow-sm backface-hidden border-2 border-primary">
                  <Image
                    src={PerformanceCover}
                    alt={"Performance Cover"}
                    fill
                    className="object-cover"
                  />{" "}
                </div>{" "}
                {/* Back Side */}{" "}
                <div className="absolute inset-0 overflow-hidden shadow-sm transform-[rotateY(180deg)] backface-hidden">
                  {" "}
                  <div className="relative w-full h-full">
                    {/* The Image Component */}
                    <Image
                      src={BlackDiamondEaV7_5_EurusdFix}
                      alt={"BlackDiamondEaV7.5 Eurusd Fix"}
                      fill
                      className="object-cover"
                    />

                    {/* The 50% Dark Blend-Mode Overlay */}
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply duration-200 hover:opacity-0" />
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="group h-90 w-90 perspective-[1000px] cursor-pointer">
              {" "}
              <div className="relative h-full w-full transition-all duration-2000 transform-3d group-hover:transform-[rotateY(180deg)]">
                {" "}
                {/* Front Side */}{" "}
                <div className="absolute inset-0 flex flex-col justify-center bg-card p-6 text-card-foreground shadow-sm backface-hidden border-2 border-primary">
                  <Image
                    src={PerformanceCover}
                    alt={"Performance Cover"}
                    fill
                    className="object-cover"
                  />{" "}
                </div>{" "}
                {/* Back Side */}{" "}
                <div className="absolute inset-0 overflow-hidden shadow-sm transform-[rotateY(180deg)] backface-hidden">
                  {" "}
                  <div className="relative w-full h-full">
                    {/* The Image Component */}
                    <Image
                      src={BlackDiamondEaV7_5_EurusdFix}
                      alt={"BlackDiamondEaV7.5 Eurusd Fix"}
                      fill
                      className="object-cover"
                    />

                    {/* The 50% Dark Blend-Mode Overlay */}
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply duration-200 hover:opacity-0" />
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="group h-90 w-90 perspective-[1000px] cursor-pointer">
              {" "}
              <div className="relative h-full w-full transition-all duration-2000 transform-3d group-hover:transform-[rotateY(180deg)]">
                {" "}
                {/* Front Side */}{" "}
                <div className="absolute inset-0 flex flex-col justify-center bg-card p-6 text-card-foreground shadow-sm backface-hidden border-2 border-primary">
                  <Image
                    src={PerformanceCover}
                    alt={"Performance Cover"}
                    fill
                    className="object-cover"
                  />{" "}
                </div>{" "}
                {/* Back Side */}{" "}
                <div className="absolute inset-0 overflow-hidden shadow-sm transform-[rotateY(180deg)] backface-hidden">
                  {" "}
                  <div className="relative w-full h-full">
                    {/* The Image Component */}
                    <Image
                      src={BlackDiamondEaV7_5_EurusdFix}
                      alt={"BlackDiamondEaV7.5 Eurusd Fix"}
                      fill
                      className="object-cover"
                    />

                    {/* The 50% Dark Blend-Mode Overlay */}
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply duration-200 hover:opacity-0" />
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="group h-90 w-90 perspective-[1000px] cursor-pointer">
              {" "}
              <div className="relative h-full w-full transition-all duration-2000 transform-3d group-hover:transform-[rotateY(180deg)]">
                {" "}
                {/* Front Side */}{" "}
                <div className="absolute inset-0 flex flex-col justify-center bg-card p-6 text-card-foreground shadow-sm backface-hidden border-2 border-primary">
                  <Image
                    src={PerformanceCover}
                    alt={"Performance Cover"}
                    fill
                    className="object-cover"
                  />{" "}
                </div>{" "}
                {/* Back Side */}{" "}
                <div className="absolute inset-0 overflow-hidden shadow-sm transform-[rotateY(180deg)] backface-hidden">
                  {" "}
                  <div className="relative w-full h-full">
                    {/* The Image Component */}
                    <Image
                      src={BlackDiamondEaV7_5_EurusdFix}
                      alt={"BlackDiamondEaV7.5 Eurusd Fix"}
                      fill
                      className="object-cover"
                    />

                    {/* The 50% Dark Blend-Mode Overlay */}
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply duration-200 hover:opacity-0" />
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="group h-90 w-90 perspective-[1000px] cursor-pointer">
              {" "}
              <div className="relative h-full w-full transition-all duration-2000 transform-3d group-hover:transform-[rotateY(180deg)]">
                {" "}
                {/* Front Side */}{" "}
                <div className="absolute inset-0 flex flex-col justify-center bg-card p-6 text-card-foreground shadow-sm backface-hidden border-2 border-primary">
                  <Image
                    src={PerformanceCover}
                    alt={"Performance Cover"}
                    fill
                    className="object-cover"
                  />{" "}
                </div>{" "}
                {/* Back Side */}{" "}
                <div className="absolute inset-0 overflow-hidden shadow-sm transform-[rotateY(180deg)] backface-hidden">
                  {" "}
                  <div className="relative w-full h-full">
                    {/* The Image Component */}
                    <Image
                      src={BlackDiamondEaV7_5_EurusdFix}
                      alt={"BlackDiamondEaV7.5 Eurusd Fix"}
                      fill
                      className="object-cover"
                    />

                    {/* The 50% Dark Blend-Mode Overlay */}
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply duration-200 hover:opacity-0" />
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="group h-90 w-90 perspective-[1000px] cursor-pointer">
              {" "}
              <div className="relative h-full w-full transition-all duration-2000 transform-3d group-hover:transform-[rotateY(180deg)]">
                {" "}
                {/* Front Side */}{" "}
                <div className="absolute inset-0 flex flex-col justify-center bg-card p-6 text-card-foreground shadow-sm backface-hidden border-2 border-primary">
                  <Image
                    src={PerformanceCover}
                    alt={"Performance Cover"}
                    fill
                    className="object-cover"
                  />{" "}
                </div>{" "}
                {/* Back Side */}{" "}
                <div className="absolute inset-0 overflow-hidden shadow-sm transform-[rotateY(180deg)] backface-hidden">
                  {" "}
                  <div className="relative w-full h-full">
                    {/* The Image Component */}
                    <Image
                      src={BlackDiamondEaV7_5_EurusdFix}
                      alt={"BlackDiamondEaV7.5 Eurusd Fix"}
                      fill
                      className="object-cover"
                    />

                    {/* The 50% Dark Blend-Mode Overlay */}
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply duration-200 hover:opacity-0" />
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
