import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/Navbar";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }]
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <NavBar t={dictionary.navbar}/>
        <div>
        {children}
        </div>
      <Footer t={dictionary.footer}/>
      </>
  );
}
