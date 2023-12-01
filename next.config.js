/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'fakeimg.pl',
                port: '',
            }
        ]
    }
}
