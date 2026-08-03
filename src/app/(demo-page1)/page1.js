export default function page() {
  return (
    <section className="w-full">
      <div className="container pt-12 md:pt-15 lg:pt-30 max-w-4xl">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">Market Hours Widget</h2>
        </div>
        <iframe
          src="https://widget.myfxbook.com/widget/market-hours.html"
          className="w-full h-screen border-8 border-primary rounded-xl mt-8 md:mt-10 lg:mt-15"
        ></iframe>
      </div>
    </section>
  );
}
