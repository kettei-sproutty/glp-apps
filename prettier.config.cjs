/**
 * @type {import('prettier').Config}
 */
const prettierConfig = {
  plugins: [
    require("prettier-plugin-organize-attributes"),
    require("prettier-plugin-organize-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  arrowParens: "avoid",
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: "lf",
  semi: false,
  pluginSearchDirs: false
};

module.exports = prettierConfig;
