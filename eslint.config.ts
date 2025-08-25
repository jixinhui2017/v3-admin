import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  // ignores 配置
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/public/**",
      "*.css",
      "*.jpg",
      "*.jpeg",
      "*.png",
      "*.gif",
      "*.d.ts",
    ],
  },
  // 放最后一项，覆盖掉 eslint 的格式化规范
  eslintPluginPrettierRecommended,
]);
