module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'object-curly-spacing': 'error',
    'array-bracket-spacing': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': ['off', 'always']
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
