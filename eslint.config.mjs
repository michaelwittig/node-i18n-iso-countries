import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import json from "@eslint/json";

export default defineConfig([
  {
    name: "ESLint JS - Recommended",
    files: ["**/*.js"],
    ...js.configs.recommended,
    ...eslintPluginPrettierRecommended,
  },
  {
    name: 'ESLint - JS - Globals',
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
  {
    name: 'ESLint - Mocha',
    files: ["test/**"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
  {
    name: 'ESLint - JSON Plugin',
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
]);
