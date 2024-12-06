module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/vue3-recommended' // Use Vue 3 rules
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'vue/no-multiple-template-root': 'off', // Disable the rule
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
