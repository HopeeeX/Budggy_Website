import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/Navbar";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { inter, noto } from "@/lang";

export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "ar" }];
}



export default async function Root({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(params.lang);
	return (
		<body className="">
			<div  className={(params.lang == "en" ? inter.className : noto.className) + " flex flex-col"}>
				<NavBar t={dictionary.navbar} />
				<div>{children}</div>
				<Footer t={dictionary.footer} />
			</div>
		</body>
	);
}
