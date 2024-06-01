import React from 'react';
import Hero from "@/components/hero/Hero";
import About from '@/components/about/About';
import CTA from '@/components/CTA/Cta';
import Contact from '@/components/contact/Contact';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  
  return (
    <div className='flex flex-col'>
      <Hero t={dictionary.hero} />
      <About t={dictionary.about} />
      <CTA t={dictionary.cta} />
      <Contact t={dictionary.contact} />
    </div>
  );
}
