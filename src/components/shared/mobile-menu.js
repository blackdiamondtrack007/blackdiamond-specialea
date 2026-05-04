"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GoogleTranslate from "./google-translate";
import { ThemeToggleButton } from "./theme-toggle-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LoginIconMobile from "./login-icon";

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button className={"p-0 bg-transparent mx-[-12px]"}>
            <Menu className="size-6 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent
          right="right"
          className="data-[right=bottom]:max-h-[50vh] data-[right=top]:max-h-[50vh]"
        >
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="h-[90vh] no-scrollbar overflow-y-auto px-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href={"/"}
                  className={
                    pathname === "/"
                      ? "text-primary text-body-large font-bold"
                      : "text-nav-text hover:text-primary  duration-200 text-body-large"
                  }
                >
                  {"Home"}
                </Link>
              </li>
              <li>
                <Link
                  href={"/forex-ea"}
                  className={
                    pathname === "/forex-ea"
                      ? "text-primary text-body-large font-bold"
                      : "text-nav-text hover:text-primary  duration-200 text-body-large"
                  }
                >
                  {"Forex EA"}
                </Link>
              </li>
              <li>
                <Link
                  href={"/indicator"}
                  className={
                    pathname === "/indicator"
                      ? "text-primary text-body-large font-bold"
                      : "text-nav-text hover:text-primary  duration-200 text-body-large"
                  }
                >
                  {"Indicator"}
                </Link>
              </li>
              <li>
                <Link
                  href={"/copy-trading"}
                  className={
                    pathname === "/copy-trading"
                      ? "text-primary text-body-large font-bold"
                      : "text-nav-text hover:text-primary  duration-200 text-body-large"
                  }
                >
                  {"Copy Trading"}
                </Link>
              </li>
              <li>
                <Link
                  href={"/brokers"}
                  className={
                    pathname === "/brokers"
                      ? "text-primary text-body-large font-bold"
                      : "text-nav-text hover:text-primary  duration-200 text-body-large"
                  }
                >
                  {"Brokers"}
                </Link>
              </li>
              <li>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full my-[-16px]"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      className={
                        "bg-transparent rounded-none text-nav-text hover:text-primary duration-200 text-body-large cursor-pointer"
                      }
                    >
                      <span className="text-nav-text hover:text-primary duration-200 text-body-large cursor-pointer">
                        Live Chart
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1.5">
                        <li>
                          <Link href={"/live-forex-chart"}>
                            <span
                              className={
                                pathname === "/live-forex-chart"
                                  ? "text-primary text-body font-semibold"
                                  : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                              }
                            >
                              {"Live Forex Chart"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/forex-factory-calendar"}>
                            <span
                              className={
                                pathname === "/forex-factory-calendar"
                                  ? "text-primary text-body font-semibold"
                                  : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                              }
                            >
                              {"Forex Factory Calendar"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/forex-heat-map"}>
                            <span
                              className={
                                pathname === "/forex-heat-map"
                                  ? "text-primary text-body font-semibold"
                                  : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                              }
                            >
                              {"Forex Heat Map"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/forex-screener"}>
                            <span
                              className={
                                pathname === "/forex-screener"
                                  ? "text-primary text-body font-semibold"
                                  : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                              }
                            >
                              {"Forex Screener"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/forex-calendar"}>
                            <span
                              className={
                                pathname === "/forex-calendar"
                                  ? "text-primary text-body font-semibold"
                                  : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                              }
                            >
                              {"FOREX CALENDAR"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/most-traded-cryptocurrencies"}>
                            <span
                              className={
                                pathname === "/most-traded-cryptocurrencies"
                                  ? "text-primary text-body font-semibold"
                                  : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                              }
                            >
                              {"Most Traded Cryptocurrencies"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/crypto-currency-current-price"}>
                            <span
                              className={
                                pathname === "/crypto-currency-current-price"
                                  ? "text-primary text-body font-semibold"
                                  : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                              }
                            >
                              {"Crypto Currency Current Price"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={"/cryptocurrency-market-capitalization"}>
                            <span
                              className={
                                pathname ===
                                "/cryptocurrency-market-capitalization"
                                  ? "text-primary text-body font-semibold"
                                  : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                              }
                            >
                              {"Cryptocurrency Market Capitalization"}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className={
                    pathname === "/contact"
                      ? "text-primary text-body-large font-bold"
                      : "text-nav-text hover:text-primary  duration-200 text-body-large"
                  }
                >
                  {"Contact"}
                </Link>
              </li>
            </ul>
          </div>
          <SheetFooter>
            <div className={"flex items-center gap-4"}>
              <ThemeToggleButton />
              <Button
                className={
                  "w-24 text-primary bg-gray-900 rounded border p-4.5 text-sm shadow-sm cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700 hover:bg-gray-800"
                }
              >
                <Link href="/login" className="flex gap-0.5 items-center">
                  <LoginIconMobile className="text-primary" />
                  <span>Login</span>
                </Link>
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
