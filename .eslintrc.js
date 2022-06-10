module.exports = {
  env: {
    // allows use of 'module'
    node: true,
    // allows use of 'fetch'
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "react",
    "eslint-plugin-react-hooks",
    "@typescript-eslint/eslint-plugin",
  ],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
  },
};
