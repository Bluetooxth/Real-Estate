import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Real Estate is a platform for buying and selling properties",
  keywords: ["Real Estate", "Properties", "Buy", "Sell", "Priyanshu Chahar", "Priyannxhuu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}