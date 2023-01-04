module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "plugin:prettier/recommended",
  ],

  plugins: [
    "@babel",
    "import",
    "sonarjs",
    "security",
    "prettier",
    "jest-dom",
    "jest",
  ],

  parser: "@babel/eslint-parser",

  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  globals: {
    Set: true,
    Map: true,
    WeakSet: true,
    WeakMap: true,
    Symbol: true,
    Promise: true,
    Reflect: true,
    Uint8ClampedArray: true,
    module: true,
  },

  settings: {
    "import/extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".d.ts",
      ".json",
      ".wasm",
    ],
    "import/cache": {
      lifetime: Infinity,
    },
    "import/resolver": {
      node: {},
      typescript: {},
    },
  },

  rules: {
    "linebreak-style": ["error", "unix"],
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "max-lines-per-function": [
      "error",
      { max: 50, skipBlankLines: true, skipComments: true },
    ],
    "max-nested-callbacks": ["error", 3],
    "max-statements": ["warn", 10],
    "max-params": ["warn", 4],
    "max-lines": [
      "warn",
      { max: 200, skipBlankLines: true, skipComments: true },
    ],
    "max-depth": ["warn", 4],
    complexity: ["warn", 5],
    eqeqeq: ["warn", "allow-null"],
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },

  overrides: [
    {
      files: ["**/*.(test|spec).(js|jsx|ts|tsx)"],
      env: { jest: true },
      extends: ["plugin:jest-dom/recommended", "plugin:jest/recommended"],
      globals: {
        MouseEvent: true,
      },
      plugins: ["jest"],
      rules: {
        "jest/prefer-expect-assertions": "warn",
        "no-magic-numbers": "off",
      },
    },
    {
      files: ["scripts/*.js"],
      env: { node: true },
      globals: {
        require: true,
        module: true,
      },
      rules: {
        "no-magic-numbers": "off",
      },
    },
    {
      files: ["jest.config.js"],
      env: { node: true },
      globals: {
        require: true,
        module: true,
      },
      rules: {
        "no-magic-numbers": "off",
      },
    },
  ],
};
