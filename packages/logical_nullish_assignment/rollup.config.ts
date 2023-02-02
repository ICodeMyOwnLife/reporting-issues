import { defineConfig } from "rollup";
import ts from "rollup-plugin-ts";

const config = defineConfig({
  input: "./src/index.ts",
  output: { dir: "./dist", format: "esm" },
  plugins: [
    ts({
      babelConfig: {
        presets: [
          "@babel/typescript",
          ["@babel/env", { modules: false, targets: ["> 1%"] }],
        ],
      },
      transpiler: {
        typescriptSyntax: "typescript",
        otherSyntax: "babel",
      },
    }),
  ],
});

export default config;
