"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

// ← Replace all these with your actual bank details
const BANK_DETAILS = {
  bankName: "Your Bank Name",
  accountName: "Your Account Name",
  accountNumber: "1234567890",
  routingNumber: "021000021",
  swiftCode: "XXXXXX00",
  branch: "Main Branch",
};

export default function BankTransferContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "—";
  const price = searchParams.get("price") || "0";
  const orderId = searchParams.get("orderId") || "—";

  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CopyBtn = ({ value, field }) => (
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

  const rows = [
    { label: "Plan", value: product, field: null },
    { label: "Amount", value: null, field: null, isBadge: true },
    { label: "Order ID", value: orderId, field: "orderId", mono: true },
    { label: "Bank Name", value: BANK_DETAILS.bankName, field: "bank" },
    {
      label: "Account Name",
      value: BANK_DETAILS.accountName,
      field: "accName",
    },
    {
      label: "Account Number",
      value: BANK_DETAILS.accountNumber,
      field: "accNum",
    },
    {
      label: "Routing Number",
      value: BANK_DETAILS.routingNumber,
      field: "routing",
    },
    { label: "SWIFT / BIC", value: BANK_DETAILS.swiftCode, field: "swift" },
    { label: "Branch", value: BANK_DETAILS.branch, field: null },
  ];

  const currentParams = `product=${encodeURIComponent(product)}&price=${price}&orderId=${orderId}`;

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
                Transfer Details
              </h2>
              <p className="text-body text-muted-foreground text-sm">
                Wire the exact amount to the account below
              </p>
            </div>
          </div>

          {/* Info Table */}
          <div className="rounded-xl overflow-hidden border">
            {rows.map((row, i) => (
              <div key={row.label} className="grid grid-cols-2">
                <div
                  className={`bg-emerald-700 px-5 py-4 ${i > 0 ? "border-t border-emerald-600/40" : ""}`}
                >
                  <span className="text-white font-semibold text-sm">
                    {row.label}
                  </span>
                </div>
                <div className="px-5 py-4 bg-card border-b flex items-center justify-between gap-2">
                  {row.isBadge ? (
                    <Badge
                      variant="secondary"
                      className="text-base font-bold px-3 py-1"
                    >
                      ${parseFloat(price).toFixed(2)}
                    </Badge>
                  ) : (
                    <span
                      className={`text-body text-sm font-medium break-all ${row.mono ? "font-mono text-muted-foreground" : ""}`}
                    >
                      {row.value}
                    </span>
                  )}
                  {row.field && <CopyBtn value={row.value} field={row.field} />}
                </div>
              </div>
            ))}

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
                  href={`/checkout/payment/card?${currentParams}`}
                  title="Pay with Card"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                    <span className="text-white font-black text-sm">CD</span>
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
                  href="mailto:support@blackdiamondea.info"
                  className="text-emerald-600 hover:underline underline-offset-4 break-all"
                >
                  support@blackdiamondea.info
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Skype</span>
                <a
                  href="skype:Blackdiamond_special"
                  className="text-emerald-600 hover:underline underline-offset-4"
                >
                  Blackdiamond_special
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">FB</span>
                <a
                  href="#"
                  className="text-emerald-600 hover:underline underline-offset-4"
                >
                  FaceBook
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">Telegram</span>
                <a
                  href="#"
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
