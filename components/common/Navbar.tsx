'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import DropDown from './buttons/DropDown';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface NavbarProps {
    t: {
        button: string,
        socials: string
    }
}

const Navbar: React.FC<NavbarProps> = ({ t }) => {
    const { lang } = useParams()
    const [color, setColor] = useState('');
    const [hideMultilingual, setHideMultilingual] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 20) {
                setColor('bg-white bg-opacity-90');
                setHideMultilingual(true);
                setScrolling(true);
            } else {
                setColor('');
                setHideMultilingual(false);
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClickScroll = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${scrolling ? 'h-[64px]' : 'h-[123px]'} lg:h-[88px] z-10 w-full flex flex-col justify-center items-center px-[10px] sm:px-[20px] lg:px-0 fixed transition-all md:transition-colors  duration-300 ease-in-out ${color}`}>
            <div className={`w-full flex flex-col justify-center items-center gap-[12px]`}>
                {/* Multilingual-sm-Screen */}
                <div className={`w-full flex flex-col justify-center items-end lg:hidden transition-opacity duration-300 ${hideMultilingual ? 'hidden' : 'lg:flex'}`}>
                    <div className='flex flex-row gap-2'>
                        <Link className='text-[15px] underline' href={'/en/'}>English</Link>
                        <Link className='text-[15px] underline' href={'/ar/'}>العربية</Link>
                    </div>
                </div>
                <div className={`w-full flex ${lang == "en" ? "flex-row" : "flex-row-reverse"} justify-between lg:justify-center items-center lg:gap-[216px] xl:gap-[598px]`}>
                    {/* Logo */}
                    <div onClick={() => {location.reload()}} className={`${scrolling ? 'w-[114px] h-[40px] lg:w-[120px] lg:h-[50px]' : 'w-[114px] h-[50px] lg:w-[147px] lg:h-[64px]'} transition-all duration-300 hidden sm:flex relative`}>
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
                    {/* Details */}
                    <div className={`flex ${lang == "en" ? "flex-row" : "flex-row-reverse"} gap-[24px]`}>
                        {/* Button - AR */}
                        <div className={`${lang == "en" ? "hidden" : "flex"}`}>
                            <button className="bg-[#F79400] hover:bg-[#be8632] transition-colors duration-300 ease-in-out w-[114px] h-[31px] md:w-[142px] md:h-[51px] rounded-xl text-white text-[16px] font-medium" onClick={() => handleClickScroll('contact')}>
                                {t.button}
                            </button>
                        </div>
                        {/* Socials */}
                        <div className={`hidden sm:flex ${lang == "en" ? "flex-row" : "flex-row-reverse"} justify-center items-center gap-[6px]`}>
                            <div>
                                <h2 className="text-black font-semibold text-[14px]">{t.socials}</h2>
                            </div>
                            <div className="flex flex-row gap-[16px] justify-center items-center">
                                <a href="https://www.linkedin.com/company/budggy/" className='text-[#050505] hover:text-[#F79400] transition-colors duration-300'>
                                    <FaLinkedin size={21} />
                                </a>
                                <a href="https://twitter.com/BudggyHQ" className='text-[#050505] hover:text-[#F79400] transition-colors duration-300'>
                                    <FaXTwitter size={21} />
                                </a>
                                <a href="https://www.instagram.com/budggyhq/" className='text-[#050505] hover:text-[#F79400] transition-colors duration-300'>
                                    <FaInstagram size={23} />
                                </a>
                            </div>
                        </div>
                        {/* Button */}
                        <div className={`${lang == "en" ? "flex" : "hidden"}`}>
                            <button className="bg-[#F79400] hover:bg-[#be8632] transition-colors duration-300 ease-in-out w-[114px] h-[31px] md:w-[142px] md:h-[51px] rounded-xl text-white text-[16px] font-medium" onClick={() => handleClickScroll('contact')}>
                                {t.button}
                            </button>
                        </div>
                        {/* Multilingual-lg-Screen */}
                        <div className='hidden lg:flex'>
                            <DropDown />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
