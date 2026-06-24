import BankTransferContent from "@/components/checkout/BankTransferContent";
import { Suspense } from "react";

export default function BankTransferPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BankTransferContent />
    </Suspense>
  );
}
