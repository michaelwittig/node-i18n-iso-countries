import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import fs from "fs";
import copy from "rollup-plugin-copy";

const langModules = fs.readdirSync("./langs").map((langJson) => {
  const lang = langJson.split(".")[0];
  return [
    {
      input: `langs/${lang}.json`,
      output: {
        file: `dist/langs/${lang}.js`,
        format: "cjs",
        exports: "named",
      },
      plugins: [json()],
    },
    {
      input: `langs/${lang}.json`,
      output: {
        file: `dist/langs/${lang}.mjs`,
        format: "es",
      },
      plugins: [
        copy({
          targets: [{ src: `langs/${lang}.json`, dest: `dist/langs` }],
          verbose: true,
        }),
        json(),
      ],
    },
  ];
});

export default [
  {
    input: "src/index.mjs",
    output: {
      file: "dist/index.js",
      format: "cjs",
    },
    plugins: [json()],
  },
  {
    input: "src/entry-node.js",
    output: {
      file: "dist/entry-node.js",
      format: "cjs",
    },
    plugins: [],
  },
  {
    input: "src/index.mjs",
    output: {
      file: "dist/index.mjs",
      format: "es",
    },
    plugins: [json()],
  },
  {
    input: "codes.json",
    output: {
      file: "dist/codes.mjs",
      format: "es",
      exports: "named",
    },
    plugins: [
      json(),
      copy({
        targets: [{ src: "codes.json", dest: "dist" }],
        verbose: true,
      }),
    ],
  },
  {
    input: "codes.json",
    output: {
      file: "dist/codes.js",
      format: "cjs",
    },
    plugins: [json()],
  },
  {
    input: "src/entry-node.js",
    output: {
      file: "dist/entry-node.mjs",
      format: "es",
    },
    plugins: [commonjs(), json()],
  },
  ...langModules.reduce((arr, elem) => [...arr, ...elem], []),
];
