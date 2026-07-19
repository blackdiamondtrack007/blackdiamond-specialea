import CryptoPaymentContent from "@/components/checkout/CryptoPaymentContent";
import { Suspense } from "react";

export default function CryptoPaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CryptoPaymentContent />
    </Suspense>
  );
}
