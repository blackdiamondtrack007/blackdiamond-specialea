import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-16 md:py-32 mt-[400px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>Choose Your Special System Plan</p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">BlackDiamond_Basic</CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                $300 / mo
              </span>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Unlimited Licence (For 1 User)",
                  "5 Special Indicator",
                  "inside code more powerful",
                  "Specially use for Live Account",
                  "Fixed & Percentage Both Trading system",
                  "Demo Licence Activation",
                  "1 special set file with low-risk settings",
                  "Special Set File for day Trader",
                  "Special set file for Live Account",
                  "70% to 80% trading ACCURACY",
                  "Max Profit return limited 30% to 50%",
                  "Max DD 15 to 20%",
                  "Free Update for 1 years",
                  "EndLess lifetime support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="relative">
            <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
              Popular
            </span>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-medium">BlackDiamond_Pro</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  $700 / mo
                </span>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {[
                    "Unlimited Licence (For 3 User)",
                    "20 Special Indicator",
                    "inside code more upgraded & Powerful",
                    "SPECIALLY for Live & Prop/FTMO CHALLENGE",
                    "Fixed & Percentage Both Trading system",
                    "Unlimited demo account",
                    "2 special set file with low-risk settings",
                    "Special set file for Day, swing, scalping, Long Trader",
                    "Special Set File for LONG & SHORT Trade",
                    "Special secnce for activated trade",
                    "85% to 95% trading ACCURACY",
                    "Market tracker enable fully",
                    "Every time change open trading POSITION",
                    "Max profit return 80% to 120%",
                    "Max DD 3 to 4% for prop/FTMO CHALLENGE",
                    "Max dd 7 to 12% for live account",
                    "Lifetime free upgrade",
                    "EndLess lifetime Support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-10">
                <Button asChild className="w-full">
                  <Link href="">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">
                BlackDiamond_Unlimited
              </CardTitle>
              <span className="my-3 block text-2xl font-semibold">
                $2500 / mo
              </span>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Unlimited Licence (For Unlimited USER)",
                  "40 Special Indicator",
                  "inside code more upgraded, Powerful more ELEGANT",
                  "SPECIALLY for any types of Live & Prop/FTMO CHALLENGE or other account",
                  "Fixed & Percentage Both Trading system",
                  "unlimited demo account",
                  "7 special set file with low-risk settings",
                  "Special set file for Day, swing, scalping, Long Trader",
                  "Special Set File for LONG & SHORT Trade",
                  "special secnce for activated trade",
                  "95% trading ACCURACY mostly",
                  "Market tracker enable fully",
                  "every time change open trading POSITION",
                  "Max profit return 80% to 120%",
                  "Max DD 3 to 4% for prop/FTMO CHALLENGE",
                  "Max dd 7 to 12% for live account",
                  "lifetime free upgrade",
                  "EndLess lifetime Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link href="">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
