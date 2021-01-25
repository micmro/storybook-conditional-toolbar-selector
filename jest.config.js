module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/config/imports.ts'],
  // DOCS_MODE: false,
  // PREVIEW_URL: undefined,
};
