import React from 'react'
import { CiMail, CiLocationOn } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import FadeInSection from '../about/FadeInSection';
import { useParams } from 'next/navigation';

interface ContactProps {
    t: {
        title : string,
		socials : string,
		name : string,
		nameFieldPlaceholder : string,
		emailAddress : string,
		emailAddressFieldPlaceholder : string,
		mesage : string,
		messageFieldPlaceholder: string,
		button : string,
    }
}

const Contact: React.FC<ContactProps> = ({ t }) => {
    return (
        <FadeInSection animation='fade-in-top'>
            <div className='contact w-full contact-bg flex flex-col justify-center items-center' id='contact'>
                <div className='w-full flex flex-col xl:flex-row xl:gap-[80px] justify-center px-[5vw] mb-[48px]'>
                    <div className='flex flex-col'>
                        <h1 className='text-[48px] font-bold text-white text-start leading-[64px]' dangerouslySetInnerHTML={{__html: t.title}}></h1>
                        <div className='flex flex-row justify-start items-center gap-[4px] mt-[20px]'>
                            <CiMail size={23} color='white' />
                            <Link href="mailto: engage@budggy.com<" className='text-[18px] font-medium text-white'>engage@budggy.com</Link>
                        </div>
                        <div className='flex flex-row justify-start items-center gap-[4px] mt-[16px]'>
                            <PiPhoneThin size={23} color='white' />
                            <Link href="tel:+1(628)200-4022" className='text-[18px] font-medium text-white'>+1 (628) 200-4022</Link>
                        </div>
                        <div className='flex flex-row justify-start items-start gap-[4px] mt-[16px]'>
                            <CiLocationOn size={23} color='white' />
                            <h3 className='text-[18px] font-medium text-white'>2261 Market Street<br />San Francisco, CA 94114<br /> United States</h3>
                        </div>
                        {/*Socials*/}
                        <div className="flex flex-row justify-start items-center gap-[12px] mt-[18px]">
                            <div>
                                <h2 className="text-white font-semibold text-[16px]">{t.socials}</h2>
                            </div>
                            <div className="flex flex-row gap-[16px] justify-center items-center">
                                <Link href="https://www.linkedin.com/company/budggy/">
                                    <FaLinkedin size={21} color="white" />
                                </Link>
                                <Link href="https://twitter.com/BudggyHQ">
                                    <FaXTwitter size={21} color="white" />
                                </Link>
                                <Link href="https://www.instagram.com/budggyhq/">
                                    <FaInstagram size={23} color="white" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <form className='mt-[40px] xl:w-[610px]'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-[14px] font-normal text-white'>{t.name}</label>
                            <input
                                id='name'
                                type='text'
                                placeholder={t.nameFieldPlaceholder}
                                className='px-[15px] tracking-wide h-[52px] bg-white rounded-lg border border-[#00000014] border-opacity-80 focus:outline-none text-[16px] font-normal' />
                        </div>
                        <div className='flex flex-col gap-1 mt-[20px]'>
                            <label className='text-[14px] font-normal text-white'>{t.emailAddress}</label>
                            <input
                                id='email'
                                type='text'
                                placeholder={t.emailAddressFieldPlaceholder}
                                className='px-[15px] tracking-wide h-[52px] bg-white rounded-lg border border-[#00000014] border-opacity-80 focus:outline-none text-[16px] font-normal' />
                        </div>
                        <div className='flex flex-col gap-1 mt-[20px]'>
                            <label className='text-[14px] font-normal text-white'>{t.mesage}</label>
                            <textarea
                                id='message'
                                placeholder={t.messageFieldPlaceholder}
                                className='input-top-left tracking-wide h-[172px] bg-white rounded-lg border border-[#00000014] border-opacity-80 focus:outline-none text-[16px] font-normal text-start' />
                        </div>
                        <div className='w-full mt-[20px] justify-end items-end button-container'>
                            <button className='bg-[#F79400] w-[162px] h-[52px] justify-center items-center rounded-xl text-white text-[16px] font-medium'>{t.button}</button>
                        </div>
                    </form>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Contact

