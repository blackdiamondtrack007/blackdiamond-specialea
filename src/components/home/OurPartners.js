import Image from "next/image";
import React from "react";
import markets4YouForexBroker from "../../../public/assets/home/partners/Markets4you-Forex-Broker.webp";
import avaTradeForexBroker from "../../../public/assets/home/partners/AvaTrade-Forex-Broker.webp";
import exnessLogo from "../../../public/assets/home/partners/exness_logo.webp";
import roboforexBestBroker from "../../../public/assets/home/partners/roboforex-best-broker.webp";
import icMarketsForexBroker from "../../../public/assets/home/partners/ICMarkets-Forex-Broker.webp";
import fbsForexBroker from "../../../public/assets/home/partners/FBS-Forex-Broker.webp";
import vantageFullLogo from "../../../public/assets/home/partners/vantage-full-logo.webp";
import xbtfxLogo from "../../../public/assets/home/partners/xbtfx-logo.webp";
import binanceLogo from "../../../public/assets/home/partners/Binance-Logo.webp";
import Link from "next/link";

export default function OurPartners() {
  return (
    <section className="w-full">
      <div className="container space-y-10 my-0 py-10 md:py-12 lg:py-15 xl:py-20">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">Our Partners</h2>
          {/* <p className="text-body text-center mt-3 lg:mt-5">
            Description of the section
          </p> */}
        </div>

        <div className="flex gap-6 flex-wrap justify-center mt-8 md:mt-10 lg:mt-15">
          <Link href={"https://www.markets4you.com/en"} target="_blank">
            <Image
              className="w-36 rounded-md shadow-lg hover:scale-110 duration-300"
              src={markets4YouForexBroker}
              alt="Markets4you Forex Broker"
            />
          </Link>
          <Link href={"https://www.avatrade.com"} target="_blank">
            <Image
              className="w-36 rounded-md shadow-lg hover:scale-110 duration-300"
              src={avaTradeForexBroker}
              alt="AvaTrade Forex Broker"
            />
          </Link>
          <Link href={"https://my.roboforex.com/en"} target="_blank">
            <Image
              className="w-36 rounded-md shadow-lg hover:scale-110 duration-300"
              src={exnessLogo}
              alt="Exness Logo"
            />
          </Link>
          <Link href={"https://my.roboforex.com/en"} target="_blank">
            <Image
              className="w-36 rounded-md shadow-lg hover:scale-110 duration-300 bg-white"
              src={roboforexBestBroker}
              alt="Roboforex Best Broker"
            />
          </Link>
          <Link href={"https://www.icmarkets.com/global/en"} target="_blank">
            <Image
              className="w-36 rounded-md shadow-lg hover:scale-110 duration-300"
              src={icMarketsForexBroker}
              alt="ICMarkets Forex Broker"
            />
          </Link>
          <Link href={"https://fbs.com/"} target="_blank">
            <Image
              className="w-36 rounded-md shadow-lg hover:scale-110 duration-300"
              src={fbsForexBroker}
              alt="FBS Forex Broker"
            />
          </Link>
          <Link href={"https://www.vantagemarkets.com/en/"} target="_blank">
            <Image
              className="w-36 rounded-md shadow-lg hover:scale-110 duration-300"
              src={vantageFullLogo}
              alt="Vantage Full Logo"
            />
          </Link>
          <Link href={"https://my.xbtfx.com/"} target="_blank">
            <Image
              className="w-36 rounded-md shadow-lg hover:scale-110 duration-300"
              src={xbtfxLogo}
              alt="XBTFX Logo"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
