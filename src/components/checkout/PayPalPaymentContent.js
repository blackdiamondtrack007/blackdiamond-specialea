"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, ExternalLink, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const PAYPAL_EMAIL = "support@blackdiamondea.info"; // ← replace with your PayPal email
const PAYPAL_LINK = "https://paypal.me/YOUR_ID"; // ← replace with your PayPal.me link

export default function PayPalPaymentContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "—";
  const price = searchParams.get("price") || "0";
  const orderId = searchParams.get("orderId") || "—";

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PAYPAL_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full min-h-screen">
      <div className="container pt-12 md:pt-16 lg:pt-24 pb-20">
        <div className="mx-auto max-w-2xl px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-[#003087]/10 border-[#003087]/30">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight">
                  <span className="text-[#003087]">Pay</span>
                  <span className="text-[#009cde]">Pal</span>
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary">
                Account Information
              </h2>
              <p className="text-body text-muted-foreground text-sm">
                Send your payment to the details below
              </p>
            </div>
          </div>

          {/* Info Table */}
          <div className="rounded-xl overflow-hidden border">
            <div className="grid grid-cols-2">
              <div className="bg-[#003087] px-5 py-4">
                <span className="text-white font-semibold text-sm">Plan</span>
              </div>
              <div className="px-5 py-4 bg-card border-b">
                <span className="text-body font-medium break-words">
                  {product}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-[#003087] px-5 py-4 border-t border-[#003087]/50">
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
              <div className="bg-[#003087] px-5 py-4 border-t border-[#003087]/50">
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
              <div className="bg-[#003087] px-5 py-4 border-t border-[#003087]/50">
                <span className="text-white font-semibold text-sm">
                  Send Amount To The Address
                </span>
              </div>
              <div className="px-5 py-4 bg-card border-b flex items-center justify-between gap-2">
                <span className="text-body text-sm font-medium break-all">
                  {PAYPAL_EMAIL}
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

            <div className="grid grid-cols-2">
              <div className="bg-[#003087] px-5 py-4 border-t border-[#003087]/50">
                <span className="text-white font-semibold text-sm">
                  Pay Directly via PayPal.me
                </span>
              </div>
              <div className="px-5 py-4 bg-card border-b">
                <a
                  href={`${PAYPAL_LINK}/${price}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009cde] hover:underline underline-offset-4 text-sm font-medium flex items-center gap-1"
                >
                  Send ${price} via PayPal.me{" "}
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-[#003087] px-5 py-4 border-t border-[#003087]/50">
                <span className="text-white font-semibold text-sm">
                  Don&apos;t have a PayPal Account?
                </span>
              </div>
              <div className="px-5 py-4 bg-card border-b">
                <a
                  href="https://www.paypal.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#009cde] hover:underline underline-offset-4 text-sm font-medium flex items-center gap-1"
                >
                  Open PayPal Here <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="bg-black px-5 py-4 border-t border-white/10">
                <span className="text-white font-semibold text-sm">
                  Go Another Payment Method
                </span>
              </div>
              <div className="px-5 py-5 bg-card flex items-center gap-3">
                <Link
                  href={`/checkout/payment/skrill?product=${encodeURIComponent(product)}&price=${price}&orderId=${orderId}`}
                >
                  <div
                    className="w-12 h-12 rounded-lg bg-[#862165] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                    title="Pay with Skrill"
                  >
                    <span className="text-white font-black text-sm">SK</span>
                  </div>
                </Link>
                <Link
                  href={`/checkout/payment/bank?product=${encodeURIComponent(product)}&price=${price}&orderId=${orderId}`}
                >
                  <div
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer border"
                    title="Bank Transfer"
                  >
                    <ArrowLeftRight className="size-5 text-muted-foreground" />
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
                  href="mailto:support@blackdiamondea.info"
                  className="text-[#009cde] hover:underline underline-offset-4 break-all"
                >
                  support@blackdiamondea.info
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Skype</span>
                <a
                  href="skype:Blackdiamond_special"
                  className="text-[#009cde] hover:underline underline-offset-4"
                >
                  Blackdiamond_special
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">FB</span>
                <a
                  href="#"
                  className="text-[#009cde] hover:underline underline-offset-4"
                >
                  FaceBook
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Telegram</span>
                <a
                  href="#"
                  className="text-[#009cde] hover:underline underline-offset-4"
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
