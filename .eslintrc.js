module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "standard",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  globals: {
    __DEV__: "readonly",
    INDEX_URL: "readonly",
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __SENTRY_URL__: "readonly",
    __APP_VERSION__: "readonly",
    __GIT_REVISION__: "readonly",
    __NIGHTLY__: "readonly",
    __static: "readonly",
    $: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "flowtype", "jest"],
  rules: {
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "no-prototype-builtins": 0,
    "promise/param-names": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["react", "react-hooks", "@typescript-eslint"],
      extends: [
        "plugin:react/recommended",
        "standard",
        "plugin:prettier/recommended",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "space-before-function-paren": 0,
        "no-prototype-builtins": 0,
        "promise/param-names": 0,
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "flowtype/no-types-missing-file-annotation": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
