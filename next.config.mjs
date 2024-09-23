import withLinaria from "next-with-linaria";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withLinaria(nextConfig);
