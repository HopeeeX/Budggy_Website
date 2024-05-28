import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Locale } from "@/i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budggy.com: Shop Different",
}; 

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className + "flex"}>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
