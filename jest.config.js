/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  jest: {
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },
};
