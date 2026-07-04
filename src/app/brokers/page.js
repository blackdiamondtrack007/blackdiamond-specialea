import { Button } from "@/components/ui/button";
import Image from "next/image";
import markets4YouForexBroker from "../../../public/assets/home/partners/Markets4you-Forex-Broker.webp";
import avaTradeForexBroker from "../../../public/assets/home/partners/AvaTrade-Forex-Broker.webp";
import exnessLogo from "../../../public/assets/home/partners/exness_logo.webp";
import roboforexBestBroker from "../../../public/assets/home/partners/roboforex-best-broker.webp";
import icMarketsForexBroker from "../../../public/assets/home/partners/ICMarkets-Forex-Broker.webp";
import fbsForexBroker from "../../../public/assets/home/partners/FBS-Forex-Broker.webp";
import vantageFullLogo from "../../../public/assets/home/partners/vantage-full-logo.webp";
import xbtfxLogo from "../../../public/assets/home/partners/xbtfx-logo.webp";

export default function Brokers() {
  return (
    <section className="w-full">
      <div className="container pt-12 md:pt-15 lg:pt-30">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">Top Forex Brokers</h2>
        </div>
        <div className="grid grid-cols-5 place-items-center gap-x-5 gap-y-10 mt-8 md:mt-10 lg:mt-15">
          <div className="space-y-5 bg-nav-bg rounded-md p-4">
            <div>
              <Image
                className="w-full h-30 rounded-md shadow-lg"
                src={markets4YouForexBroker}
                alt="Markets4you Forex Broker"
              />
            </div>
            <div className="text-body-large space-y-2 text-nav-text">
              <div className="flex justify-between">
                <p className="font-medium">Min. Deposit:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Commission:</p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">EUR/USD Spread:</p>
                <p>4.1</p>
              </div>
            </div>
            <div>
              <Button className="w-full text-white">Open Live Account</Button>
            </div>
          </div>
          <div className="space-y-5 bg-nav-bg rounded-md p-4">
            <div>
              <Image
                className="w-full h-30 rounded-md shadow-lg"
                src={avaTradeForexBroker}
                alt="AvaTrade Forex Broker"
              />
            </div>
            <div className="text-body-large space-y-2 text-nav-text">
              <div className="flex justify-between">
                <p className="font-medium">Min. Deposit:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Commission:</p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">EUR/USD Spread:</p>
                <p>4.1</p>
              </div>
            </div>
            <div>
              <Button className="w-full text-white">Open Live Account</Button>
            </div>
          </div>
          <div className="space-y-5 bg-nav-bg rounded-md p-4">
            <div>
              <Image
                className="w-full h-30 rounded-md shadow-lg"
                src={exnessLogo}
                alt="Exness Logo"
              />
            </div>
            <div className="text-body-large space-y-2 text-nav-text">
              <div className="flex justify-between">
                <p className="font-medium">Min. Deposit:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Commission:</p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">EUR/USD Spread:</p>
                <p>4.1</p>
              </div>
            </div>
            <div>
              <Button className="w-full text-white">Open Live Account</Button>
            </div>
          </div>
          <div className="space-y-5 bg-nav-bg rounded-md p-4">
            <div>
              <Image
                className="w-full h-30 rounded-md shadow-lg bg-white"
                src={roboforexBestBroker}
                alt="Roboforex Best Broker"
              />
            </div>
            <div className="text-body-large space-y-2 text-nav-text">
              <div className="flex justify-between">
                <p className="font-medium">Min. Deposit:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Commission:</p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">EUR/USD Spread:</p>
                <p>4.1</p>
              </div>
            </div>
            <div>
              <Button className="w-full text-white">Open Live Account</Button>
            </div>
          </div>
          <div className="space-y-5 bg-nav-bg rounded-md p-4">
            <div>
              <Image
                className="w-full h-30 rounded-md shadow-lg"
                src={icMarketsForexBroker}
                alt="ICMarkets Forex Broker"
              />
            </div>
            <div className="text-body-large space-y-2 text-nav-text">
              <div className="flex justify-between">
                <p className="font-medium">Min. Deposit:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Commission:</p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">EUR/USD Spread:</p>
                <p>4.1</p>
              </div>
            </div>
            <div>
              <Button className="w-full text-white">Open Live Account</Button>
            </div>
          </div>
          <div className="space-y-5 bg-nav-bg rounded-md p-4">
            <div>
              <Image
                className="w-full h-30 rounded-md shadow-lg"
                src={fbsForexBroker}
                alt="FBS Forex Broker"
              />
            </div>
            <div className="text-body-large space-y-2 text-nav-text">
              <div className="flex justify-between">
                <p className="font-medium">Min. Deposit:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Commission:</p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">EUR/USD Spread:</p>
                <p>4.1</p>
              </div>
            </div>
            <div>
              <Button className="w-full text-white">Open Live Account</Button>
            </div>
          </div>
          <div className="space-y-5 bg-nav-bg rounded-md p-4">
            <div>
              <Image
                className="w-full h-30 rounded-md shadow-lg"
                src={vantageFullLogo}
                alt="Vantage Full Logo"
              />
            </div>
            <div className="text-body-large space-y-2 text-nav-text">
              <div className="flex justify-between">
                <p className="font-medium">Min. Deposit:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Commission:</p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">EUR/USD Spread:</p>
                <p>4.1</p>
              </div>
            </div>
            <div>
              <Button className="w-full text-white">Open Live Account</Button>
            </div>
          </div>
          <div className="space-y-5 bg-nav-bg rounded-md p-4">
            <div>
              <Image
                className="w-full h-30 rounded-md shadow-lg"
                src={xbtfxLogo}
                alt="XBTFX Logo"
              />
            </div>
            <div className="text-body-large space-y-2 text-nav-text">
              <div className="flex justify-between">
                <p className="font-medium">Min. Deposit:</p>
                <p>$100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Commission:</p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">EUR/USD Spread:</p>
                <p>4.1</p>
              </div>
            </div>
            <div>
              <Button className="w-full text-white">Open Live Account</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
