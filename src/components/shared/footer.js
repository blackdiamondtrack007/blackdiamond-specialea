import Image from "next/image";
import Link from "next/link";
import payments from "../../../public/assets/footer/payments.webp";
import securedByGoogle from "../../../public/assets/footer/Secured-by-Google.webp";
import dmcaProtected from "../../../public/assets/footer/dmca_protected.png";
import footerLogo from "../../../public/logo.gif";
import _24x7 from "../../../public/assets/footer/24x7.webp";
import SocialMedia from "./social-media";

export default function Footer() {
  return (
    <div className="w-full text-text-primary">
      <div className="container my-0 lg:flex lg:gap-12 py-8 lg:py-10">
        <div className="w-full lg:w-[30%]">
          <div className="w-32 md:w-50">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={footerLogo} alt="Logo" />
            </Link>
          </div>
          <div className="my-4 lg:my-5">
            <p className="text-text-primary">
              Trade smarter with BLACKDIAMONDEA. We provide high-performance MT4
              Expert Advisors (EAs) and advanced Forex trading solutions
              designed to enhance your trading experience. Built with precision,
              reliability, and professional expertise, our tools help traders
              navigate the markets with greater confidence and consistency.
            </p>
          </div>
          <div>
            <h5 className="text-body-large font-semibold">Contact Us</h5>
            <div className="mt-3">
              <SocialMedia />
              <Image className="w-60 mt-6" src={_24x7} alt="24x7" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[70%] mt-8 lg:mt-0">
          <h5 className="text-body-large font-semibold">
            Risk Disclaimer for BLACKDIAMONDEA Users
          </h5>
          <div className="text-body space-y-2 md:space-y-3 lg:space-y-4 mt-2 md:mt-3 lg:mt-4">
            <p>
              Trading Forex and other leveraged financial instruments carries a
              high level of risk and may result in the partial or total loss of
              your invested capital. Please ensure that you fully understand the
              risks involved and carefully consider your investment objectives,
              financial situation, and trading experience before participating
              in the financial markets.
            </p>

            <p>
              If you are uncertain whether trading is appropriate for you, we
              strongly recommend seeking independent financial advice from a
              qualified professional.
            </p>

            <p>
              Past performance, testimonials, and historical results are not
              reliable indicators of future performance. We do not guarantee any
              specific profits or outcomes, and individual trading results may
              vary.
            </p>
          </div>
          <h5 className="text-body-large font-semibold mt-5">
            Legal Disclaimer
          </h5>
          <div className="text-body space-y-2 md:space-y-3 lg:space-y-4 mt-2 md:mt-3 lg:mt-4">
            <p>
              This website is not affiliated with, endorsed by, or associated
              with MetaQuotes, Facebook, Google, TikTok, or any other
              third-party companies mentioned herein. All product names,
              trademarks, logos, and brand names are the property of their
              respective owners and are used solely for identification purposes.
              Their use does not imply any sponsorship, endorsement, or
              affiliation.
            </p>

            <p>
              The information provided on this website is for educational and
              informational purposes only and should not be considered
              financial, investment, tax, or legal advice. Always consult with a
              qualified professional before making any trading or investment
              decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="py-5 border-t">
        <div className="container my-0 flex justify-center gap-5 flex-wrap">
          <Link href={"/website-disclaimer"}>Website Disclaimer</Link>
          <Link href={"/risk-disclaimer"}>Risk Disclaimer</Link>
          <Link href={"/refund-policy"}>Refund Policy</Link>
          <Link href={"/cookie-policy"}>Cookie Policy</Link>
          <Link href={"/software-license-agreement"}>
            Software License Agreement
          </Link>
          <Link href={"/anti-money-laundering-policy"}>
            Anti-Money Laundering (AML) Policy
          </Link>
        </div>
      </div>

      <div className="w-full border-t py-4">
        <div className="container my-0">
          <div className="flex flex-wrap items-center justify-center gap-1">
            <span>2011-{new Date().getFullYear()} © BLACKDIAMONDEA |</span>
            <Link href={"/privacy-policy"}>Privacy Policy</Link> |
            <Link href={"/terms-condition"}>Terms & Condition</Link> |
            <Link href={"/faq"}>FAQs</Link>
          </div>

          <div className="flex justify-center  gap-4 md:gap-5 lg:gap-7 items-center flex-wrap mt-4">
            <div>
              <Image src={payments} alt="Payments" />
            </div>
            <div>
              <Image src={securedByGoogle} alt="Secured by Google" />
            </div>
            <div>
              <Image src={dmcaProtected} alt="Dmca Protected" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
