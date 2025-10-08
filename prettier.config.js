/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  bracketSameLine: true,
  bracketSpacing: false,
  tailwindFunctions: ["cn"],
  plugins: ["prettier-plugin-tailwindcss"],
};
export default config;
