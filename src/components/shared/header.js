"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ThemeToggleButton } from "./theme-toggle-button";
import GoogleTranslate from "./google-translate";
import StickyHeader from "./sticky-header";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export const Header = () => {
  const pathname = usePathname();
  return (
    <StickyHeader>
      <nav className="w-full">
        <div className={cn("transition-all duration-300")}>
          <div className="bg-black py-3">
            <div className="container my-0 flex justify-between">
              <div>
                <Link href="/" className="flex items-center space-x-2">
                  <Image src="/logo.gif" alt="Logo" width={200} height={45} />
                </Link>
              </div>
              <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:hidden">
                  <ul className="space-y-6 text-base">
                    <li>
                      <Link
                        href={""}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{""}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:items-center">
                  <GoogleTranslate />
                  <ThemeToggleButton />
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-3 lg:gap-0 lg:py-4 bg-nav-bg">
            <div className="container my-0 flex flex-wrap items-center justify-between gap-6">
              {/* <div className="flex w-full justify-between lg:w-auto">
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-2000" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-2000" />
              </button>
            </div> */}

              <div className="hidden size-fit lg:block">
                <ul className="flex gap-8">
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
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger
                            className={
                              "bg-transparent rounded-none text-nav-text hover:text-primary duration-200 text-body-large cursor-pointer"
                            }
                          >
                            <span className="text-nav-text hover:text-primary duration-200 text-body-large cursor-pointer">
                              Live Chart
                            </span>
                          </NavigationMenuTrigger>

                          <NavigationMenuContent className={""}>
                            <ul className="w-[200px] p-1">
                              <li>
                                <NavigationMenuLink className="p-1">
                                  <Link
                                    href={"/live-forex-chart"}
                                    className={
                                      pathname === "/live-forex-chart"
                                        ? "text-primary text-body font-semibold"
                                        : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                    }
                                  >
                                    {"Live Forex Chart"}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink className="p-1">
                                  <Link
                                    href={"/forex-factory-calendar"}
                                    className={
                                      pathname === "/forex-factory-calendar"
                                        ? "text-primary text-body font-semibold"
                                        : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                    }
                                  >
                                    {"Forex Factory Calendar"}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink className="p-1">
                                  <Link
                                    href={"/forex-heat-map"}
                                    className={
                                      pathname === "/forex-heat-map"
                                        ? "text-primary text-body font-semibold"
                                        : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                    }
                                  >
                                    {"Forex Heat Map"}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink className="p-1">
                                  <Link
                                    href={"/forex-screener"}
                                    className={
                                      pathname === "/forex-screener"
                                        ? "text-primary text-body font-semibold"
                                        : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                    }
                                  >
                                    {"Forex Screener"}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink className="p-1">
                                  <Link
                                    href={"/forex-calendar"}
                                    className={
                                      pathname === "/forex-calendar"
                                        ? "text-primary text-body font-semibold"
                                        : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                    }
                                  >
                                    {"FOREX CALENDAR"}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink className="p-1">
                                  <Link
                                    href={"/most-traded-cryptocurrencies"}
                                    className={
                                      pathname ===
                                      "/most-traded-cryptocurrencies"
                                        ? "text-primary text-body font-semibold"
                                        : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                    }
                                  >
                                    {"Most Traded Cryptocurrencies"}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink className="p-1">
                                  <Link
                                    href={"/crypto-currency-current-price"}
                                    className={
                                      pathname ===
                                      "/crypto-currency-current-price"
                                        ? "text-primary text-body font-semibold"
                                        : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                    }
                                  >
                                    {"Crypto Currency Current Price"}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink className="p-1">
                                  <Link
                                    href={
                                      "/cryptocurrency-market-capitalization"
                                    }
                                    className={
                                      pathname ===
                                      "/cryptocurrency-market-capitalization"
                                        ? "text-primary text-body font-semibold"
                                        : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                    }
                                  >
                                    {"Cryptocurrency Market Capitalization"}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
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
              <Button className="bg-primary text-white rounded py-2 px-4 cursor-pointer">
                Join Telegram Channel ↗
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </StickyHeader>
  );
};
