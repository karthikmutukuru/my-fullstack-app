// .eslintrc.js
module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    env: {
      node: true,
      es2021: true
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  };
  