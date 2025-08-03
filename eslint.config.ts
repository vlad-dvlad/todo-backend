import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier, 
  {
    ignores: ['prisma/**', 'generated/**'],
  },
  {
  files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
  languageOptions: {
    globals: globals.node,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
  },
})
