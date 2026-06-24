// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Check } from "lucide-react";

// export default function Pricing() {
//   return (
//     <section className="w-full">
//       <div className="container pt-12 md:pt-15 lg:pt-30">
//         <div className="space-y-4 md:space-y-6 xl:space-y-8">
//           <h2 className="text-text-primary text-center">
//             Choose Your Special System Plan
//           </h2>
//           <p className="text-body text-center mt-3 lg:mt-5">
//             Description of the section
//           </p>
//         </div>
//         <div className="mx-auto max-w-6xl px-6">
//           <div className="mt-8 grid gap-10 lg:gap-6 md:mt-20 lg:grid-cols-3">
//             <Card className="py-10">
//               <CardHeader>
//                 <CardTitle className="font-medium text-body-large">
//                   BlackDiamond_Basic
//                 </CardTitle>

//                 <span className="my-3 block text-2xl font-semibold">$300</span>

//                 <Button asChild variant="outline" className="mt-4 w-full">
//                   <Link href="">Get Started</Link>
//                 </Button>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 <hr className="border-dashed" />

//                 <ul className="list-outside space-y-3 text-body">
//                   {[
//                     "Unlimited Licence (For 1 User)",
//                     "5 Special Indicator",
//                     "Inside code more powerful",
//                     "Specially use for Live Account",
//                     "Fixed & Percentage Both Trading system",
//                     "Demo Licence Activation",
//                     "1 special set file with low-risk settings",
//                     "Special Set File for day Trader",
//                     "Special set file for Live Account",
//                     "70% to 80% trading ACCURACY",
//                     "Max Profit return limited 30% to 50%",
//                     "Max DD 15 to 20%",
//                     "Free Update for 1 years",
//                     "EndLess lifetime support",
//                   ].map((item, index) => (
//                     <li key={index} className="flex gap-2">
//                       <div>
//                         <Check className="size-5 mt-0.75" />
//                       </div>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card className="relative py-10">
//               <p className="bg-linear-to-br/increasing absolute inset-x-0 -top-6 mx-auto flex h-6 w-fit items-center rounded-full from-red-300 to-amber-300 px-5 py-5 text-body-large font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
//                 Popular
//               </p>

//               <CardHeader>
//                 <CardTitle className="font-medium text-body-large">
//                   BlackDiamond_Pro
//                 </CardTitle>

//                 <span className="my-3 block text-2xl font-semibold">$700</span>

//                 <Button asChild className="mt-4 w-full text-white">
//                   <Link href="">Get Started</Link>
//                 </Button>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 <hr className="border-dashed" />

//                 <ul className="list-outside space-y-3 text-body">
//                   {[
//                     "Unlimited Licence (For 3 User)",
//                     "20 Special Indicator",
//                     "Inside code more upgraded & Powerful",
//                     "Specially for Live & Prop/FTMO CHALLENGE",
//                     "Fixed & Percentage Both Trading system",
//                     "Unlimited demo account",
//                     "2 special set file with low-risk settings",
//                     "Special set file for Day, swing, scalping, Long Trader",
//                     "Special Set File for LONG & SHORT Trade",
//                     "Special secnce for activated trade",
//                     "85% to 95% trading ACCURACY",
//                     "Market tracker enable fully",
//                     "Every time change open trading POSITION",
//                     "Max profit return 80% to 120%",
//                     "Max DD 3 to 4% for prop/FTMO CHALLENGE",
//                     "Max dd 7 to 12% for live account",
//                     "Lifetime free upgrade",
//                     "EndLess lifetime Support",
//                   ].map((item, index) => (
//                     <li key={index} className="flex gap-2">
//                       <div>
//                         <Check className="size-5 mt-0.75" />
//                       </div>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card className="flex flex-col py-10">
//               <CardHeader>
//                 <CardTitle className="font-medium text-body-large">
//                   BlackDiamond_Unlimited
//                 </CardTitle>

//                 <span className="my-3 block text-2xl font-semibold">$2500</span>

//                 <Button asChild variant="outline" className="mt-4 w-full">
//                   <Link href="">Get Started</Link>
//                 </Button>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 <hr className="border-dashed" />

//                 <ul className="list-outside space-y-3 text-body">
//                   {[
//                     "Unlimited Licence (For Unlimited USER)",
//                     "40 Special Indicator",
//                     "Inside code more upgraded, Powerful more ELEGANT",
//                     "Specially for any types of Live & Prop/FTMO CHALLENGE or other account",
//                     "Fixed & Percentage Both Trading system",
//                     "unlimited demo account",
//                     "7 special set file with low-risk settings",
//                     "Special set file for Day, swing, scalping, Long Trader",
//                     "Special Set File for LONG & SHORT Trade",
//                     "Special secnce for activated trade",
//                     "95% trading ACCURACY mostly",
//                     "Market tracker enable fully",
//                     "Every time change open trading POSITION",
//                     "Max profit return 80% to 120%",
//                     "Max DD 3 to 4% for prop/FTMO CHALLENGE",
//                     "Max dd 7 to 12% for live account",
//                     "Lifetime free upgrade",
//                     "EndLess lifetime Support",
//                   ].map((item, index) => (
//                     <li key={index} className="flex align-top gap-2">
//                       <div>
//                         <Check className="size-5 mt-0.75" />
//                       </div>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "BlackDiamond_Basic",
    price: 300,
    variant: "outline",
    popular: false,
    features: [
      "Unlimited Licence (For 1 User)",
      "5 Special Indicator",
      "Inside code more powerful",
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
    ],
  },
  {
    name: "BlackDiamond_Pro",
    price: 700,
    variant: "default",
    popular: true,
    features: [
      "Unlimited Licence (For 3 User)",
      "20 Special Indicator",
      "Inside code more upgraded & Powerful",
      "Specially for Live & Prop/FTMO CHALLENGE",
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
    ],
  },
  {
    name: "BlackDiamond_Unlimited",
    price: 2500,
    variant: "outline",
    popular: false,
    features: [
      "Unlimited Licence (For Unlimited USER)",
      "40 Special Indicator",
      "Inside code more upgraded, Powerful more ELEGANT",
      "Specially for any types of Live & Prop/FTMO CHALLENGE or other account",
      "Fixed & Percentage Both Trading system",
      "unlimited demo account",
      "7 special set file with low-risk settings",
      "Special set file for Day, swing, scalping, Long Trader",
      "Special Set File for LONG & SHORT Trade",
      "Special secnce for activated trade",
      "95% trading ACCURACY mostly",
      "Market tracker enable fully",
      "Every time change open trading POSITION",
      "Max profit return 80% to 120%",
      "Max DD 3 to 4% for prop/FTMO CHALLENGE",
      "Max dd 7 to 12% for live account",
      "Lifetime free upgrade",
      "EndLess lifetime Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="w-full">
      <div className="container pt-12 md:pt-15 lg:pt-30">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-text-primary text-center">
            Choose Your Special System Plan
          </h2>
          <p className="text-body text-center mt-3 lg:mt-5">
            Description of the section
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-8 grid gap-10 lg:gap-6 md:mt-20 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`py-10 ${plan.popular ? "relative" : ""}`}
              >
                {plan.popular && (
                  <p className="bg-linear-to-br/increasing absolute inset-x-0 -top-6 mx-auto flex h-6 w-fit items-center rounded-full from-red-300 to-amber-300 px-5 py-5 text-body-large font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                    Popular
                  </p>
                )}

                <CardHeader>
                  <CardTitle className="font-medium text-body-large">
                    {plan.name}
                  </CardTitle>

                  <span className="my-3 block text-2xl font-semibold">
                    ${plan.price}
                  </span>

                  <Button
                    asChild
                    variant={plan.variant}
                    className={`mt-4 w-full ${plan.popular ? "text-white" : ""}`}
                  >
                    <Link
                      href={`/checkout?product=${encodeURIComponent(plan.name)}&price=${plan.price}`}
                    >
                      Get Started
                    </Link>
                  </Button>
                </CardHeader>

                <CardContent className="space-y-4">
                  <hr className="border-dashed" />

                  <ul className="list-outside space-y-3 text-body">
                    {plan.features.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <div>
                          <Check className="size-5 mt-0.75" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
