'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import DropDown from './buttons/DropDown';
import Link from 'next/link';

const NavBar = () => {
    const [color, setColor] = useState('');

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 20) {
                setColor('bg-white');
            } else {
                setColor('');
            }
        };
        window.addEventListener('scroll', changeColor);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    const handleClickScroll = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }

    return (
        <nav className={`z-10 w-full h-[123px] lg:h-[88px] flex flex-col justify-center items-center px-[10px] sm:px-[20px] lg:px-0 fixed transition-colors duration-300 ease-in-out ${color}`}>
            <div className='w-full flex flex-col justify-center items-center gap-[12px]'>
                {/*Multilingual-sm-Screen*/}
                <div className='w-full flex flex-col justify-center items-end lg:hidden'>
                    <div className='flex flex-row gap-2'>
                        <Link className='text-[15px] underline' href={'/en/'}>English</Link>
                        <Link className='text-[15px] underline' href={'/ar/'}>العربية</Link>
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
                                <a href="https://www.linkedin.com/company/budggy/" className='text-[#050505] hover:text-[#F79400] transition-colors duration-300'>
                                    <FaLinkedin size={21}/>
                                </a>
                                <a href="https://twitter.com/BudggyHQ" className='text-[#050505] hover:text-[#F79400] transition-colors duration-300'>
                                    <FaXTwitter size={21}/>
                                </a>
                                <a href="https://www.instagram.com/budggyhq/" className='text-[#050505] hover:text-[#F79400] transition-colors duration-300'>
                                    <FaInstagram size={23}/>
                                </a>
                            </div>
                        </div>
                        {/*Button*/}
                        <div>
                            <button className="bg-[#F79400] hover:bg-[#be8632] transition-colors duration-300 ease-in-out w-[142px] h-[51px] rounded-xl text-white text-[16px] font-medium" onClick={() => handleClickScroll('contact')}>
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
    );
};

export default NavBar;
