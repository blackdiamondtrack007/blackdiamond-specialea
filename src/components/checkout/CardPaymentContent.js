"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, ArrowLeftRight, CheckCircle2, CreditCard } from "lucide-react";
import { useState } from "react";

const SUPPORT_EMAIL = "support@blackdiamondea.info";

export default function CardPaymentContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "—";
  const price = searchParams.get("price") || "0";
  const orderId = searchParams.get("orderId") || "—";

  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const currentParams = `product=${encodeURIComponent(product)}&price=${price}&orderId=${orderId}`;

  return (
    <section className="w-full min-h-screen">
      <div className="container pt-12 md:pt-16 lg:pt-24 pb-20">
        <div className="mx-auto max-w-2xl px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-blue-600/10 border-blue-600/30">
              <div className="flex items-center gap-1.5 leading-none py-1">
                <span className="text-xl font-black tracking-tight text-blue-600">
                  Visa / MC
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary">
                Card Billing Information
              </h2>
              <p className="text-body text-muted-foreground text-sm">
                Process your card payment manually using the details below
              </p>
            </div>
          </div>

          {/* Info Table */}
          <div className="rounded-xl overflow-hidden border">
            <div className="grid grid-cols-2">
              <div className="bg-blue-600 px-5 py-4">
                <span className="text-white font-semibold text-sm">Plan</span>
              </div>
              <div className="px-5 py-4 bg-card border-b">
                <span className="text-body font-medium wrap-break-words">
                  {product}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-blue-600 px-5 py-4 border-t border-blue-600/50">
                <span className="text-white font-semibold text-sm">Amount</span>
              </div>
              <div className="px-5 py-4 bg-card border-b">
                <Badge
                  variant="secondary"
                  className="text-base font-bold px-3 py-1"
                >
                  ${parseFloat(price).toFixed(2)}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-blue-600 px-5 py-4 border-t border-blue-600/50">
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

            <div className="grid grid-cols-2">
              <div className="bg-blue-600 px-5 py-4 border-t border-blue-600/50">
                <span className="text-white font-semibold text-sm">
                  Billing Email Contact
                </span>
              </div>
              <div className="px-5 py-4 bg-card border-b flex items-center justify-between gap-2">
                <span className="text-body text-sm font-medium break-all">
                  {SUPPORT_EMAIL}
                </span>
                <button
                  onClick={() => handleCopy(SUPPORT_EMAIL, "email")}
                  className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                  title="Copy email"
                >
                  {copiedField === "email" ? (
                    <CheckCircle2 className="size-4 text-green-500" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Go another method row */}
            <div className="grid grid-cols-2">
              <div className="bg-black px-5 py-4 border-t border-white/10">
                <span className="text-white font-semibold text-sm">
                  Go Another Payment Method
                </span>
              </div>
              <div className="px-5 py-5 bg-card flex items-center gap-3 flex-wrap">
                <Link
                  href={`/checkout/payment/paypal?${currentParams}`}
                  title="Pay with PayPal"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#003087] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <span className="text-white font-black text-sm">PP</span>
                  </div>
                </Link>
                <Link
                  href={`/checkout/payment/skrill?${currentParams}`}
                  title="Pay with Skrill"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#862165] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <span className="text-white font-black text-sm">SK</span>
                  </div>
                </Link>
                <Link
                  href={`/checkout/payment/bank?${currentParams}`}
                  title="Pay with Bank Transfer"
                >
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer border">
                    <span className="text-white font-black text-sm">BT</span>
                  </div>
                </Link>
                <Link
                  href={`/checkout/payment/stripe?${currentParams}`}
                  title="Pay with Stripe"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#635bff] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <span className="text-white font-black text-sm">ST</span>
                  </div>
                </Link>
                <Link
                  href={`/checkout/payment/crypto?${currentParams}`}
                  title="Pay with Crypto"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#f7931a] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <span className="text-white font-black text-sm">BTC</span>
                  </div>
                </Link>
                <Link
                  href={`/checkout/payment/perfect?${currentParams}`}
                  title="Pay with Perfect Money"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <span className="text-white font-black text-sm">PM</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* After payment notice */}
          <Separator className="my-8 border-dashed" />
          <div className="rounded-xl border bg-muted/40 px-6 py-5 space-y-3">
            <h3 className="font-semibold text-body-large">
              After Payment — Inbox Us
            </h3>
            <p className="text-body text-muted-foreground text-sm">
              Email, Facebook, Skype or Telegram
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <div className="flex gap-2">
                <span className="text-muted-foreground">Email</span>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-blue-600 hover:underline underline-offset-4 break-all"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Skype</span>
                <a
                  href="skype:Blackdiamond_special"
                  className="text-blue-600 hover:underline underline-offset-4"
                >
                  Blackdiamond_special
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">FB</span>
                <a
                  href="#"
                  className="text-blue-600 hover:underline underline-offset-4"
                >
                  FaceBook
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Telegram</span>
                <a
                  href="#"
                  className="text-blue-600 hover:underline underline-offset-4"
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
