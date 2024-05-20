import React from 'react'
import { CiMail, CiLocationOn } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='contact w-full contact-bg flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col xl:flex-row xl:gap-[80px] justify-center px-[5vw] mb-[48px]'>
                <div className='flex flex-col'>
                    <h1 className='text-[48px] font-bold text-white text-start leading-[64px]'>Have questions? <br /> Feel free to reach out.</h1>
                    <div className='flex flex-row justify-start items-center gap-[4px] mt-[20px]'>
                        <CiMail size={23} color='white' />
                        <h3 className='text-[18px] font-medium text-white'>engage@budggy.com</h3>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-[4px] mt-[16px]'>
                        <PiPhoneThin size={23} color='white' />
                        <h3 className='text-[18px] font-medium text-white'>+1 (628) 200-4022</h3>
                    </div>
                    <div className='flex flex-row justify-start items-start gap-[4px] mt-[16px]'>
                        <CiLocationOn size={23} color='white' />
                        <h3 className='text-[18px] font-medium text-white'>2261 Market Street<br />San Francisco, CA 94114<br /> United States</h3>
                    </div>
                    {/*Socials*/}
                    <div className="flex flex-row justify-start items-center gap-[12px] mt-[18px]">
                        <div>
                            <h2 className="text-white font-semibold text-[16px]">Follow us on</h2>
                        </div>
                        <div className="flex flex-row gap-[16px] justify-center items-center">
                            <a href="https://www.linkedin.com/company/budggy/">
                                <FaLinkedin size={21} color="white" />
                            </a>
                            <a href="https://twitter.com/BudggyHQ">
                                <FaXTwitter size={21} color="white" />
                            </a>
                            <a href="https://www.instagram.com/budggyhq/">
                                <FaInstagram size={23} color="white" />
                            </a>
                        </div>
                    </div>
                </div>

                <form className='mt-[40px] xl:w-[610px]'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[14px] font-normal text-white'>Name</label>
                        <input
                            id='name'
                            type='text'
                            placeholder='Your name'
                            className='px-[15px] tracking-wide h-[52px] bg-white rounded-lg border border-[#00000014] border-opacity-80 focus:outline-none text-[16px] font-normal' />
                    </div>
                    <div className='flex flex-col gap-1 mt-[20px]'>
                        <label className='text-[14px] font-normal text-white'>Email Address</label>
                        <input
                            id='email'
                            type='text'
                            placeholder='Your email address'
                            className='px-[15px] tracking-wide h-[52px] bg-white rounded-lg border border-[#00000014] border-opacity-80 focus:outline-none text-[16px] font-normal' />
                    </div>
                    <div className='flex flex-col gap-1 mt-[20px]'>
                        <label className='text-[14px] font-normal text-white'>Message</label>
                        <textarea
                            id='message'
                            placeholder='Write us a message...'
                            className='input-top-left tracking-wide h-[172px] bg-white rounded-lg border border-[#00000014] border-opacity-80 focus:outline-none text-[16px] font-normal text-start' />
                    </div>
                    <div className='w-full mt-[20px] justify-end items-end button-container'>
                        <button className='bg-[#F79400] w-[162px] h-[52px] justify-center items-center rounded-xl text-white text-[16px] font-medium'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

