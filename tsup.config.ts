import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",

  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: false,
  minify: false,
  shims: false,
  platform: "neutral",

  outExtension({ format }) {
    return {
      js: format === "cjs" ? `.cjs` : `.js`,
    };
  },
});
