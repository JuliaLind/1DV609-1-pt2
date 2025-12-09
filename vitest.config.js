import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.js'],
    testTimeout: 1500, // try each test for max 1.5 second
    hookTimeout: 1500, // try before/after hooks for max 1.5 second
    teardownTimeout: 1000, // try global teardowns for max 1 second
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      all: true, // to include files with 0 coverage in the coverage report
      include: ['src/**/*.js'],
      exclude: [
        'node_modules/**',
        'tests/**'
      ]
    },
    pool: 'forks'
  }
})
