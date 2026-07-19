import StripePaymentContent from "@/components/checkout/StripePaymentContent";
import { Suspense } from "react";

export default function StripePaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StripePaymentContent />
    </Suspense>
  );
}