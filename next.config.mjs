/** @type {import('next').NextConfig} */

// RV Capital – FZCO website configuration.
//
// This project is statically generated (SSG). By default we produce a fully
// static export (the `out/` folder) so the site can be hosted on any static
// host (S3/CloudFront, Netlify, Nginx, GitHub Pages, IFZA hosting, etc.) with
// zero server runtime.
//
// If you deploy to Vercel and want to use server features later (e.g. a real
// contact-form API route with email delivery), simply remove `output: 'export'`
// below. The contact form already has a mailto fallback that works in both modes.
const nextConfig = {
  output: 'export',

  // Static export cannot use the Next.js on-demand Image Optimization server,
  // so we opt out of it. Images are pre-optimized SVG/WebP assets served as-is.
  images: {
    unoptimized: true,
  },

  // Emit clean directory-style URLs (/about/ -> /about/index.html) which are
  // the most portable across static hosts.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
