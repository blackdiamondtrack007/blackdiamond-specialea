import VisaCard from "../../../public/assets/home/payment-methods/visa1.webp";
import Paypal from "../../../public/assets/home/payment-methods/paypal.webp";
import Stripe from "../../../public/assets/home/payment-methods/stripe.webp";
import Bitcoin from "../../../public/assets/home/payment-methods/bitcoin.webp";
import BankTransfer from "../../../public/assets/home/payment-methods/bank transfer.webp";
import Skrill from "../../../public/assets/home/payment-methods/skrill.webp";
import PerfectMoney from "../../../public/assets/home/payment-methods/perfectmoney.webp";
import Image from "next/image";
import Link from "next/link";

export default function PaymentMethods() {
  return (
    <section className="w-full">
      <div className="flex gap-6 flex-wrap justify-center items-center mt-8 md:mt-10 lg:mt-15">
        <Link href={"/pricing"}>
          <Image
            className="w-24 rounded-md opacity-30 hover:opacity-100 duration-400"
            src={VisaCard}
            alt="Markets4you Forex Broker"
          />
        </Link>
        <Link href={"/pricing"}>
          <Image
            className="w-24 rounded-md opacity-30 hover:opacity-100 duration-400"
            src={Paypal}
            alt="Markets4you Forex Broker"
          />
        </Link>
        <Link href={"/pricing"}>
          <Image
            className="w-24 rounded-md opacity-30 hover:opacity-100 duration-400"
            src={Stripe}
            alt="Markets4you Forex Broker"
          />
        </Link>
        <Link href={"/pricing"}>
          <Image
            className="w-24 rounded-md opacity-30 hover:opacity-100 duration-400"
            src={Bitcoin}
            alt="Markets4you Forex Broker"
          />
        </Link>
        <Link href={"/pricing"}>
          <Image
            className="w-24 rounded-md opacity-30 hover:opacity-100 duration-400"
            src={BankTransfer}
            alt="Markets4you Forex Broker"
          />
        </Link>
        <Link href={"/pricing"}>
          <Image
            className="w-24 rounded-md opacity-30 hover:opacity-100 duration-400"
            src={Skrill}
            alt="Markets4you Forex Broker"
          />
        </Link>
        <Link href={"/pricing"}>
          <Image
            className="w-24 rounded-md opacity-30 hover:opacity-100 duration-400"
            src={PerfectMoney}
            alt="Markets4you Forex Broker"
          />
        </Link>
      </div>
    </section>
  );
}
