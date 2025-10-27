import type {NextConfig} from "next";
import invariant from "tiny-invariant";

const nextConfig: NextConfig = {
  reactCompiler: true,
};
export default nextConfig;

invariant(
  process.env.GROQ_API_KEY,
  "Environment variable GROQ_API_KEY is missing",
);

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GROQ_API_KEY: string;
    }
  }
}
