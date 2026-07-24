"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import PaymentMethods from "./PaymentMethods";

export default function Pricing() {
  // Separate states for tracking the "expanded" view of each individual card
  const [basicExpanded, setBasicExpanded] = useState(false);
  const [proExpanded, setProExpanded] = useState(false);
  const [unlimitedExpanded, setUnlimitedExpanded] = useState(false);

  // Lists defined as arrays for selective slicing
  const basicFeatures = [
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
  ];

  const proFeatures = [
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
  ];

  const unlimitedFeatures = [
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
  ];

  return (
    <section className="w-full">
      <div className="container space-y-10 py-10 md:py-12 lg:py-15 xl:py-20 -mb-16 md:-mb-18 lg:-mb-22 xl:-mb-26 -mt-5 xl:-mt-10">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">
            Get Our Special System Now
          </h2>
          {/* <p className="text-body text-center mt-3 lg:mt-5">
            Choose Your Special System Plan
          </p> */}
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3 mx-auto max-w-6xl px-6 items-start">
          {/* CARD 1: BASIC */}
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="font-medium">BlackDiamond_Basic</CardTitle>
              <span className="my-3 block text-2xl font-semibold space-x-2">
                <span>$299</span>{" "}
                <span className="text-body line-through">$450</span>
              </span>
            </CardHeader>

            <CardContent className="space-y-4 grow">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {(basicExpanded
                  ? basicFeatures
                  : basicFeatures.slice(0, 4)
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="size-3 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {basicFeatures.length > 4 && (
                <button
                  onClick={() => setBasicExpanded(!basicExpanded)}
                  className="text-xs font-semibold text-primary flex items-center gap-1 mt-2 hover:underline cursor-pointer"
                >
                  {basicExpanded ? (
                    <>
                      Hide details <ChevronUp className="size-3" />
                    </>
                  ) : (
                    <>
                      View all features ({basicFeatures.length}){" "}
                      <ChevronDown className="size-3" />
                    </>
                  )}
                </button>
              )}
            </CardContent>

            <CardFooter className="mt-auto pt-4">
              <Link href="/pricing" className="w-full">
                <Button className="w-full bg-primary text-white rounded py-2 px-4 cursor-pointer">
                  Buy Now
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* CARD 2: PRO */}
          <div className="relative h-full flex flex-col">
            <span className="bg-linear-to-br absolute inset-x-0 -top-5 mx-auto flex h-6 w-fit items-center rounded-full from-red-400 to-amber-300 px-5 py-5 text-xl font-semibold text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5 z-10">
              Popular
            </span>

            <Card className="flex flex-col h-full grow">
              <CardHeader>
                <CardTitle className="font-medium">BlackDiamond_Pro</CardTitle>
                <span className="my-3 block text-2xl font-semibold space-x-2">
                  <span>$699</span>{" "}
                  <span className="text-body line-through">$850</span>
                </span>
              </CardHeader>

              <CardContent className="space-y-4 grow">
                <hr className="border-dashed" />
                <ul className="list-outside space-y-3 text-sm">
                  {(proExpanded ? proFeatures : proFeatures.slice(0, 4)).map(
                    (item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="size-3 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                {proFeatures.length > 4 && (
                  <button
                    onClick={() => setProExpanded(!proExpanded)}
                    className="text-xs font-semibold text-primary flex items-center gap-1 mt-2 hover:underline cursor-pointer"
                  >
                    {proExpanded ? (
                      <>
                        Hide details <ChevronUp className="size-3" />
                      </>
                    ) : (
                      <>
                        View all features ({proFeatures.length}){" "}
                        <ChevronDown className="size-3" />
                      </>
                    )}
                  </button>
                )}
              </CardContent>

              <CardFooter className="mt-auto pt-4">
                <Link href="/pricing" className="w-full">
                  <Button className="w-full bg-primary text-white rounded py-2 px-4 cursor-pointer">
                    Buy Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* CARD 3: UNLIMITED */}
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="font-medium">
                BlackDiamond_Unlimited
              </CardTitle>
              <span className="my-3 block text-2xl font-semibold space-x-2">
                <span>$2499</span>{" "}
                <span className="text-body line-through">$2700</span>
              </span>
            </CardHeader>

            <CardContent className="space-y-4 grow">
              <hr className="border-dashed" />
              <ul className="list-outside space-y-3 text-sm">
                {(unlimitedExpanded
                  ? unlimitedFeatures
                  : unlimitedFeatures.slice(0, 4)
                ).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="size-3 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {unlimitedFeatures.length > 4 && (
                <button
                  onClick={() => setUnlimitedExpanded(!unlimitedExpanded)}
                  className="text-xs font-semibold text-primary flex items-center gap-1 mt-2 hover:underline cursor-pointer"
                >
                  {unlimitedExpanded ? (
                    <>
                      Hide details <ChevronUp className="size-3" />
                    </>
                  ) : (
                    <>
                      View all features ({unlimitedFeatures.length}){" "}
                      <ChevronDown className="size-3" />
                    </>
                  )}
                </button>
              )}
            </CardContent>

            <CardFooter className="mt-auto pt-4">
              <Link href="/pricing" className="w-full">
                <Button className="w-full bg-primary text-white rounded py-2 px-4 cursor-pointer">
                  Buy Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <PaymentMethods />
      </div>
    </section>
  );
}
