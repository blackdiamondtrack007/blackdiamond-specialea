import { Header } from "@/components/shared/header";
import "./globals.css";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import { bodyFont, headingFont } from "@/lib/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TelegramButton from "@/components/shared/TelegramButton";
import OrdersNotification from "@/components/shared/OrdersNotification";
import ScrollToTop from "@/components/shared/scroll-to-top";

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
          <header>
            <Header />
          </header>

          <main className="min-h-[70vh]">{children}</main>

          <footer>
            <Footer />
          </footer>
          <OrdersNotification />
          <ScrollToTop />
          <TelegramButton />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
