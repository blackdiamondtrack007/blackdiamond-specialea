export default function LiveForexChart() {
  return (
    <section className="w-full">
      <div className="container pt-12 md:pt-15 lg:pt-30">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">
            Forex exchange rates
          </h2>
        </div>
        <iframe
          className="w-full min-h-screen border-8 border-primary rounded-xl mt-8 md:mt-10 lg:mt-15"
          src="https://widget.myfxbook.com/widget/market-quotes.html?symbols=AUDCAD,AUDCHF,AUDJPY,AUDNZD,AUDSGD,AUDUSD,CADCHF,CADJPY,CHFJPY,CHFSGD,EURAUD,EURCAD,EURCHF,EURCZK,EURGBP,EURHUF,EURJPY,EURMXN,EURNOK,EURNZD,EURPLN,EURSEK,EURSGD,EURTRY,EURUSD,EURZAR,GBPAUD,GBPCAD,GBPCHF,GBPJPY,GBPMXN,GBPNOK,GBPNZD,GBPSEK,GBPSGD,GBPTRY,GBPUSD,NOKJPY,NOKSEK,NZDCAD,NZDCHF,NZDJPY,NZDUSD,SEKJPY,SGDJPY,USDCAD,USDCHF,USDCNH,USDCZK,USDHUF,USDJPY,USDMXN,USDNOK,USDPLN,USDRUB,USDSEK,USDSGD,USDTHB,USDTRY,USDZAR,XAGAUD,XAGEUR,XAGUSD,XAUAUD,XAUCHF,XAUEUR,XAUGBP,XAUJPY,XAUUSD,XPDUSD,XPTUSD,ZARJPY"
        ></iframe>
      </div>
    </section>
  );
}
