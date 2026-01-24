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
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div> */}

              <div className="hidden size-fit lg:block">
                <ul className="flex gap-8 text-sm">
                  <li>
                    <Link
                      href={"/"}
                      className={
                        pathname === "/"
                          ? "text-primary hover:text-primary block duration-150 text-body-large font-bold"
                          : "text-nav-text hover:text-primary block duration-150 text-body-large"
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
                          ? "text-primary block duration-150 text-body-large font-bold"
                          : "text-nav-text hover:text-primary block duration-150 text-body-large hover:font-bold"
                      }
                    >
                      <p className="text-body-large">{"Forex EA"}</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/indicator"}
                      className="text-nav-text hover:text-accent-foreground block duration-150"
                    >
                      <p className="text-body-large">{"Indicator"}</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/copy-trading"}
                      className="text-nav-text hover:text-accent-foreground block duration-150"
                    >
                      <p className="text-body-large">{"Copy Trading"}</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/brokers"}
                      className="text-nav-text hover:text-accent-foreground block duration-150"
                    >
                      <p className="text-body-large">{"Brokers"}</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/live-chart"}
                      className="text-nav-text hover:text-accent-foreground block duration-150"
                    >
                      <p className="text-body-large">{"Live Chart"}</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className="text-nav-text hover:text-accent-foreground block duration-150"
                    >
                      <p className="text-body-large">{"Contact"}</p>
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
