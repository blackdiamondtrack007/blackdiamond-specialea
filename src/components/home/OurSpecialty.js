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
import { Gem } from "lucide-react";

export default function OurSpecialty() {
  return (
    <section className="w-full">
      <div className="container space-y-10 my-0 py-10 md:py-12 lg:py-15 xl:py-20">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">Our Specialty</h2>
          {/* <p className="text-body text-center mt-3 lg:mt-5">
            Description of the section
          </p> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center mt-8 md:mt-10 lg:mt-15">
          <div className="w-full">
            <ul className="space-y-3">
              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Any Broker & Any Account Type Support
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Works on Live, Demo, Prop Firm & FTMO Accounts
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Any Currency Pair Trading
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Auto Market Analysis with Advanced Algorithm
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Smart Entry & Exit System
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Auto Profit Lock & Dynamic Stop Loss Protection
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Built-in Risk Management System
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  No Signal Service Required
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Fully Automated Trading Solution
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Free Lifetime Updates
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  One-Time Payment with Lifetime VIP Support
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Minimum Recommended Deposit: $100
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Consistent Monthly Growth Strategy
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Optimized for M30 Timeframe
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Professional Trade Management
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Low Risk Trading Mode Available
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  News Filter Protection System
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Fixed Lot & Custom Lot Options
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Scalping & Swing Trading Combined
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul className="space-y-3">
              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  5 Premium Indicators Included Inside EA
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Maximum Supported Spread Up to 20 Pips
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Low Drawdown Strategy
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Fast Trade Execution Logic
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  VPS Friendly & Low Resource Usage
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Multi-Layer Trade Protection System
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Smart Recovery & Capital Protection Features
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Beginner Friendly – No Trading Experience Needed
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Easy Installation & Setup
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Regular Performance Optimization
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Real Account Tested Strategy
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Suitable for Small and Large Accounts
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  24/7 Market Monitoring System
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Emotion-Free Trading Decisions
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  No Martingale Strategy
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  No Grid Trading
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Stable Performance During Market Volatility
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Advanced Money Management System
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Gem className="text-primary" />
                <span className="text-text-primary text-body-large hover:ml-5 duration-300 cursor-pointer">
                  Detailed Trading Reports & Statistics
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
