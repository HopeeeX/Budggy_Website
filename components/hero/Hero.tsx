'use client'
import React from "react";
import Image from "next/image";
import { useParams } from 'next/navigation';

interface HeroProps {
	t: {
		title: string;
		subtitle: string;
		comingSoonText: string;
		appStoreText: string;
		googlePlayText: string;
	};
}

const Hero: React.FC<HeroProps> = ({ t }) => {
	const { lang } = useParams()

	return (
		<div className="page flex flex-col justify-end items-center w-full pt-[130px] md:h-[100vh] md:justify-center">
			<div className="flex flex-col items-center px-[5px] sm:px-[20px] lg:px-0">
				<h1 className=" fadeInUp text-[56px] md:text-[64px] font-bold text-black text-center xs:px-[20px] leading-[68px]">
					{t.title}
				</h1>
				<h2 className="fadeInUp text-[16px] font-normal text-black text-center pt-[4px]">
					{t.subtitle}
				</h2>
			</div>
			<div className={`flex flex-col ${lang == "en" ? "sm:flex-row" : "sm:flex-row-reverse"} gap-[16px] justify-center items-center mt-[24px]`}>
				<div>
					<h2 className="fadeInUp-delay text-[#F79400] text-[16px] font-bold tracking-widest text-center">
						{t.comingSoonText}
					</h2>
				</div>
				<div className=" fadeInUp-delay flex flex-row gap-[12px]">
					<div className="w-[120px] h-[44px] flex flex-row justify-center items-center rounded-[10px] bg-black gap-[4px]">
						<div>
							<Image
								src={
									"/assets/icons/apple-logo-white.png"
								}
								width={24}
								height={24}
								quality={100}
								alt="apple-logo"
							/>
						</div>
						<div className="flex flex-col gap-0">
							<div>
								<h1 className="text-[15px] text-white font-normal leading-4 tracking-tighter">
									{t.appStoreText}
								</h1>
							</div>
						</div>
					</div>
					<div className="w-[120px] h-[44px] flex flex-row justify-center items-center rounded-[10px] bg-black gap-[4px]">
						<div>
							<Image
								src={
									"/assets/icons/google-play.png"
								}
								width={24}
								height={24}
								quality={100}
								alt="google-play-logo"
							/>
						</div>
						<div className="flex flex-col gap-0">
							<div>
								<h1 className="text-[15px] text-white font-normal leading-4 tracking-tighter">
									{t.googlePlayText}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[10px]">
				<Image
					src={
						"/assets/images/banner-illustration.png"
					}
					quality={100}
					alt="Banner Illustration"
					layout="responsive"
					objectFit="cover"
					objectPosition="absolute"
					width={1400}
					height={800}
				/>
			</div>
		</div>
	);
};

export default Hero;
