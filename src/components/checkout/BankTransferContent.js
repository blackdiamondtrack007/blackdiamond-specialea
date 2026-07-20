"use client";

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
  BadgeDollarSign
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
  const router = useRouter();

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

  // Helper builder to streamline alternative navigation links
  const buildPath = (gateway) => `/checkout/payment/${gateway}?${currentParams}`;

  // Complete settings array mapping every gateway target out beautifully
  const alternativeMethods = [
    { value: "card", label: "Visa / Mastercard", path: buildPath("card"), icon: CreditCard, color: "text-blue-600" },
    { value: "paypal", label: "PayPal", path: buildPath("paypal"), icon: Wallet, color: "text-[#003087]" },
    { value: "stripe", label: "Stripe", path: buildPath("stripe"), icon: CreditCard, color: "text-[#635bff]" },
    { value: "crypto", label: "Bitcoin / Cryptocurrency", path: buildPath("crypto"), icon: Coins, color: "text-[#f7931a]" },
    { value: "bank", label: "Bank Transfer", path: buildPath("bank"), icon: Building2, color: "text-emerald-600" },
    { value: "skrill", label: "Skrill", path: buildPath("skrill"), icon: CreditCard, color: "text-[#862165]" },
    { value: "perfect", label: "Perfect Money", path: buildPath("perfect"), icon: BadgeDollarSign, color: "text-[#ff0000]" },
  ];

  const handleMethodChange = (selectedValue) => {
    const target = alternativeMethods.find((m) => m.value === selectedValue);
    if (target) {
      router.push(target.path);
    }
  };

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
                      className="bg-primary text-white text-base font-bold px-3 py-1"
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
                    <Button variant="outline" className="w-full max-w-[240px] justify-between text-sm">
                      Bank Transfer
                      <ChevronDown className="size-4 opacity-50 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-60 bg-primary text-white" align="start">
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>Alternative Gateways</DropdownMenuLabel>
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
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <IconComponent className={`size-4 ${method.color}`} />
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

          {/* After payment notice */}
          <Separator className="my-8 border-dashed" />
          <div className="rounded-xl border bg-muted/40 px-6 py-5 space-y-3">
            <h3 className="font-semibold text-body-large">
              After Payment — Inbox Us
            </h3>
            <p className="text-body text-muted-foreground text-sm">
              Email, Facebook, Skype or Telegram
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-sm">
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
