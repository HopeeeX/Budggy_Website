import MillionLint from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		unoptimized: true
	},
};

// export default nextConfig
export default MillionLint.next({ rsc: true })(nextConfig);
