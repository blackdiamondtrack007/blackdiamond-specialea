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

const SHEET_rightS = ["top", "right", "bottom", "left"];

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button className={"p-0 bg-transparent mr-[-12px]"}>
            <Menu className="size-8 mt-2" />
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
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem
                    value="item-1"
                    className={
                      "bg-transparent rounded-none text-nav-text hover:text-primary duration-200 text-body-large cursor-pointer"
                    }
                  >
                    <AccordionTrigger>
                      <span className="text-nav-text hover:text-primary duration-200 text-body-large cursor-pointer">
                        Live Chart
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="w-[200px] p-1">
                        <li>
                          <Link href={"/live-forex-chart"} className={"p-1"}>
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
                          <Link
                            href={"/forex-factory-calendar"}
                            className="p-1"
                          >
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
                          <Link href={"/forex-heat-map"} className="p-1">
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
                          <Link href={"/forex-screener"} className="p-1">
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
                          <Link href={"/forex-calendar"} className="p-1">
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
                          <Link
                            href={"/most-traded-cryptocurrencies"}
                            className="p-1"
                          >
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
                          <Link
                            href={"/crypto-currency-current-price"}
                            className="p-1"
                          >
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
                          <Link
                            href={"/cryptocurrency-market-capitalization"}
                            className="p-1"
                          >
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
          <SheetFooter className={"flex"}>
            <GoogleTranslate />
            <ThemeToggleButton />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
