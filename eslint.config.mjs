import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @type {import('eslint').Linter.Config[]} */
const next = require('eslint-config-next/core-web-vitals');

// React Hooks v7 adds strict compiler-style rules that flag many valid patterns
// (mounted flags, GSAP, mailto, etc.). Keep core-web-vitals but relax those.
const config = [
  ...next,
  {
    rules: {
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/purity': 'off'
    }
  }
];

export default config;
