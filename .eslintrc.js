module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": 0,
    // "no-plusplus": "off",
    // "no-else-return": "off",
    // "no-restricted-properties": "off",
    // "array-callback-return": "off",
    // "no-restricted-globals": "off",
    // "consistent-return": "off",
    // "no-param-reassign": "off",
    // "no-useless-concat": "off",
    // "no-useless-escape": "off",
    // "prefer-template": "off"
  },
};
