import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex flex-col justify-end items-center mt-[10px] lg:mt-[80px]'>
            <div className='flex flex-col items-center px-[5px] sm:px-[20px] lg:px-0'>
                <h1 className='text-[56px] md:text-[64px] font-bold text-black text-center xs:px-[20px]'>Name Your Price. Get Your Deal.</h1>
                <h2 className='text-[16px] font-normal text-black text-center'>Tell us what you want and how much you want to pay, we'll negotiate with every store for you — that's it!</h2>
            </div>
            <div className='flex flex-col sm:flex-row gap-[16px] justify-center items-center mt-[24px]'>
                <div>
                    <h2 className='text-[#F79400] text-[16px] font-bold tracking-widest text-center'>
                        COMING SOON ON
                    </h2>
                </div>
                <div className='flex flex-row gap-[12px]'>
                    <div className='w-[120px] h-[44px] relative'>
                        <Image
                            src={"/assets/images/appStore-blackBg.png"}
                            layout="fill"
                            objectFit='contain'
                            quality={75}
                            alt='appStore-black'
                        />
                    </div>
                    <div className='w-[120px] h-[44px] relative'>
                        <Image
                            src={"/assets/images/googlePlay-blackBg.png"}
                            layout="fill"
                            objectFit='contain'
                            quality={75}
                            alt='googlePlay-black'
                        />
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={"/assets/images/banner-illustration.png"}
                    quality={75}
                    alt='Banner Illustration'
                    layout="responsive"
                    width={1400}
                    height={800}
                />
            </div>
        </div>
    )
}

export default Hero
