import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	// images: {
	// 	unoptimized: true
	// },
	// output: "export"
};

const millionConfig = {
	auto: true, // if you're using RSC: auto: { rsc: true },
};
// export default nextConfig
export default million.next(nextConfig, millionConfig);
