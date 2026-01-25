import Image from "next/image";
import React from "react";
import aiPowered from "../../../public/assets/home/icons/ai-powered.svg";
import lowBalance from "../../../public/assets/home/icons/low-balance.svg";
import accurateEntry from "../../../public/assets/home/icons/accurate-entry.svg";
import verifiedResults from "../../../public/assets/home/icons/verified-results.svg";
import easySetup from "../../../public/assets/home/icons/easy-setup.svg";
import totalSupport from "../../../public/assets/home/icons/total-support.svg";

export default function WhatMakeUsDifferent() {
  return (
    <section className="mt-36 bg-section-bg">
      <div className="container space-y-10 lg:space-y-15 py-10 md:py-12 lg:py-15 xl:py-20">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">
            What makes us different
          </h2>
          <div className="flex justify-center">
            <hr className="w-3/4 h-1 bg-white" />
          </div>
          <p className="text-body text-center">
            Make stable and consistent profits with our collection of the most
            up-to-date AI enabled Forex Trading Tools
          </p>
        </div>
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 px-12">
          <div className="bg-[#ffd000] px-4 py-12 rounded-lg space-y-5 text-center">
            <Image
              src={aiPowered}
              alt="AI Powered"
              className="w-12 h-12 mx-auto"
            />
            <h5 className="text-body-large text-black">AI-Powered</h5>
            <p className="text-body text-black">
              Driven by the Revolutionary 4D Nano Algorithm Technology
            </p>
          </div>
          <div className="bg-[#ffd000] px-4 py-12 rounded-lg space-y-5 text-center">
            <Image
              src={lowBalance}
              width={50}
              height={50}
              alt="AI Powered"
              className="w-12 h-12 mx-auto"
            />
            <h5 className="text-body-large text-black">Low Balance</h5>
            <p className="text-body text-black">
              Trade now with as low as $1000!
            </p>
          </div>
          <div className="bg-[#ffd000] px-4 py-12 rounded-lg space-y-5 text-center">
            <Image
              src={accurateEntry}
              width={50}
              height={50}
              alt="AI Powered"
              className="w-12 h-12 mx-auto"
            />
            <h5 className="text-body-large text-black">Accurate Entry</h5>
            <p className="text-body text-black">
              Formulated with the algorithm that surpass any speculation.
            </p>
          </div>
          <div className="bg-[#ffd000] px-4 py-12 rounded-lg space-y-5 text-center">
            <Image
              src={verifiedResults}
              width={50}
              height={50}
              alt="AI Powered"
              className="w-12 h-12 mx-auto"
            />
            <h5 className="text-body-large text-black">Verified Results</h5>
            <p className="text-body text-black">
              MyFXbook, FxBlue & Live Trading Verified.
            </p>
          </div>
          <div className="bg-[#ffd000] px-4 py-12 rounded-lg space-y-5 text-center">
            <Image
              src={easySetup}
              width={50}
              height={50}
              alt="AI Powered"
              className="w-12 h-12 mx-auto"
            />
            <h5 className="text-body-large text-black">Easy Setup</h5>
            <p className="text-body text-black">
              Plug-and-play with customizable settings for all trader levels.
            </p>
          </div>
          <div className="bg-[#ffd000] px-4 py-12 rounded-lg space-y-5 text-center">
            <Image
              src={totalSupport}
              width={50}
              height={50}
              alt="AI Powered"
              className="w-12 h-12 mx-auto"
            />
            <h5 className="text-body-large text-black">Total Support</h5>
            <p className="text-body text-black">
              Guaranteed 365 day customer support for all your trades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
