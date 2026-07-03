export default function ForexHeatMap() {
  return (
    <section className="w-full">
      <div className="container pt-12 md:pt-15 lg:pt-30">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">
            Live Currency Heat Map
          </h2>
        </div>

        <iframe
          className="w-full min-h-screen border-8 border-primary rounded-xl mt-8 md:mt-10 lg:mt-15"
          src="https://widgets.myfxbook.com/widgets/heat-map.html?symbols=8,47,9,10,1234,11,103,12,46,1245,6,13,14,15,17,18,7,2114,19,20,21,22,1246,23,1,1233,107,24,25,4,2872,137,48,1236,1247,2012,2,1863,3240,26,49,27,28,2090,131,5,29,5779,31,34,3,36,37,38,2076,40,41,42,43,45,3005,3473,50,2115,2603,2119,1815,2521,51,5435,5079,1893&type=0"
        ></iframe>

        <div />
      </div>
    </section>
  );
}
