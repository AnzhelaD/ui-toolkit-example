import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import angularPlugin from "@angular-eslint/eslint-plugin";
import angularTemplatePlugin from "@angular-eslint/eslint-plugin-template";
import prettierPlugin from "eslint-plugin-prettier";

export default [{
  files: ["src/**/*.ts"],
  ignores: [
    "dist/**",
    "node_modules/**",
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ],

  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: ["./tsconfig.eslint.json"],
      tsconfigRootDir: new URL(".", import.meta.url).pathname,
      ecmaVersion: 2022,
      sourceType: "module",
    },
  },

  plugins: {
    "@typescript-eslint": tsPlugin,
    "@angular-eslint": angularPlugin,
    prettier: prettierPlugin,
  },

  rules: {
    ...tsPlugin.configs.recommended.rules,
    ...tsPlugin.configs["recommended-requiring-type-checking"].rules,
    ...angularPlugin.configs.recommended.rules,

    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/consistent-type-imports": "error",
    "prettier/prettier": "error",
  },
}, {
  files: ["src/**/*.html"],

  languageOptions: {
    parser: angularTemplatePlugin.parser,
  },

  plugins: {
    "@angular-eslint/template": angularTemplatePlugin,
  },

  rules: {
    ...angularTemplatePlugin.configs.recommended.rules,
  },
}];
