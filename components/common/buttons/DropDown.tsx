'use client'
import { useState } from 'react';
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

const DropDown = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col justify-center items-center relative text-left z-20">
            {/*Dropdown Button*/}
            <div>
                <button className="w-[107px] h-[37px] rounded-lg bg-[#FBFBFB] flex flex-row justify-center items-center gap-[5px] border border-[#ECECEC] hover:bg-slate-200" onClick={toggleMenu}>
                    <div>
                        <Image
                            src={"/assets/icons/globe.png"}
                            width={20}
                            height={20}
                            quality={75}
                            alt="globe-icon"
                        />
                    </div>
                    <div>
                        <h3 className="text-[#050505] font-medium text-[14px]">English</h3>
                    </div>
                    <div className="mt-[2px]">
                        <IoIosArrowDown size={14} color="#757780" />
                    </div>
                </button>
            </div>
            {/*Dropdown Options*/}
            {isOpen && (
                <div className='w-[107px] absolute top-[50px] right-0 z-10 py-2 px-4 rounded-md bg-[#FBFBFB] shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                        <Link href={"/en/"} className='flex flex-row justify-start items-center gap-[5px]'>
                            <div>
                                <Image
                                    src={"/assets/icons/english.png"}
                                    width={20}
                                    height={20}
                                    quality={75}
                                    alt="country_icon"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#050505] font-medium text-[14px]">English</h3>
                            </div>
                        </Link>
                        <Link href={"/ar/"} className='flex flex-row justify-start items-center gap-[5px]'>
                            <div>
                                <Image
                                    src={"/assets/icons/jordan.png"}
                                    width={20}
                                    height={20}
                                    quality={75}
                                    alt="country_icon"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#050505] font-medium text-[14px]">العربية</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDown
