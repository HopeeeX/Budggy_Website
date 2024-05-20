"use client"
import React from 'react'
import Hero from "@/components/hero/Hero";
import "./globals.css";
import About from '@/components/about/About';
import CTA from '@/components/CTA/Cta';
import Contact from '@/components/contact/Contact';

const page = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <About />
      <CTA />
      <Contact />
    </div>
  )
}

export default page