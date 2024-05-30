'use client'
import React from 'react';
import Image from 'next/image';
import FadeInSection from './FadeInSection';
import { useParams } from 'next/navigation';

interface AboutProps {
    t: {
        title: string;
        steps: Array<{
            number: string;
            heading: string;
            description: string;
        }>;
    }
}

const About: React.FC<AboutProps> = ({ t }) => {
    const { lang } = useParams()

    return (
        <FadeInSection animation='fade-in-top'>
            <div className='flex flex-col justify-center items-center mt-[50px] md:mt-[80px] lg:mt-[40px] xl:mt-[120px] mb-[20px]'>
                {/* Title */}
                <h1 className='text-[48px] font-bold text-[#050505] text-center leading-[58px]'>{t.title}</h1>
                <div className={`flex flex-col ${lang == "en" ? "xl:flex-row" : "xl:flex-row-reverse xl:gap-8"} justify-center items-center`}>
                    {/* Image - Bigger Screens */}
                    <div className='hidden xl:flex w-[587px] h-[601px] relative'>
                        <Image
                            src={"/assets/images/phone-illustration1.png"}
                            layout="fill"
                            objectFit='cover'
                            quality={100}
                            alt='phone-illustration'
                        />
                    </div>
                    {/* Installation Instructions */}
                        <div className={`flex flex-col justify-start ${lang == "en" ? "items-start" : "items-end"}`}>
                            {t.steps.map((step, index) => (
                                <FadeInSection key={index} animation='fade-in-left'>
                                <div className={`flex ${lang == "en" ? "flex-row" : "flex-row-reverse"} gap-[20px] mt-[32px] xl:mt-[80px] px-[7vw] md:px-[15vw] xl:px-0 xl:w-[505px]`} key={index}>
                                    {/* Info Number */}
                                    <div>
                                        <h2 className="text-[20px] font-bold text-[#F79400] bg-[#FFFBE3] p-[16px] rounded-full">{step.number}</h2>
                                    </div>
                                    {/* Info */}
                                    <div className='flex flex-col'>
                                        <h2 className={`text-[28px] font-bold text-[#050505] ${lang == "en" ? "text-start" : "text-end"}`}>{step.heading}</h2>
                                        <h3 className={`text-[16px] font-normal text-[#050505] ${lang == "en" ? "text-start" : "text-end"} mt-[12px]`}>{step.description}</h3>
                                    </div>
                                </div>
                                </FadeInSection>
                            ))}
                        </div>
                    {/* Image - Smaller Screens */}
                    <div className='flex xl:hidden w-[385px] h-[394px] relative mt-[15px] xl:mt-0'>
                        <Image
                            src={"/assets/images/phone-illustration.png"}
                            layout="fill"
                            objectFit='cover'
                            quality={100}
                            alt='phone-illustration'
                        />
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
}

export default About;
