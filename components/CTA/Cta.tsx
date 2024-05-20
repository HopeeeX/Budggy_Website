import React from 'react';
import Image from 'next/image';

interface CtaProps {
    t: {
        title: string;
    description: string;
    comingSoonText: string;
    }
}

const Cta: React.FC<CtaProps> = ({t}) => {
    return (
        <div className='cta bg-[#FFFBEA] rounded-[32px] mx-[4vw] xl:mx-auto pt-[56px] xl:pt-0 xl:mt-[120px] flex flex-col xl:flex-row'>
            <div className='flex flex-col justify-center items-center xl:items-start mx-[7vw] xl:mx-0 pb-[20px] xl:pb-0 xl:pl-[56px]'>
                {/* Text */}
                <h1 className='text-[48px] font-bold text-black text-center xl:text-start xl:w-[555px]'>{t.title}</h1>
                <h3 className='text-[16px] font-normal text-black text-center xl:text-start xl:w-[530px]'>{t.description}</h3>
                <h2 className='text-[#F79400] text-center text-[16px] font-bold tracking-widest mt-[40px] xl:text-start'>{t.comingSoonText}</h2>
                {/* Download Buttons */}
                <div className='flex flex-row gap-[12px] mt-[10px]'>
                    {/* Apple Store */}
                    <button className='w-[150px] h-[56px] flex flex-row justify-center items-center rounded-lg bg-[#FFFFFF] border border-[#090909] gap-[9px]'>
                        <div>
                            <Image
                                src={"/assets/icons/apple-logo-black.png"}
                                width={30}
                                height={30}
                                quality={100}
                                alt='apple-logo'
                            />
                        </div>
                        <div className='flex flex-col gap-0'>
                            <div>
                                <h1 className='text-[18px] text-black font-normal leading-4 tracking-tighter text-start pt-[2px]'>App Store</h1>
                            </div>
                        </div>
                    </button>
                    {/* Google Play Store */}
                    <button className='w-[150px] h-[56px] flex flex-row justify-center items-center rounded-lg bg-[#FFFFFF] border border-[#090909] gap-[6px]'>
                        <div>
                            <Image
                                src={"/assets/icons/google-play.png"}
                                width={30}
                                height={30}
                                quality={100}
                                alt='google-play-logo'
                            />
                        </div>
                        <div className='flex flex-col gap-0'>
                            <div>
                                <h1 className='text-[16px] text-black font-normal leading-4 tracking-tighter text-start'>Google Play</h1>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div className='flex sm:hidden h-[400px] relative'>
                <Image
                    src={"/assets/images/cta-illustration-mobile.png"}
                    layout="fill"
                    objectFit='cover'
                    quality={100}
                    alt='cta-illustration-mobile'
                    className='rounded-b-[32px]'
                />
            </div>
            {/* Tablet */}
            <div className='hidden sm:flex xl:hidden w-full h-[505px] relative'>
                <Image
                    src={"/assets/images/cta-illustration-tablet.png"}
                    layout="fill"
                    objectFit='fill'
                    quality={100}
                    alt='cta-illustration-tablet'
                    className='rounded-bl-[32px]'
                />
            </div>
            {/* Desktop */}
            <div className='hidden xl:flex w-[629px] h-[480px] relative'>
                <Image
                    src={"/assets/images/cta-illustration-desktop.png"}
                    layout="fill"
                    objectFit='fill'
                    quality={100}
                    alt='cta-illustration-desktop'
                />
            </div>

        </div>
    );
}

export default Cta;
