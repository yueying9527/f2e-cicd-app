import { base } from 'eslint-config-ali';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['**/dist/**', '**/coverage/**', 'node_modules/**', '**/*.d.ts'],
  },
  ...base,
  prettier,
];
