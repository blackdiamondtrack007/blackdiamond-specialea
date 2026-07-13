import { Button } from "../ui/button";
import Link from "next/link";

export default function AnimatedBuyNow() {
  return (
    <section className="w-full">
      <div className="container space-y-10 my-0 py-10 md:py-12 lg:py-15 xl:py-20">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">Get a Access</h2>
          {/* <p className="text-body text-center mt-3 lg:mt-5">
                Description of the section
              </p> */}
        </div>

        <div className="max-w-6xl mx-auto mt-8 md:mt-10 lg:mt-15 flex flex-col items-center justify-center">
          <div className="relative inline-block my-6">
            <div className="absolute inset-0 rounded-full animate-shadow-pulse pointer-events-none -z-10" />

            <Link href={"/pricing"}>
              <Button className="relative p-10 w-full text-white text-xl md:text-2xl font-extrabold tracking-wide rounded-full bg-linear-to-b from-primary via-primary to-primary border-4 border-primary shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)] transition-transform duration-200  active:scale-98 cursor-pointer">
                Get An Access To BlackDiamond SpecialEA Solution
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
