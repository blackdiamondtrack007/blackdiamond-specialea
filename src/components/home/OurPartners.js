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
    <div className="mx-auto max-w-7xl px-8 mt-96 py-36">
      <h2 className="text-center text-4xl mb-6 text-[#0f5071] dark:text-[#AA570B]">Our Partners</h2>
      <div className="flex gap-6">
        <Link href={"https://www.markets4you.com/en"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={markets4YouForexBroker}
            alt="Markets4you Forex Broker"
          />
        </Link>
        <Link href={"https://www.avatrade.com"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={avaTradeForexBroker}
            alt="AvaTrade Forex Broker"
          />
        </Link>
        <Link href={"https://my.roboforex.com/en"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={exnessLogo}
            alt="Exness Logo"
          />
        </Link>
        <Link href={"https://my.roboforex.com/en"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={roboforexBestBroker}
            alt="Roboforex Best Broker"
          />
        </Link>
        <Link href={"https://www.icmarkets.com/global/en"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={icMarketsForexBroker}
            alt="ICMarkets Forex Broker"
          />
        </Link>
        <Link href={"https://fbs.com/"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={fbsForexBroker}
            alt="FBS Forex Broker"
          />
        </Link>
        <Link href={"https://www.vantagemarkets.com/en/"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={vantageFullLogo}
            alt="Vantage Full Logo"
          />
        </Link>
        <Link href={"https://my.xbtfx.com/"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={xbtfxLogo}
            alt="XBTFX Logo"
          />
        </Link>
        <Link href={"https://www.binance.com/en"} target="_blank">
          <Image
            className="rounded-md shadow-lg hover:scale-110 duration-300"
            src={binanceLogo}
            alt="Binance Logo"
          />
        </Link>
      </div>
    </div>
  );
}
