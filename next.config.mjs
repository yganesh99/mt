/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbo: {
			moduleIdStrategy: 'deterministic',
		},
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.target = 'electron-main'; // For Electron main process
		} else {
			config.target = 'electron-renderer'; // For Electron renderer process
		}
		return config;
	},
};

export default nextConfig;
