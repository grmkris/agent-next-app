import "@/env/web";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  reactCompiler: true,
  typedRoutes: true,
};

export default nextConfig;
