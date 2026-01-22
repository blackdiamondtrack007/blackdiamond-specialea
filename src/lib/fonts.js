import { Inter, Poppins } from "next/font/google";

export const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
