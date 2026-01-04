import "./globals.css";

export const metadata = {
  title: "Best Forex Robot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
