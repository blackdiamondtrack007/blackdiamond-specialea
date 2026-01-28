import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage1 from "../../../public/assets/home/hero-section/home-hero-image-1.webp";
import heroImage2 from "../../../public/assets/home/hero-section/home-hero-image-2.webp";
import increaseUpProfitIcon from "../../../public/assets/home/icons/increase-up-profit-icon.webp";
import { CircleArrowRight } from "lucide-react";
// import heroBg from "../../../public/assets/home/hero-section/hero-bg.webp"

export default function HeroSection() {
  return (
    <div
      className={
        "w-full mt-18 lg:mt-36.75 bg-[url('/assets/home/hero-section/hero-bg.webp')] bg-no-repeat bg-center bg-cover pt-8 pb-12 md:pt-10 md:pb-20 lg:pt-15 lg:pb-30"
      }
    >
      <div className="container my-0">
        <div className="w-full lg:flex lg:items-center md:gap-10">
          <div className="w-full lg:w-60/100 space-y-4 md:space-y-5 lg:space-y-8">
            <h1 className="text-primary text-3xl md:text-[40px] lg:text-[60px] md:leading-15 lg:leading-20  font-extrabold text-center">
              Trade Smarter, Win Bigger with AVA AIGPT5 EA
            </h1>
            <p className="text-center text-body-large text-[#2d2d2d]">
              No guesswork. No stress. Just proven, automated forex trading.
            </p>

            <h5 className="text-center text-body-large font-bold text-[#2d2d2d]">
              Live Performance Snapshot
            </h5>

            <div className="text-center text-[#2d2d2d] text-body">
              <p>
                <span className="font-medium">Active Traders:</span> 8,500+
              </p>
              <p>
                <span className="font-medium">Win Rate:</span> 82%{" "}
                <span className="font-medium">
                  (MyFxBook, FXblue & Live Trading Verified)
                </span>
              </p>
              <p>
                <span className="font-medium">Average Monthly Returns:</span>{" "}
                8-15% (based on historical data)
              </p>
            </div>

            <div className="text-center md:space-x-5 space-y-5 md:space-y-0">
              <Button
                size="lg"
                className={"p-6 rounded-full text-lg w-60 text-white"}
              >
                {"What's Special"}
                <CircleArrowRight />
              </Button>
              <Button
                size="lg"
                className={"p-6 rounded-full text-lg w-60 text-white"}
              >
                Join Telegram{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="24"
                  height="24"
                  style={{ fill: "#fff" }}
                >
                  <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
                </svg>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-40/100 flex-col md:flex-row md:flex gap-5 mt-8 md:mt-12 lg:mt-0 space-y-5 md:space-y-0">
            <div className="md:w-1/2 space-y-5">
              <div className="rounded-3xl bg-nav-bg text-center space-y-3.5 px-5 py-7">
                <div>
                  <p>Active Traders</p>
                  <h4>$8.5K</h4>
                </div>
                <Button className={"text-white rounded-full"}>82% <Image src={increaseUpProfitIcon} alt="Increase Up Profit Icon"/></Button>
              </div>
              <div>
                <Image className="rounded-3xl w-full" src={heroImage1} alt="" />
              </div>
            </div>
            <div className="md:w-1/2">
              <Image className="rounded-3xl w-full" src={heroImage2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
