module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
};
