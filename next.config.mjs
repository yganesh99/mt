/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbo: {
			moduleIdStrategy: 'deterministic',
		},
	},
};

export default nextConfig;
