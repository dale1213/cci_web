/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: isGitHubPages ? "/cci_web" : "",
  assetPrefix: isGitHubPages ? "/cci_web/" : "",
  trailingSlash: true
};

export default nextConfig;
