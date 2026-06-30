"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.gif";
import { ThemeToggleButton } from "./theme-toggle-button";
import GoogleTranslate from "./google-translate";
import StickyHeader from "./sticky-header";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import MobileMenu from "./mobile-menu";
import LoginIcon from "./login-icon";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import LogoutIcon from "./login-icon";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <StickyHeader>
      <nav className="w-full">
        <div className="bg-black py-2 lg:py-3">
          <div className="container my-0 flex justify-between items-center gap-4 lg:gap-0">
            <div className="w-32 md:w-50">
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>

            <div className="flex gap-4">
              <div className="mt-1.5 lg:mt-0">
                <GoogleTranslate />
              </div>
              <div className="hidden lg:block">
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
              <ul className="flex gap-6 xl:gap-8">
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
                  <Link
                    href={"/blogs"}
                    className={
                      pathname === "/blogs"
                        ? "text-primary text-body-large font-bold"
                        : "text-nav-text hover:text-primary  duration-200 text-body-large"
                    }
                  >
                    {"Blogs"}
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

            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
              <Button className="bg-primary text-white rounded py-2 px-4 cursor-pointer">
                <a href="https://t.me/bdspecialea" target="_blank">
                  Join Telegram Channel ↗
                </a>
              </Button>
              {user ? (
                <Button
                  className="bg-primary text-white rounded py-2 px-4 cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogoutIcon className="text-white" />
                  <span>Logout</span>
                </Button>
              ) : (
                <Button className="bg-primary text-white rounded py-2 px-4 cursor-pointer">
                  <Link href="/login" className="flex gap-0.5 items-center">
                    <LoginIcon className="text-white" />
                    <span>Login</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </StickyHeader>
  );
};
