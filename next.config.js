/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.guim.co.uk',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'http',
				hostname: 'static.guim.co.uk',
				port: '',
				pathname: '/**'
			}
		]
	}
}

module.exports = nextConfig
