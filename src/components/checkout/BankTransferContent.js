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
  Globe,
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

// Real multi-region corporate bank details
const BANK_ACCOUNTS = {
  ach: {
    label: "USA Local (ACH / Wire)",
    bankName: "JP Morgan Chase NA",
    accountName: "Abdullah Al Main",
    accountNumber: "30000002947484",
    routingNumber: "028000024",
    branch: "270 Park Avenue, New York, NY 10017",
    accountType: "Checking (Current)",
    extraLabel: "Routing Number",
    extraValue: "028000024",
    extraField: "routing",
  },
  swift: {
    label: "International (SWIFT Wire)",
    bankName: "Clear Bank",
    accountName: "Abdullah Al Main",
    accountNumber: "21798496",
    iban: "GB15CLRB04281221798496",
    swiftCode: "CLRBGB22XXX",
    branch: "133 Houndsditch, LONDON, EC3A 7BX",
    accountType: "Checking (Current)",
    extraLabel: "IBAN",
    extraValue: "GB15CLRB04281221798496",
    extraField: "iban",
  },
  sepa: {
    label: "Eurozone Region (SEPA)",
    bankName: "Clear Bank",
    accountName: "Abdullah Al Main",
    accountNumber: "05536627",
    iban: "GB75CLRB04281205536627",
    swiftCode: "CLRBGB22XXX",
    sortCode: "042812",
    branch: "133 Houndsditch, LONDON, EC3A 7BX",
    accountType: "Checking (Current)",
    extraLabel: "IBAN (EUR Transfer Only)",
    extraValue: "GB75CLRB04281205536627",
    extraField: "iban",
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
      onClick={() => handleCopy(value, field, copiedField)}
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

export default function BankTransferContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const product = searchParams.get("product") || "—";
  const price = searchParams.get("price") || "0";
  const orderId = searchParams.get("orderId") || "—";

  // Default regional account configuration selection state
  const [activeAccountKey, setActiveAccountKey] = useState("swift");

  const activeAccount = BANK_ACCOUNTS[activeAccountKey];

  // Core transaction rows that stay static
  const commonRows = [
    { label: "Plan", value: product, field: null },
    { label: "Amount", value: null, field: null, isBadge: true },
  ];

  // System-level details mapping out dynamically according to active regional tab selection
  const dynamicBankRows = [
    { label: "Bank Name", value: activeAccount.bankName, field: "bank" },
    {
      label: "Account Name",
      value: activeAccount.accountName,
      field: "accName",
    },
    ...(activeAccount.accountNumber
      ? [
          {
            label: "Account Number",
            value: activeAccount.accountNumber,
            field: "accNum",
          },
        ]
      : []),
    {
      label: activeAccount.extraLabel,
      value: activeAccount.extraValue,
      field: activeAccount.extraField,
    },
    ...(activeAccount.swiftCode
      ? [
          {
            label: "SWIFT / BIC Code",
            value: activeAccount.swiftCode,
            field: "swift",
          },
        ]
      : []),
    ...(activeAccount.sortCode
      ? [
          {
            label: "Sort Code",
            value: activeAccount.sortCode,
            field: "sortCode",
          },
        ]
      : []),
    { label: "Account Type", value: activeAccount.accountType, field: null },
    { label: "Bank Address", value: activeAccount.branch, field: null },
  ];

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
                  : "Wire the exact amount to the account below"}
              </p>
            </div>
          </div>

          {/* DYNAMIC DESIGN BOX */}
          {isUnlimitedPlan ? (
            <UnlimitedPlan product={product} price={price} orderId={orderId} />
          ) : (
            /* --- INFO TABLE FOR REGULAR PLANS WITH REGIONAL SWITCHER INTEGRATION --- */
            <div className="rounded-xl overflow-hidden border shadow-sm">
              {/* Core System Rows (Plan details & price metrics) */}
              {commonRows.map((row, i) => (
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
                      <span className="text-body text-sm font-medium break-all">
                        {row.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Order Tracking Verification Identifier */}
              <div className="grid grid-cols-2">
                <div className="bg-emerald-700 px-5 py-4 border-t border-emerald-600/40">
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

              {/* DYNAMIC ACCOUNT REGION DROPDOWN SWITCHER ROW */}
              <div className="grid grid-cols-2 bg-muted/40 border-b border-t">
                <div className="bg-emerald-800 px-5 py-4 flex items-center">
                  <span className="text-white font-bold text-sm flex items-center gap-1.5">
                    <Globe className="size-4 opacity-80" /> Switch Account Info
                  </span>
                </div>
                <div className="px-5 py-3 bg-card flex items-center">
                  <div className="relative w-full">
                    <select
                      value={activeAccountKey}
                      onChange={(e) => setActiveAccountKey(e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer appearance-none pr-8"
                    >
                      {Object.entries(BANK_ACCOUNTS).map(([key, config]) => (
                        <option key={key} value={key}>
                          {config.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 pointer-events-none text-muted-foreground opacity-60" />
                  </div>
                </div>
              </div>

              {/* Dynamic Bank Account Information Processing Output */}
              {dynamicBankRows.map((row) => (
                <div key={row.label} className="grid grid-cols-2">
                  <div className="bg-emerald-700 px-5 py-4 border-t border-emerald-600/40">
                    <span className="text-white font-semibold text-sm">
                      {row.label}
                    </span>
                  </div>
                  <div className="px-5 py-4 bg-card border-b flex items-center justify-between gap-2">
                    <span className="text-body text-sm font-medium break-all">
                      {row.value}
                    </span>
                    {row.field && (
                      <CopyBtn value={row.value} field={row.field} />
                    )}
                  </div>
                </div>
              ))}

              {/* Alternative Payment Gateway Configuration Selection Router */}
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
                        Bank Transfer
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
