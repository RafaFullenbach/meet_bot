/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['flagpedia.net'],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/signIn',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  