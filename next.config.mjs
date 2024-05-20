import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true
};

const millionConfig = {
	auto: true, // if you're using RSC: auto: { rsc: true },
};
// export default nextConfig
export default million.next(nextConfig, millionConfig);
