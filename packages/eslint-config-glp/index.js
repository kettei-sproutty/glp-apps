/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
}
