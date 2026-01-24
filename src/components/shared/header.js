"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.gif";
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
import MobileMenu from "./mobile-menu";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const pathname = usePathname();
  return (
    <StickyHeader>
      <nav className="w-full">
        <div className="bg-black py-3">
          <div className="container my-0 flex justify-between">
            <div className="w-40 md:w-50">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:items-center">
                <GoogleTranslate />
                <ThemeToggleButton />
              </div>
            </div>

            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>

        <div className="relative hidden py-3 lg:gap-0 lg:py-4 bg-nav-bg lg:block">
          <div className="container my-0 flex flex-wrap items-center justify-between gap-6">
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
                              <NavigationMenuLink
                                href={"/live-forex-chart"}
                                className={"p-1"}
                              >
                                <span
                                  className={
                                    pathname === "/live-forex-chart"
                                      ? "text-primary text-body font-semibold"
                                      : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                  }
                                >
                                  {"Live Forex Chart"}
                                </span>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink
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
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink
                                href={"/forex-heat-map"}
                                className="p-1"
                              >
                                <span
                                  className={
                                    pathname === "/forex-heat-map"
                                      ? "text-primary text-body font-semibold"
                                      : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                  }
                                >
                                  {"Forex Heat Map"}
                                </span>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink
                                href={"/forex-screener"}
                                className="p-1"
                              >
                                <span
                                  className={
                                    pathname === "/forex-screener"
                                      ? "text-primary text-body font-semibold"
                                      : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                  }
                                >
                                  {"Forex Screener"}
                                </span>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink
                                href={"/forex-calendar"}
                                className="p-1"
                              >
                                <span
                                  className={
                                    pathname === "/forex-calendar"
                                      ? "text-primary text-body font-semibold"
                                      : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                  }
                                >
                                  {"FOREX CALENDAR"}
                                </span>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink
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
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink
                                href={"/crypto-currency-current-price"}
                                className="p-1"
                              >
                                <span
                                  className={
                                    pathname ===
                                    "/crypto-currency-current-price"
                                      ? "text-primary text-body font-semibold"
                                      : "text-gray-600 hover:text-primary duration-100 text-body hover:font-semibold"
                                  }
                                >
                                  {"Crypto Currency Current Price"}
                                </span>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink
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
      </nav>
    </StickyHeader>
  );
};
