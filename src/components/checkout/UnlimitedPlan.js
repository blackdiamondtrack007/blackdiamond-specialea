import Link from "next/link";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Sparkles } from "lucide-react";

export default function UnlimitedPlan({product, price, orderId}) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent p-6 md:p-8 shadow-xl">
      <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
        <Sparkles className="size-3" /> VIP License
      </div>

      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Selected Premium Plan
          </span>
          <h3 className="text-2xl font-black text-foreground mt-1 tracking-tight">
            {product.replace("_", " ")}
          </h3>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-foreground">
              ${parseFloat(price).toFixed(2)}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              One-Time Activation
            </span>
          </div>
        </div>

        <div className="bg-card border border-border/60 rounded-xl p-4 text-sm text-muted-foreground space-y-1 font-mono">
          <div className="flex justify-between">
            <span>Order ID:</span>
            <span className="text-foreground font-medium">{orderId}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20 text-sm leading-relaxed text-foreground">
            💡{" "}
            <strong className="text-amber-600">
              Unlock Lifetime Access Instantly:
            </strong>{" "}
            Click below to chat with our verified admin on{" "}
            <strong>Telegram</strong> and instantly get your{" "}
            <strong>Unlimited Plan</strong> through our secure VIP Escrow
            network.
          </div>
        </div>

        {/* Main Action CTA */}
        <Button
          asChild
          className="w-full py-6 bg-[#24A1DE] hover:bg-[#208ec4] text-white font-bold text-base rounded-xl shadow-lg shadow-blue-500/10 group transition-all"
        >
          <Link
            href={"https://t.me/bdeaspecial"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 size-5 fill-white" />
            Contact to admin via Telegram
            <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
