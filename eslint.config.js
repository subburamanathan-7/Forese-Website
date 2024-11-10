// eslint.config.js
import js from '@eslint/js'; // Import ESLint's recommended configurations
import reactPlugin from 'eslint-plugin-react'; // Import the React plugin

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.js', '**/*.jsx'], // Specify which files to lint
    plugins: {
      react: reactPlugin, // Define the React plugin here
    },
    languageOptions: {
      ecmaVersion: 2021, // Set ECMAScript version
      sourceType: 'module', // Use ES modules
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused vars
      'react/jsx-no-useless-fragment': ['off'], // Warn on unnecessary fragments
    },
  },
];