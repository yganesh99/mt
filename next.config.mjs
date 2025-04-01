/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbo: {
			moduleIdStrategy: 'deterministic',
		},
	},
	images: {
		domains: ['images.unsplash.com', 'cdn6.f-cdn.com'], // Allow images from Unsplash
	},
};

export default nextConfig;
