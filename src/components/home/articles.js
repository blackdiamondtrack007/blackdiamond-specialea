import Image from "next/image";
import articleImage01 from "../../../public/assets/home/articles/01_Best Forex EA.webp";
import articleImage02 from "../../../public/assets/home/articles/02_No_emotion_trading_accuracy.webp";
import articleImage03 from "../../../public/assets/home/articles/03_AI‑Powered-Automated-Forex-Trading.webp";
import articleImage04 from "../../../public/assets/home/articles/04_Low-Drawdown-Risk-Management-Focus.webp";
import articleImage05 from "../../../public/assets/home/articles/05_Verified_Results_Transparent_Performance.webp";
import articleImage06 from "../../../public/assets/home/articles/06_Easy-MT4-Setup-User‑Friendly.webp";
import articleImage07 from "../../../public/assets/home/articles/07_Who Is BlackDiamond Special EA.webp";
import articleImage08 from "../../../public/assets/home/articles/08_Automated-Trading-with-Confidence.webp";

export default function Articles() {
  return (
    <section className="w-full">
      <div className="my-10">
        {/* <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">
            Title of the section
          </h2>
          <p className="text-body text-center mt-3 lg:mt-5">
            Description of the section
          </p>
        </div> */}
        <div className="mt-8 md:mt-10 lg:mt-15">
          <div className="bg-article-bg-2 bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="flex flex-col gap-8 lg:gap-12 xl:gap-15 bg-black/90 pt-10 md:pt-15 lg:pt-20 xl:pt-25">
              <article className="container my-0 flex xl:flex-row flex-col">
                <div className="w-full xl:w-[60%]">
                  <Image
                    src={articleImage01}
                    alt="Best Forex EA – BlackDiamond Special EA"
                    className="w-full rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl"
                  />
                </div>
                <div className="w-full xl:w-[40%] p-6 lg:p-10 text-white bg-primary rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl flex flex-col justify-center">
                  <h3>Best Forex EA – BlackDiamond Special EA</h3>
                  <div className="mt-3 lg:mt-5 text-body text-justify">
                    <p>
                      BlackDiamond Special EA is a{" "}
                      <strong>premium AI‑powered Forex Expert Advisor</strong>{" "}
                      designed for traders who want consistent, automated
                      trading results with controlled risk. This advanced{" "}
                      <strong>Forex robot for MT4</strong> uses intelligent
                      market analysis, precise entry logic, and strict risk
                      management to trade the market automatically without
                      emotional decision‑making.
                    </p>
                    <br />
                    <p>
                      Whether you are a beginner or an experienced trader,
                      BlackDiamond Special EA helps you participate in the Forex
                      market using a{" "}
                      <strong>reliable automated forex trading system</strong>{" "}
                      built for long‑term performance.
                    </p>
                  </div>
                </div>
              </article>
              <article className="container my-0 flex xl:flex-row flex-col-reverse">
                <div className="w-full xl:w-[40%] p-6 lg:p-10 text-white bg-primary rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl flex flex-col justify-center">
                  <h3>Why Choose BlackDiamond Special EA</h3>
                  <div className="mt-3 lg:mt-5 text-body text-justify">
                    <p>
                      BlackDiamond Special EA is developed with a professional
                      trading algorithm that focuses on high‑probability setups
                      rather than over‑trading. The system is optimized to work
                      in real market conditions and aims to protect capital
                      while targeting steady growth.
                    </p>
                    <p className="font-bold mt-3 lg:mt-5">
                      Key advantages include:
                    </p>
                    <ul className="list-disc ml-7 lg:ml-8 mt-2 lg:mt-4">
                      <li>
                        AI‑powered trading logic for accurate market entries
                      </li>
                      <li>
                        Fully automated Forex trading with MT4 compatibility
                      </li>
                      <li>Optimized for low drawdown and capital protection</li>
                      <li>Works on small and medium‑sized accounts</li>
                      <li>
                        No emotional trading or manual intervention required
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full xl:w-[60%]">
                  <Image
                    src={articleImage02}
                    alt="Why Choose BlackDiamond Special EA"
                    className="w-full rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl"
                  />
                </div>
              </article>
            </div>
          </div>

          <div className="bg-article-bg-1 bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="flex flex-col gap-8 lg:gap-12 xl:gap-15 bg-black/90 pt-8 lg:pt-12 xl:pt-15">
              <article className="container my-0 flex xl:flex-row flex-col">
                <div className="w-full xl:w-[60%]">
                  <Image
                    src={articleImage03}
                    alt="AI‑Powered Automated Forex Trading"
                    className="w-full rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl"
                  />
                </div>
                <div className="w-full xl:w-[40%] p-6 lg:p-10 text-white bg-primary rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl flex flex-col justify-center">
                  <h3>AI‑Powered Automated Forex Trading</h3>
                  <div className="mt-3 lg:mt-5 text-body text-justify">
                    <p>
                      The core of BlackDiamond Special EA is its{" "}
                      <strong>AI‑driven market analysis engine</strong>. The EA
                      continuously scans price action, trend strength, and
                      volatility conditions to identify optimal trading
                      opportunities. Trades are executed automatically based on
                      predefined rules, eliminating guesswork and emotional
                      bias.
                    </p>
                    <br />
                    <p>
                      As a professional <strong>Forex Expert Advisor</strong>,
                      it is designed to adapt to changing market conditions and
                      avoid low‑quality setups.
                    </p>
                  </div>
                </div>
              </article>
              <article className="container my-0 flex xl:flex-row flex-col-reverse">
                <div className="w-full xl:w-[40%] p-6 lg:p-10 text-white bg-primary rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl flex flex-col justify-center">
                  <h3>Low Drawdown & Risk Management Focus</h3>
                  <div className="mt-3 lg:mt-5 text-body text-justify">
                    <p className="font-bold mt-3 lg:mt-5">
                      Risk control is a top priority. BlackDiamond Special EA
                      uses:
                    </p>
                    <ul className="list-disc ml-7 lg:ml-8 mt-2 lg:mt-4">
                      <li>Dynamic lot sizing</li>
                      <li>Intelligent stop‑loss and take‑profit logic</li>
                      <li>
                        Built‑in safety filters to avoid unstable market
                        conditions
                      </li>
                    </ul>
                    <p className="mt-3 lg:mt-5">
                      This approach helps maintain <strong>low drawdown</strong>
                      , making it a safer choice compared to aggressive grid or
                      martingale systems. If you are looking for a{" "}
                      <strong>safe Forex robot without martingale</strong>,
                      BlackDiamond Special EA is built with capital protection
                      in mind.
                    </p>
                  </div>
                </div>
                <div className="w-full xl:w-[60%]">
                  <Image
                    src={articleImage04}
                    alt="Low Drawdown & Risk Management Focus"
                    className="w-full rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl"
                  />
                </div>
              </article>
            </div>
          </div>

          <div className="bg-article-bg-2 bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="flex flex-col gap-8 lg:gap-12 xl:gap-15 bg-black/90 pt-8 lg:pt-12 xl:pt-15">
              <article className="container my-0 flex xl:flex-row flex-col rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl">
                <div className="w-full xl:w-[60%]">
                  <Image
                    src={articleImage05}
                    alt="Verified Results & Transparent Performance"
                    className="w-full rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl"
                  />
                </div>
                <div className="w-full xl:w-[40%] p-6 lg:p-10 text-white bg-primary rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl flex flex-col justify-center">
                  <h3>Verified Results & Transparent Performance</h3>
                  <div className="mt-3 lg:mt-5 text-body text-justify">
                    <p>
                      BlackDiamond Special EA is designed to trade on{" "}
                      <strong>real market conditions</strong>, and performance
                      transparency is strongly emphasized. Live trading results
                      and performance metrics can be verified to help traders
                      make informed decisions.
                    </p>
                    <br />
                    <p>
                      Traders searching for a{" "}
                      <strong>Forex EA with real account results</strong> and
                      transparent performance will appreciate the focus on
                      long‑term sustainability rather than unrealistic promises.
                    </p>
                  </div>
                </div>
              </article>
              <article className="container my-0 flex xl:flex-row flex-col-reverse">
                <div className="w-full xl:w-[40%] p-6 lg:p-10 text-white bg-primary rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl flex flex-col justify-center">
                  <h3>Easy MT4 Setup & User‑Friendly Operation</h3>
                  <div className="mt-3 lg:mt-5 text-body text-justify">
                    <p className="font-bold mt-3 lg:mt-5">
                      Getting started is simple:
                    </p>
                    <ul className="list-decimal ml-7 lg:ml-8 mt-2 lg:mt-4">
                      <li>Install the EA on MetaTrader 4 (MT4)</li>
                      <li>Apply the recommended settings</li>
                      <li>Enable auto‑trading</li>
                    </ul>
                    <p className="mt-3 lg:mt-5">
                      Once installed, the EA handles everything automatically.
                      This makes it suitable for traders who want an{" "}
                      <strong>easy‑to‑use Forex EA</strong> without complex
                      configuration.
                    </p>
                  </div>
                </div>
                <div className="w-full xl:w-[60%]">
                  <Image
                    src={articleImage06}
                    alt="Easy MT4 Setup & User‑Friendly Operation"
                    className="w-full rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl"
                  />
                </div>
              </article>
            </div>
          </div>

          <div className="bg-article-bg-1 bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="flex flex-col gap-8 lg:gap-12 xl:gap-15 bg-black/90 pt-8 lg:pt-12 xl:pt-15">
              <article className="container my-0 flex xl:flex-row flex-col">
                <div className="w-full xl:w-[60%]">
                  <Image
                    src={articleImage07}
                    alt="Who Is BlackDiamond Special EA For"
                    className="w-full rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl"
                  />
                </div>
                <div className="w-full xl:w-[40%] p-6 lg:p-10 text-white bg-primary rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl flex flex-col justify-center">
                  <h3>Who Is BlackDiamond Special EA For?</h3>
                  <div className="mt-3 lg:mt-5 text-body text-justify">
                    <p className="font-bold mt-3 lg:mt-5">
                      BlackDiamond Special EA is ideal for:
                    </p>
                    <ul className="list-disc ml-7 lg:ml-8 mt-2 lg:mt-4">
                      <li>
                        Traders looking for the best Forex EA for consistent
                        profit
                      </li>
                      <li>
                        Beginners who want automated trading with simple setup
                      </li>
                      <li>Traders with small to medium account balances</li>
                      <li>
                        Users seeking a stable Forex robot with risk control
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="container my-0 flex xl:flex-row flex-col-reverse pb-10 md:pb-15 lg:pb-20 xl:pb-25">
                <div className="w-full xl:w-[40%] p-6 lg:p-10 text-white bg-primary rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl flex flex-col justify-center">
                  <h3>Start Automated Trading with Confidence</h3>
                  <div className="mt-3 lg:mt-5 text-body text-justify">
                    <p>
                      If you are searching for a{" "}
                      <strong>reliable Forex robot for MT4</strong>,
                      BlackDiamond Special EA offers a professional solution
                      backed by intelligent automation, disciplined risk
                      management, and transparent performance.
                    </p>
                    <br />
                    <p>
                      Take the next step toward automated Forex trading with
                      confidence using <strong>BlackDiamond Special EA</strong>.
                    </p>
                  </div>
                </div>
                <div className="w-full xl:w-[60%]">
                  <Image
                    src={articleImage08}
                    alt="Start Automated Trading with Confidence"
                    className="w-full rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
