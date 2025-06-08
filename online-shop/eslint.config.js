import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import next from 'eslint-config-next'

export default [
  ...next,
  ...eslintPluginPrettierRecommended,
]
