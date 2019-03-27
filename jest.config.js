module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js"],
  setupFiles: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: true,
  moduleNameMapper: {
    "\\.(css|svg)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
