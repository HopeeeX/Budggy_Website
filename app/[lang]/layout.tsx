import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/Navbar";
import { Locale } from "@/i18n-config";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <>
      <NavBar/>
        <div>
        {children}
        </div>
      <Footer/>
      </>
  );
}
