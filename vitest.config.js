import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text'], // show coverage report only in the terminal
      all: true, // to include files with 0 coverage in the coverage report
      include: ['src/**/*.js'],
      exclude: [
        'node_modules/**',
        'tests/**',
      ],
    },
  },
})
