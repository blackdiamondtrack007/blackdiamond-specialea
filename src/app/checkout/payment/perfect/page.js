import PerfectPaymentContent from "@/components/checkout/PerfectPaymentContent";
import { Suspense } from "react";

export default function PerfectPaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PerfectPaymentContent />
    </Suspense>
  );
}
