"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Copy,
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  Wallet,
  Building2,
  CreditCard,
  Coins,
  BadgeDollarSign,
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

const SKRILL_EMAIL = "support@blackdiamondea.info"; // ← replace with your Skrill email
const SUPPORT_EMAIL = "support@blackdiamondea.info";

export default function SkrillPaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const product = searchParams.get("product") || "—";
  const price = searchParams.get("price") || "0";
  const orderId = searchParams.get("orderId") || "—";

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SKRILL_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentParams = `product=${encodeURIComponent(product)}&price=${price}&orderId=${orderId}`;

  // Helper builder to streamline alternative navigation links
  const buildPath = (gateway) =>
    `/checkout/payment/${gateway}?${currentParams}`;

  // Complete settings array mapping every gateway target out beautifully
  const alternativeMethods = [
    {
      value: "card",
      label: "Visa / Mastercard",
      path: buildPath("card"),
      icon: CreditCard,
      color: "text-[#862165]",
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

  // Flag to check if this is the high-tier Unlimited plan
  const isUnlimitedPlan = product === "BlackDiamond_Unlimited";

  return (
    <section className="w-full min-h-screen">
      <div className="container pt-12 md:pt-16 lg:pt-24 pb-20">
        {/* Header */}
        <div className="mx-auto max-w-2xl px-4">
          <div className="flex items-center gap-4 mb-10">
            {/* Skrill branding strip */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#862165]/10 border-[#862165]/30">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight text-[#862165]">
                  Skrill
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  moneybookers
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary">
                {isUnlimitedPlan
                  ? "VIP Order Activation"
                  : "Account Information"}
              </h2>
              <p className="text-body text-muted-foreground text-sm">
                {isUnlimitedPlan
                  ? "Secure your unlimited license directly with our elite team"
                  : "Send your payment to the details below"}
              </p>
            </div>
          </div>
          {/* DYNAMIC DESIGN BOX */}
          {isUnlimitedPlan ? (
            /* --- DESIGN FOR UNLIMITED PLAN --- */
            <UnlimitedPlan product={product} price={price} orderId={orderId} />
          ) : (
            /* --- ORIGINAL INFO TABLE FOR REGULAR PLANS --- */
            <div className="rounded-xl overflow-hidden border">
              {/* Row: Plan */}
              <div className="grid grid-cols-2 border-b border-pink-600/40">
                <div className="bg-[#862165] px-5 py-4">
                  <span className="text-white font-semibold text-sm">Plan</span>
                </div>
                <div className="px-5 py-4 bg-card border-b">
                  <span className="text-body font-medium break-words">
                    {product}
                  </span>
                </div>
              </div>

              {/* Row: Amount */}
              <div className="grid grid-cols-2 border-b border-pink-600/40">
                <div className="bg-[#862165] px-5 py-4 border-t border-[#862165]/50">
                  <span className="text-white font-semibold text-sm">
                    Amount
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b">
                  <Badge
                    variant="secondary"
                    className="bg-primary text-white text-base font-bold px-3 py-1"
                  >
                    ${parseFloat(price).toFixed(2)}
                  </Badge>
                </div>
              </div>

              {/* Row: Order ID */}
              <div className="grid grid-cols-2 border-b border-pink-600/40">
                <div className="bg-[#862165] px-5 py-4 border-t border-[#862165]/50">
                  <span className="text-white font-semibold text-sm">
                    Order ID
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b">
                  <span className="text-body text-muted-foreground font-mono text-sm">
                    {orderId}
                  </span>
                </div>
              </div>

              {/* Row: Send To */}
              <div className="grid grid-cols-2 border-b border-pink-600/40">
                <div className="bg-[#862165] px-5 py-4 border-t border-[#862165]/50">
                  <span className="text-white font-semibold text-sm">
                    Send Amount To The Address
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b flex items-center justify-between gap-2">
                  <span className="text-body text-sm font-medium break-all">
                    {SKRILL_EMAIL}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy email"
                  >
                    {copied ? (
                      <CheckCircle2 className="size-4 text-green-500" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Row: Don't have Skrill? */}
              <div className="grid grid-cols-2">
                <div className="bg-[#862165] px-5 py-4 border-t border-[#862165]/50">
                  <span className="text-white font-semibold text-sm">
                    Don&apos;t have Skrill Account?
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b">
                  <a
                    href="https://www.skrill.com/en/register/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#862165] hover:underline underline-offset-4 text-sm font-medium flex items-center gap-1"
                  >
                    Open Skrill Here <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>

              {/* Go another method row with dynamic Shadcn Dropdown component */}
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
                        Skrill
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
                          value="skrill"
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
                  className="text-[#862165] hover:underline underline-offset-4 break-all"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Instagram:</span>
                <a
                  href="https://www.instagram.com/blackdiamondea/"
                  target="_blank"
                  className="text-[#862165] hover:underline underline-offset-4"
                >
                  Instagram
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Facebook:</span>
                <a
                  href="https://www.facebook.com/blackdiamondspecialea"
                  target="_blank"
                  className="text-[#862165] hover:underline underline-offset-4"
                >
                  Facebook
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Telegram:</span>
                <a
                  href="https://t.me/bdeaspecial"
                  target="_blank"
                  className="text-[#862165] hover:underline underline-offset-4"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Back to checkout */}
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
