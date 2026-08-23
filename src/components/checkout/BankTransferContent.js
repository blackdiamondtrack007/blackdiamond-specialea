"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Building2,
  Wallet,
  CreditCard,
  Coins,
  BadgeDollarSign,
  ChevronDown,
} from "lucide-react";
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

export default function BankTransferContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const product = searchParams.get("product") || "—";
  const price = searchParams.get("price") || "0";
  const orderId = searchParams.get("orderId") || "—";

  const currentParams = `product=${encodeURIComponent(product)}&price=${price}&orderId=${orderId}`;
  const buildPath = (gateway) =>
    `/checkout/payment/${gateway}?${currentParams}`;

  const alternativeMethods = [
    {
      value: "card",
      label: "Visa / Mastercard",
      path: buildPath("card"),
      icon: CreditCard,
      color: "text-emerald-600",
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
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-emerald-500/10 border-emerald-500/30">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight text-emerald-600 dark:text-emerald-400">
                  Bank
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  Wire Transfer
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text-primary">
                {isUnlimitedPlan ? "VIP Order Activation" : "Transfer Details"}
              </h2>
              <p className="text-body text-muted-foreground text-sm">
                {isUnlimitedPlan
                  ? "Secure your unlimited license directly with our elite team"
                  : "Pay securely via bank transfer with our admin support"}
              </p>
            </div>
          </div>

          {/* DYNAMIC DESIGN BOX */}
          {isUnlimitedPlan ? (
            <UnlimitedPlan product={product} price={price} orderId={orderId} />
          ) : (
            /* --- NEW CARD-STYLE DESIGN FOR REGULAR BANK TRANSFERS --- */
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-gradient-to-b from-emerald-500/5 to-transparent p-6 md:p-8 shadow-xl space-y-6">
              <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <Sparkles className="size-3" /> Bank Transfer
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Selected Plan
                </span>
                <h3 className="text-2xl font-black text-foreground mt-1 tracking-tight">
                  {product.replace(/_/g, " ")}
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-extrabold text-foreground">
                    ${parseFloat(price).toFixed(2)}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    Order Payment
                  </span>
                </div>
              </div>

              {/* Order ID Box */}
              <div className="bg-card border border-border/60 rounded-xl p-4 text-sm text-muted-foreground space-y-1 font-mono">
                <div className="flex justify-between">
                  <span>Order ID:</span>
                  <span className="text-foreground font-medium">{orderId}</span>
                </div>
              </div>

              {/* Info Callout */}
              <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20 text-sm leading-relaxed text-foreground">
                💡{" "}
                <strong className="text-emerald-600">
                  Complete Your Payment:
                </strong>{" "}
                Please pay with bank transfer via our admin. Click below to
                contact us through <strong>Telegram</strong> to receive the
                account details and complete your order.
              </div>

              {/* Main Action CTA */}
              <Button
                asChild
                className="w-full py-6 bg-[#24A1DE] hover:bg-[#208ec4] text-white font-bold text-base rounded-xl shadow-lg shadow-blue-500/10 group transition-all"
              >
                <Link
                  href="https://t.me/bdeaspecial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 size-5 fill-white" />
                  Contact Admin via Telegram
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Alternative Payment Gateway Selector */}
              <div className="pt-2">
                <div className="flex items-center justify-between gap-4 p-3 bg-card border rounded-xl">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Change Payment Method:
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-between text-xs h-9"
                      >
                        Bank Transfer
                        <ChevronDown className="size-3.5 opacity-50 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="min-w-60 bg-primary text-white"
                      align="end"
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>
                          Alternative Gateways
                        </DropdownMenuLabel>
                        <DropdownMenuRadioGroup
                          value="bank"
                          onValueChange={handleMethodChange}
                        >
                          {alternativeMethods.map((method) => {
                            const IconComponent = method.icon;
                            return (
                              <DropdownMenuRadioItem
                                key={method.value}
                                value={method.value}
                                className="flex items-center gap-2 cursor-pointer text-xs"
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
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${SUPPORT_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline underline-offset-4 break-all"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Instagram:</span>
                <a
                  href="https://www.instagram.com/blackdiamondea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline underline-offset-4"
                >
                  Instagram
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Facebook:</span>
                <a
                  href="https://www.facebook.com/blackdiamondspecialea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline underline-offset-4"
                >
                  Facebook
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Telegram:</span>
                <a
                  href="https://t.me/bdeaspecial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline underline-offset-4"
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
