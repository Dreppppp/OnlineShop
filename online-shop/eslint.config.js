import eslintRecommended from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  eslintRecommended.configs.recommended,
  prettierRecommended,
];
