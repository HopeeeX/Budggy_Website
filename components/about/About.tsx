import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[50px] md:mt-[80px] lg:mt-[40px] xl:mt-[120px] mb-[20px]'>
            {/*Title*/}
            <h1 className='text-[48px] font-bold text-[#050505] text-center leading-[58px]'>How Buddgy works</h1>
            <div className='flex flex-col xl:flex-row justify-center items-center'>
                {/*Image - Bigger Screens*/}
                <div className='hidden xl:flex w-[587px] h-[601px] relative'>
                    <Image
                        src={"/assets/images/phone-illustration1.png"}
                        layout="fill"
                        objectFit='cover'
                        quality={100}
                        alt='phone-illustration'
                    />
                </div>
                {/*Installation Instructions*/}
                <div className='flex flex-col justify-start items-start'>
                    {/* 1 */}
                    <div className='flex flex-row gap-[20px] mt-[32px] xl:mt-[80px] px-[7vw] md:px-[15vw] xl:px-0 xl:w-[505px]'>
                        {/*Info Number*/}
                        <div>
                            <h2 className="text-[20px] font-bold text-[#F79400] bg-[#FFFBE3] p-[16px] rounded-full">01</h2>
                        </div>
                        {/*Info*/}
                        <div className='flex flex-col'>
                            <h2 className='text-[28px] font-bold text-[#050505] text-start'>Set your price</h2>
                            <h3 className='text-[16px] font-normal text-[#050505] text-start mt-[12px]'>Specify the price you’re willing to pay for your desired electronic items. That’s it! Sit back and relax while Budggy reaches out to each and every store in the nation that has what you want and negotiates on your behalf.</h3>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='flex flex-row gap-[20px] mt-[56px] px-[5vw] md:px-[15vw] xl:px-0 xl:w-[505px]'>
                        {/*Info Number*/}
                        <div>
                            <h2 className="text-[20px] font-bold text-[#F79400] bg-[#FFFBE3] p-[16px] rounded-full">02</h2>
                        </div>
                        {/*Info*/}
                        <div className='flex flex-col'>
                            <h2 className='text-[28px] font-bold text-[#050505] text-start'>Custom alerts</h2>
                            <h3 className='text-[16px] font-normal text-[#050505] text-start mt-[12px]'>Receive notifications when products that match your criteria and price become available. You’ll start receiving offers from sellers across the nation—don’t worry, Budggy will sort them out for you.</h3>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='flex flex-row gap-[20px] mt-[56px] px-[5vw] md:px-[15vw] xl:px-0 xl:w-[505px]'>
                        {/*Info Number*/}
                        <div>
                            <h2 className="text-[20px] font-bold text-[#F79400] bg-[#FFFBE3] p-[16px] rounded-full">03</h2>
                        </div>
                        {/*Info*/}
                        <div className='flex flex-col'>
                            <h2 className='text-[28px] font-bold text-[#050505] text-start'>Receive top offers</h2>
                            <h3 className='text-[16px] font-normal text-[#050505] text-start mt-[12px]'>Instead of browsing, view the best offers curated for you by our proprietary algorithm, ensuring you always get the top deals that match your preferences and price.</h3>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='flex flex-row gap-[20px] mt-[56px] px-[5vw] md:px-[15vw] xl:px-0 xl:w-[505px]'>
                        {/*Info Number*/}
                        <div>
                            <h2 className="text-[20px] font-bold text-[#F79400] bg-[#FFFBE3] p-[16px] rounded-full">04</h2>
                        </div>
                        {/*Info*/}
                        <div className='flex flex-col'>
                            <h2 className='text-[28px] font-bold text-[#050505] text-start'>Easy & safe checkout</h2>
                            <h3 className='text-[16px] font-normal text-[#050505] text-start mt-[12px]'>Complete your purchase directly through Budggy with just a few taps, enjoying secure and swift transactions.</h3>
                        </div>
                    </div>
                </div>
                {/*Image - Smaller Screens*/}
                <div className='flex xl:hidden w-[385px] h-[394px] relative'>
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
    )
}

export default About

