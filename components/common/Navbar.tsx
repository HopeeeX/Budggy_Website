'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import DropDown from './buttons/DropDown';

function NavBar(){
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
        
        return (
            <nav className={scrolling ? `navbar-scroll z-10 w-full h-[123px] lg:h-[88px] flex flex-col justify-center items-center px-[10px] sm:px-[20px] lg:px-0 fixed`: `navbar-sticky z-10 w-full h-[123px] lg:h-[88px] flex flex-col justify-center items-center px-[10px] sm:px-[20px] lg:px-0 fixed`}>
                <div className='w-full flex flex-col justify-center items-center gap-[12px]'>
                    {/*Multilingual-sm-Screen*/}
                    <div className='w-full flex flex-col justify-center items-end lg:hidden'>
                        <div className='flex flex-row gap-2'>
                            <button className='text-[15px] underline'>English</button>
                            <button className='text-[15px] underline'>العربية</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-between lg:justify-center items-center lg:gap-[216px] xl:gap-[598px]">
                        {/*Logo*/}
                        <div className="w-[114px] h-[50px] lg:w-[147px] lg:h-[64px] hidden sm:flex relative">
                            <Image
                                src={"/assets/images/budggy-primary-logo.png"}
                                layout="fill"
                                objectFit='contain'
                                quality={100}
                                alt='budggy-logo'
                            />
                        </div>
                        <div className="flex sm:hidden w-[40px] h-[40px] relative">
                            <Image
                                src={"/assets/images/logo-mobile.png"}
                                layout="fill"
                                objectFit='contain'
                                quality={100}
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
                            {/*Multilingual-lg-Screen*/}
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
