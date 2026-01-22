import { Header } from "@/components/shared/header";
import "./globals.css";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import { bodyFont, headingFont } from "@/lib/fonts";

export const metadata = {
  title: "Best Forex Robot",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${headingFont.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <header>
            <Header />
          </header> */}

          <main>{children}</main>

          {/* <footer>
            <Footer />
          </footer> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
