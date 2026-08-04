// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import {
//   Copy,
//   CheckCircle2,
//   ChevronDown,
//   Wallet,
//   Building2,
//   CreditCard,
//   Coins,
//   BadgeDollarSign,
// } from "lucide-react";
// import { useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import UnlimitedPlan from "./UnlimitedPlan";

// const CRYPTO_WALLET = "13xXv8Z24bB6V6V6S6d8fG9gH1jK2lM3nN"; // ← replace with your multi-crypto or BTC deposit address

// export default function CryptoPaymentContent() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const product = searchParams.get("product") || "—";
//   const price = searchParams.get("price") || "0";
//   const orderId = searchParams.get("orderId") || "—";

//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(CRYPTO_WALLET);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const currentParams = `product=${encodeURIComponent(product)}&price=${price}&orderId=${orderId}`;

//   // Helper builder to streamline alternative navigation links
//   const buildPath = (gateway) =>
//     `/checkout/payment/${gateway}?${currentParams}`;

//   // Complete settings array mapping every gateway target out beautifully
//   const alternativeMethods = [
//     {
//       value: "card",
//       label: "Visa / Mastercard",
//       path: buildPath("card"),
//       icon: CreditCard,
//       color: "text-[#f7931a]",
//     },
//     {
//       value: "paypal",
//       label: "PayPal",
//       path: buildPath("paypal"),
//       icon: Wallet,
//       color: "text-[#003087]",
//     },
//     {
//       value: "stripe",
//       label: "Stripe",
//       path: buildPath("stripe"),
//       icon: CreditCard,
//       color: "text-[#635bff]",
//     },
//     {
//       value: "crypto",
//       label: "Bitcoin / Cryptocurrency",
//       path: buildPath("crypto"),
//       icon: Coins,
//       color: "text-[#f7931a]",
//     },
//     {
//       value: "bank",
//       label: "Bank Transfer",
//       path: buildPath("bank"),
//       icon: Building2,
//       color: "text-emerald-600",
//     },
//     {
//       value: "skrill",
//       label: "Skrill",
//       path: buildPath("skrill"),
//       icon: CreditCard,
//       color: "text-[#862165]",
//     },
//     {
//       value: "perfect",
//       label: "Perfect Money",
//       path: buildPath("perfect"),
//       icon: BadgeDollarSign,
//       color: "text-[#ff0000]",
//     },
//   ];

//   const handleMethodChange = (selectedValue) => {
//     const target = alternativeMethods.find((m) => m.value === selectedValue);
//     if (target) {
//       router.push(target.path);
//     }
//   };

//   // Flag to check if this is the high-tier Unlimited plan
//   const isUnlimitedPlan = product === "BlackDiamond_Unlimited";

//   return (
//     <section className="w-full min-h-screen">
//       <div className="container pt-12 md:pt-16 lg:pt-24 pb-20">
//         <div className="mx-auto max-w-2xl px-4">
//           {/* Header */}
//           <div className="flex items-center gap-4 mb-10">
//             <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#f7931a]/10 border-[#f7931a]/30">
//               <div className="flex flex-col leading-none">
//                 <span className="text-2xl font-black tracking-tight text-[#f7931a]">
//                   Crypto
//                 </span>
//                 <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
//                   BTC / USDT / ETH
//                 </span>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold text-text-primary">
//                 {isUnlimitedPlan
//                   ? "VIP Order Activation"
//                   : "Cryptocurrency Wallet Address"}
//               </h2>
//               <p className="text-body text-muted-foreground text-sm">
//                 {isUnlimitedPlan
//                   ? "Secure your unlimited license directly with our elite team"
//                   : "Send the exact equivalent amount to the blockchain layout below"}
//               </p>
//             </div>
//           </div>

//           {/* DYNAMIC DESIGN BOX */}
//           {isUnlimitedPlan ? (
//             /* --- DESIGN FOR UNLIMITED PLAN --- */
//             <UnlimitedPlan product={product} price={price} orderId={orderId} />
//           ) : (
//             /* --- ORIGINAL INFO TABLE FOR REGULAR PLANS --- */
//             <div className="rounded-xl overflow-hidden border">
//               <div className="grid grid-cols-2">
//                 <div className="bg-[#f7931a] px-5 py-4">
//                   <span className="text-white font-semibold text-sm">Plan</span>
//                 </div>
//                 <div className="px-5 py-4 bg-card border-b">
//                   <span className="text-body font-medium break-words">
//                     {product}
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2">
//                 <div className="bg-[#f7931a] px-5 py-4 border-t border-[#f7931a]/50">
//                   <span className="text-white font-semibold text-sm">
//                     Amount
//                   </span>
//                 </div>
//                 <div className="px-5 py-4 bg-card border-b">
//                   <Badge
//                     variant="secondary"
//                     className="bg-primary text-white text-base font-bold px-3 py-1"
//                   >
//                     ${parseFloat(price).toFixed(2)}
//                   </Badge>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2">
//                 <div className="bg-[#f7931a] px-5 py-4 border-t border-[#f7931a]/50">
//                   <span className="text-white font-semibold text-sm">
//                     Order ID
//                   </span>
//                 </div>
//                 <div className="px-5 py-4 bg-card border-b">
//                   <span className="text-body text-muted-foreground font-mono text-sm">
//                     {orderId}
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2">
//                 <div className="bg-[#f7931a] px-5 py-4 border-t border-[#f7931a]/50">
//                   <span className="text-white font-semibold text-sm">
//                     BTC Address (Network: BTC)
//                   </span>
//                 </div>
//                 <div className="px-5 py-4 bg-card border-b flex items-center justify-between gap-2">
//                   <span className="text-body text-xs font-mono font-medium break-all">
//                     {CRYPTO_WALLET}
//                   </span>
//                   <button
//                     onClick={handleCopy}
//                     className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
//                     title="Copy wallet address"
//                   >
//                     {copied ? (
//                       <CheckCircle2 className="size-4 text-green-500" />
//                     ) : (
//                       <Copy className="size-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Go another method row with dynamic Shadcn Dropdown component */}
//               <div className="grid grid-cols-2">
//                 <div className="bg-black px-5 py-4 border-t border-white/10 flex items-center">
//                   <span className="text-white font-semibold text-sm">
//                     Go Another Payment Method
//                   </span>
//                 </div>
//                 <div className="px-5 py-4 bg-card flex items-center justify-start">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="w-full max-w-[240px] justify-between text-sm"
//                       >
//                         Bitcoin / Cryptocurrency
//                         <ChevronDown className="size-4 opacity-50 ml-2" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent
//                       className="min-w-60 bg-primary text-white"
//                       align="start"
//                     >
//                       <DropdownMenuGroup>
//                         <DropdownMenuLabel>
//                           Alternative Gateways
//                         </DropdownMenuLabel>
//                         <DropdownMenuRadioGroup
//                           value="crypto"
//                           onValueChange={handleMethodChange}
//                         >
//                           {alternativeMethods.map((method) => {
//                             const IconComponent = method.icon;
//                             return (
//                               <DropdownMenuRadioItem
//                                 key={method.value}
//                                 value={method.value}
//                                 className="flex items-center gap-2 cursor-pointer"
//                               >
//                                 <IconComponent
//                                   className={`size-4 ${method.color}`}
//                                 />
//                                 <span>{method.label}</span>
//                               </DropdownMenuRadioItem>
//                             );
//                           })}
//                         </DropdownMenuRadioGroup>
//                       </DropdownMenuGroup>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* After payment notice */}
//           <Separator className="my-8 border-dashed" />
//           <div className="rounded-xl border bg-muted/40 px-6 py-5 space-y-3">
//             <h3 className="font-semibold text-body-large">
//               After Payment — Inbox Us
//             </h3>
//             <p className="text-body text-muted-foreground text-sm">
//               Provide transaction TXID hash via Email, Facebook, Skype or
//               Telegram
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
//               <div className="flex gap-2">
//                 <span className="text-muted-foreground">Email</span>
//                 <a
//                   href="mailto:support@blackdiamondea.info"
//                   className="text-[#f7931a] hover:underline underline-offset-4 break-all"
//                 >
//                   support@blackdiamondea.info
//                 </a>
//               </div>
//               <div className="flex gap-2">
//                 <span className="text-muted-foreground">Skype</span>
//                 <a
//                   href="skype:Blackdiamond_special"
//                   className="text-[#f7931a] hover:underline underline-offset-4"
//                 >
//                   Blackdiamond_special
//                 </a>
//               </div>
//               <div className="flex gap-2">
//                 <span className="text-muted-foreground">FB</span>
//                 <a
//                   href="#"
//                   className="text-[#f7931a] hover:underline underline-offset-4"
//                 >
//                   FaceBook
//                 </a>
//               </div>
//               <div className="flex gap-2">
//                 <span className="text-muted-foreground">Telegram</span>
//                 <a
//                   href="#"
//                   className="text-[#f7931a] hover:underline underline-offset-4"
//                 >
//                   Telegram
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <Button asChild variant="ghost" size="sm">
//               <Link href="/checkout">← Back to Checkout</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Copy,
  CheckCircle2,
  ChevronDown,
  Wallet,
  Building2,
  CreditCard,
  Coins,
  BadgeDollarSign,
  QrCode,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UnlimitedPlan from "./UnlimitedPlan";

const SUPPORT_EMAIL = "support@blackdiamondea.info";

// Multi-crypto wallet configuration map
const CRYPTO_NETWORKS = {
  btc: {
    label: "Bitcoin (BTC Network)",
    currency: "BTC",
    networkName: "Bitcoin Native",
    walletAddress: "3NxkAR8TP7ncKqRtNM5QscK1KjSDgLNZbD",
  },
  usdt_trc20: {
    label: "USDT (TRC-20 Network)",
    currency: "USDT",
    networkName: "TRON (TRC-20)",
    walletAddress: "TMTf1rcuKLSf3p6cVq5DNEGKkPETQTwpzL",
  },
};

const CopyBtn = ({ value, field }) => {
  const [copiedField, setCopiedField] = useState(null);
  const handleCopy = (value, field) => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };
  return (
    <button
      onClick={() => handleCopy(value, field)}
      className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
      title="Copy"
    >
      {copiedField === field ? (
        <CheckCircle2 className="size-4 text-green-500" />
      ) : (
        <Copy className="size-4" />
      )}
    </button>
  );
};

export default function CryptoPaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const product = searchParams.get("product") || "—";
  const price = searchParams.get("price") || "0";
  const orderId = searchParams.get("orderId") || "—";

  // Default crypto network selection state
  const [activeNetworkKey, setActiveNetworkKey] = useState("btc");

  const activeNetwork = CRYPTO_NETWORKS[activeNetworkKey];

  const currentParams = `product=${encodeURIComponent(product)}&price=${price}&orderId=${orderId}`;
  const buildPath = (gateway) =>
    `/checkout/payment/${gateway}?${currentParams}`;

  const alternativeMethods = [
    {
      value: "card",
      label: "Visa / Mastercard",
      path: buildPath("card"),
      icon: CreditCard,
      color: "text-[#f7931a]",
    },
    {
      value: "paypal",
      label: "PayPal",
      path: buildPath("paypal"),
      icon: Wallet,
      color: "text-[#003087]",
    },
    {
      value: "stripe",
      label: "Stripe",
      path: buildPath("stripe"),
      icon: CreditCard,
      color: "text-[#635bff]",
    },
    {
      value: "crypto",
      label: "Bitcoin / Cryptocurrency",
      path: buildPath("crypto"),
      icon: Coins,
      color: "text-[#f7931a]",
    },
    {
      value: "bank",
      label: "Bank Transfer",
      path: buildPath("bank"),
      icon: Building2,
      color: "text-emerald-600",
    },
    {
      value: "skrill",
      label: "Skrill",
      path: buildPath("skrill"),
      icon: CreditCard,
      color: "text-[#862165]",
    },
    {
      value: "perfect",
      label: "Perfect Money",
      path: buildPath("perfect"),
      icon: BadgeDollarSign,
      color: "text-[#ff0000]",
    },
  ];

  const handleMethodChange = (selectedValue) => {
    const target = alternativeMethods.find((m) => m.value === selectedValue);
    if (target) {
      router.push(target.path);
    }
  };

  const isUnlimitedPlan = product === "BlackDiamond_Unlimited";

  return (
    <section className="w-full min-h-screen">
      <div className="container pt-12 md:pt-16 lg:pt-24 pb-20">
        <div className="mx-auto max-w-2xl px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#f7931a]/10 border-[#f7931a]/30">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight text-[#f7931a]">
                  Crypto
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  BTC / USDT TRC20
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary">
                {isUnlimitedPlan
                  ? "VIP Order Activation"
                  : "Cryptocurrency Payment Details"}
              </h2>
              <p className="text-body text-muted-foreground text-sm">
                {isUnlimitedPlan
                  ? "Secure your unlimited license directly with our elite team"
                  : "Send the exact equivalent amount using your preferred chain"}
              </p>
            </div>
          </div>

          {/* DYNAMIC DESIGN BOX */}
          {isUnlimitedPlan ? (
            <UnlimitedPlan product={product} price={price} orderId={orderId} />
          ) : (
            /* --- INFO TABLE FOR REGULAR PLANS WITH NETWORK SWITCHER --- */
            <div className="rounded-xl overflow-hidden border shadow-sm">
              {/* Product Plan Name */}
              <div className="grid grid-cols-2">
                <div className="bg-[#f7931a] px-5 py-4">
                  <span className="text-white font-semibold text-sm">Plan</span>
                </div>
                <div className="px-5 py-4 bg-card border-b flex items-center justify-between">
                  <span className="text-body text-sm font-medium break-all">
                    {product}
                  </span>
                </div>
              </div>

              {/* Product Price Tag */}
              <div className="grid grid-cols-2">
                <div className="bg-[#f7931a] px-5 py-4 border-t border-amber-600/40">
                  <span className="text-white font-semibold text-sm">
                    Amount
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-primary text-white text-base font-bold px-3 py-1"
                  >
                    ${parseFloat(price).toFixed(2)}
                  </Badge>
                </div>
              </div>

              {/* Order Tracking Reference */}
              <div className="grid grid-cols-2">
                <div className="bg-[#f7931a] px-5 py-4 border-t border-amber-600/40">
                  <span className="text-white font-semibold text-sm">
                    Order ID
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b flex items-center justify-between gap-2">
                  <span className="text-body text-sm font-mono text-muted-foreground break-all">
                    {orderId}
                  </span>
                  <CopyBtn value={orderId} field="orderId" />
                </div>
              </div>

              {/* DYNAMIC NETWORK SWITCHER DROPDOWN */}
              <div className="grid grid-cols-2 bg-muted/40 border-b border-t">
                <div className="bg-amber-600 px-5 py-4 flex items-center">
                  <span className="text-white font-bold text-sm flex items-center gap-1.5">
                    <QrCode className="size-4 opacity-90" /> Select Network
                  </span>
                </div>
                <div className="px-5 py-3 bg-card flex items-center">
                  <div className="relative w-full">
                    <select
                      value={activeNetworkKey}
                      onChange={(e) => setActiveNetworkKey(e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-1 focus:ring-[#f7931a] cursor-pointer appearance-none pr-8"
                    >
                      {Object.entries(CRYPTO_NETWORKS).map(([key, config]) => (
                        <option key={key} value={key}>
                          {config.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 pointer-events-none text-muted-foreground opacity-60" />
                  </div>
                </div>
              </div>

              {/* Selected Network Type */}
              <div className="grid grid-cols-2">
                <div className="bg-[#f7931a] px-5 py-4 border-t border-amber-600/40">
                  <span className="text-white font-semibold text-sm">
                    Blockchain Network
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b flex items-center justify-between">
                  <span className="text-body text-sm font-semibold text-[#f7931a] break-all">
                    {activeNetwork.networkName}
                  </span>
                </div>
              </div>

              {/* Deposit Wallet Address */}
              <div className="grid grid-cols-2">
                <div className="bg-[#f7931a] px-5 py-4 border-t border-amber-600/40">
                  <span className="text-white font-semibold text-sm">
                    {activeNetwork.currency} Deposit Address
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b flex items-center justify-between gap-2">
                  <span className="text-body text-xs font-mono font-bold break-all">
                    {activeNetwork.walletAddress}
                  </span>
                  <CopyBtn
                    value={activeNetwork.walletAddress}
                    field="walletAddress"
                  />
                </div>
              </div>

              {/* Alternative Gateways Dropdown */}
              <div className="grid grid-cols-2">
                <div className="bg-black px-5 py-4 border-t border-white/10 flex items-center">
                  <span className="text-white font-semibold text-sm">
                    Go Another Payment Method
                  </span>
                </div>
                <div className="px-5 py-4 bg-card flex items-center justify-start">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full max-w-[240px] justify-between text-sm"
                      >
                        Bitcoin / Cryptocurrency
                        <ChevronDown className="size-4 opacity-50 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="min-w-60 bg-primary text-white"
                      align="start"
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>
                          Alternative Gateways
                        </DropdownMenuLabel>
                        <DropdownMenuRadioGroup
                          value="crypto"
                          onValueChange={handleMethodChange}
                        >
                          {alternativeMethods.map((method) => {
                            const IconComponent = method.icon;
                            return (
                              <DropdownMenuRadioItem
                                key={method.value}
                                value={method.value}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <IconComponent
                                  className={`size-4 ${method.color}`}
                                />
                                <span>{method.label}</span>
                              </DropdownMenuRadioItem>
                            );
                          })}
                        </DropdownMenuRadioGroup>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          )}

          {/* After payment notice */}
          <Separator className="my-8 border-dashed" />
          <div className="rounded-xl border bg-muted/40 px-6 py-5 space-y-3">
            <h3 className="font-semibold text-body-large">
              After Payment — Inbox Us
            </h3>
            <p className="text-body text-muted-foreground text-sm">
              Email, Facebook, Instagram or Telegram
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <div className="flex gap-2">
                <span className="text-muted-foreground">Email:</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=support@blackdiamondea.info"
                  target="_blank"
                  className="text-[#f7931a] hover:underline underline-offset-4 break-all"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Instagram:</span>
                <a
                  href="https://www.instagram.com/blackdiamondea/"
                  target="_blank"
                  className="text-[#f7931a] hover:underline underline-offset-4"
                >
                  Instagram
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Facebook:</span>
                <a
                  href="https://www.facebook.com/blackdiamondspecialea"
                  target="_blank"
                  className="text-[#f7931a] hover:underline underline-offset-4"
                >
                  Facebook
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Telegram:</span>
                <a
                  href="https://t.me/bdeaspecial"
                  target="_blank"
                  className="text-[#f7931a] hover:underline underline-offset-4"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button asChild variant="ghost" size="sm">
              <Link href="/checkout">← Back to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
