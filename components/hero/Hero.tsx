import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='page flex flex-col justify-end items-center w-full pt-[130px] md:h-[100vh] md:justify-center'>
            <div className='flex flex-col items-center px-[5px] sm:px-[20px] lg:px-0'>
                <h1 className='text-[56px] md:text-[64px] font-bold text-black text-center xs:px-[20px] leading-[68px]'>Name Your Price. Get Your Deal.</h1>
                <h2 className='text-[16px] font-normal text-black text-center pt-[4px]'>Tell us what you want and how much you want to pay, we'll negotiate with every store for you — that's it!</h2>
            </div>
            <div className='flex flex-col sm:flex-row gap-[16px] justify-center items-center mt-[24px]'>
                <div>
                    <h2 className='text-[#F79400] text-[16px] font-bold tracking-widest text-center'>
                        COMING SOON ON
                    </h2>
                </div>
                <div className='flex flex-row gap-[12px]'>
                    <div className='w-[120px] h-[44px] flex flex-row justify-center items-center rounded-[10px] bg-black gap-[4px]'>
                        <div>
                            <Image
                                src={"/assets/icons/apple-logo-white.png"}
                                width={24}
                                height={24}
                                quality={100}
                                alt='apple-logo'
                            />
                        </div>
                        <div className='flex flex-col gap-0'>
                            {/* <div>
                                <h2 className='text-white text-[7px] font-normal tracking-tighter'>Download on the</h2>
                            </div> */}
                            <div>
                                <h1 className='text-[15px] text-white font-normal leading-4 tracking-tighter'>App Store</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[120px] h-[44px] flex flex-row justify-center items-center rounded-[10px] bg-black gap-[4px]'>
                        <div>
                            <Image
                                src={"/assets/icons/google-play.png"}
                                width={24}
                                height={24}
                                quality={100}
                                alt='google-play-logo'
                            />
                        </div>
                        <div className='flex flex-col gap-0'>
                            {/* <div>
                                <h2 className='text-white text-[7px] font-normal tracking-tighter'>GET IT ON</h2>
                            </div> */}
                            <div>
                                <h1 className='text-[15px] text-white font-normal leading-4 tracking-tighter'>Google Play</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[10px]'>
                <Image
                    src={"/assets/images/banner-illustration.png"}
                    quality={100}
                    alt='Banner Illustration'
                    layout="responsive"
                    objectFit='cover'
                    objectPosition='absolute'
                    width={1400}
                    height={800}
                />
            </div>
        </div>
    )
}

export default Hero
