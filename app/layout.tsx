import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budggy.com: Shop Different",
}; 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "flex"}>
      <NavBar/>
        <div>
        {children}
        </div>
      <Footer/>
      </body>
    </html>
  );
}
