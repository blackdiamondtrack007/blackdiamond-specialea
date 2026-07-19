import CardPaymentContent from "@/components/checkout/CardPaymentContent";
import { Suspense } from "react";

export default function CardPaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardPaymentContent />
    </Suspense>
  );
}
