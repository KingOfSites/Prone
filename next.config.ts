import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // A home do usuário é um repo git com outro lockfile; fixa o root neste projeto.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
