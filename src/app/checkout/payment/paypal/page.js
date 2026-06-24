import PayPalPaymentContent from "@/components/checkout/PayPalPaymentContent";
import { Suspense } from "react";

export default function PayPalPaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PayPalPaymentContent />
    </Suspense>
  );
}
