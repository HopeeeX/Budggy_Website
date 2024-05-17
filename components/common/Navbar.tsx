import React from 'react';
import Image from 'next/image'
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from './buttons/DropDown';

const NavBar = () => {

    return (
        <nav className='w-full h-[123px] lg:h-[88px] bg-transparent flex flex-col justify-center items-center px-[10px] sm:px-[20px] lg:px-0'>
            <div className='w-full flex flex-col justify-center items-center gap-[12px]'>
                <div className='w-full flex flex-col justify-center items-end lg:hidden'>
                    <DropDown />
                </div>
                <div className="w-full flex flex-row justify-between lg:justify-center items-center lg:gap-[216px] xl:gap-[598px]">
                    {/*Logo*/}
                    <div className="w-[114px] h-[50px] lg:w-[147px] lg:h-[64px] relative">
                        <Image
                            src={"/assets/images/budggy-primary-logo.png"}
                            layout="fill"
                            objectFit='contain'
                            quality={75}
                            alt='budggy-logo'
                        />
                    </div>
                    {/*Details*/}
                    <div className="flex flex-row gap-[24px]">
                        {/*Socials*/}
                        <div className="hidden sm:flex flex-row justify-center items-center gap-[6px]">
                            <div>
                                <h2 className="text-black font-semibold text-[14px]">Follow us on</h2>
                            </div>
                            <div className="flex flex-row gap-[16px] justify-center items-center">
                                <a href="https://www.linkedin.com/company/budggy/">
                                    <FaLinkedin size={21} color="#050505" />
                                </a>
                                <a href="https://twitter.com/BudggyHQ">
                                    <FaXTwitter size={21} color="#050505" />
                                </a>
                                <a href="https://www.instagram.com/budggyhq/">
                                    <FaInstagram size={23} color="#050505" />
                                </a>
                            </div>
                        </div>
                        {/*Button*/}
                        <div>
                            <button className="bg-[#F79400] w-[142px] h-[51px] rounded-xl text-white text-[16px] font-medium">
                                Get in Touch
                            </button>
                        </div>
                        {/*Multilingual-lgScreen*/}
                        <div className='hidden lg:flex'>
                            <DropDown />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
