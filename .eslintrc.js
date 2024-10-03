module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Use this for TypeScript rules
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // Disable all TypeScript rules
    '@typescript-eslint/no-explicit-any': 'off', // Allow any type
    '@typescript-eslint/no-unused-vars': 'off', // Disable unused variable checks
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types on functions and classes
    '@typescript-eslint/no-inferrable-types': 'off', // Disable warnings for inferrable types
    '@typescript-eslint/explicit-function-return-type': 'off', // Disable explicit function return type checks
    // Add other TypeScript rules to disable as needed
  },
};
