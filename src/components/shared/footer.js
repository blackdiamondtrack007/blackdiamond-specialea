"use client";

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
              Secure your financial future with BLACKDIAMONDEA. We make Forex
              trading simple and reliable with top-performing MT4 EAs and proven
              Forex strategies—helping your money stay protected and grow
              consistently. Trade with confidence using tools built by experts.
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
            Important Disclaimer for BLACKDIAMONDEA Users
          </h5>
          <div className="text-body space-y-2 md:space-y-3 lg:space-y-4 mt-2 md:mt-3 lg:mt-4 leading-7 lg:leading-8">
            <p>
              <strong>
                Trading leveraged instruments such as Forex and derivatives
                involves a significant level of risk and may result in the loss
                of capital.
              </strong>{" "}
              Before trading, it is important to:
            </p>

            <ul className="list-disc ml-5">
              <li>
                <strong>Fully understand the risks involved</strong> and assess
                your investment objectives, financial situation, and level of
                experience.
              </li>
              <li>
                <strong>
                  Seek independent financial advice if you are unsure whether
                  trading is suitable for you.
                </strong>
              </li>
            </ul>

            <p>
              <strong>
                Past performance and testimonials are not reliable indicators of
                future results.
              </strong>{" "}
              We do not guarantee any specific outcomes, and individual results
              may vary.
            </p>

            <p>
              <strong>This website:</strong>
            </p>

            <ul className="list-disc ml-5">
              <li>
                <strong>
                  Is not affiliated with, endorsed by, or connected to
                  MetaQuotes, Facebook, Google, or TikTok.
                </strong>
              </li>
              <li>
                Uses product names, logos, and trademarks that are the property
                of their respective owners. Such usage is for identification
                purposes only and does not imply endorsement.
              </li>
              <li>
                <strong>
                  {" "}
                  Does not provide financial, investment, tax, or legal advice.
                </strong>
                Always consult with a qualified professional before making any
                trading or investment decisions.
              </li>
            </ul>
          </div>
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
