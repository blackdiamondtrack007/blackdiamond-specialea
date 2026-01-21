import React from "react";
import { Button } from "../ui/button";

export default function Categories() {
  return (
    <div className="mx-auto max-w-7xl px-8 mt-96 py-36">
      <div className="grid grid-cols-5 gap-6">
        <Button className={"px-2 py-5"}>Best Forex EA</Button>
        <Button>MT4 Indicator</Button>
        <Button>Best MT4 EA</Button>
        <Button>Best Forex Broker</Button>
        <Button>Bitcoin EA</Button>
        <Button>Scalping EA</Button>
        <Button>AIGPT5 EA</Button>
        <Button>Hedging EA</Button>
        <Button>Account Management</Button>
        <Button>Free Forex EA</Button>
      </div>
    </div>
  );
}
