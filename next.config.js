/** @type {import('next').NextConfig} */
const remoteImageHosts = [
  'i.scdn.co',
  'image-cdn-ak.spotifycdn.com',
  'blend-playlist-covers.spotifycdn.com',
  'image-cdn-fa.spotifycdn.com',
  'miro.medium.com',
  'cdn-images-1.medium.com'
];

const nextConfig = {
  images: {
    remotePatterns: remoteImageHosts.map((hostname) => ({
      protocol: 'https',
      hostname
    })),
    unoptimized: false
  }
};

export default nextConfig;
