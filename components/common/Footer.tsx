import React from "react";
// import {colors} from '../../app/colors';  
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation';

interface FooterProps {
    t: {
      termsAndConditions : string,
      privacyPolicy : string,
      copyright : string,
    }
}

const Footer: React.FC<FooterProps> = ({ t }) => {

  return (
    <footer className='w-full'>
      {/*Footer 1*/}
      <div className='bg-white w-full h-[164px] lg:h-[175px] flex flex-col justify-center items-center'>
        {/*Logo & Microsoft*/}
        <div className='flex flex-row justify-center items-center gap-[24px] lg:gap-[32px]'>
          <div className="w-[148px] h-[64px] lg:w-[189px] lg:h-[82px] relative">
            <Image
              src={"/assets/images/budggy-primary-logo.png"}
              layout="fill"
              objectFit='contain'
              quality={100}
              alt='budggy-logo'
            />
          </div>
          <div className="w-[108px] h-[46px] lg:w-[142px] lg:h-[60px] relative">
            <Image
              src={"/assets/images/ms-for-startups-badge.png"}
              layout="fill"
              objectFit='contain'
              quality={100}
              alt='microsoft'
            />
          </div>
        </div>
        {/*Spacer*/}
        <div className="h-[24px]" />
        {/*Links*/}
        <div className='flex flex-row justify-center items-center gap-[12px]'>
          <Link href={""} className='font-normal text-[14px] text-[#050505]'>
            {t.termsAndConditions}
          </Link>
          <Link href={""} className='font-normal text-[14px] text-[#050505]'>
            {t.privacyPolicy}
          </Link>
        </div>
      </div>
      {/*Footer 2*/}
      <div className=" bg-[#481700] w-full h-[39px] flex flex-col justify-center items-center">
        <h2 className='font-normal text-[10px] text-center text-white'>© 2024 Budggy, Inc. | {t.copyright}</h2>
      </div>
    </footer>
  )
}

export default Footer
