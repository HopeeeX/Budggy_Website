import type { Metadata } from "next";
import "./globals.css";
import { Locale } from "@/i18n-config";



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
      <body>
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
