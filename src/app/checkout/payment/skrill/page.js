import SkrillPaymentContent from "@/components/checkout/SkrillPaymentContent";
import { Suspense } from "react";

export default function SkrillPaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SkrillPaymentContent />
    </Suspense>
  );
}
