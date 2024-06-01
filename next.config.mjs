import MillionLint from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,


	//Comment this section when developing.
	images: {
		unoptimized: true
	},
	output: "export"
};

// export default nextConfig
export default MillionLint.next({ rsc: true })(nextConfig);
