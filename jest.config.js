module.exports = {
  "moduleFileExtensions": ["js", "jsx", "json", "ts", "tsx"],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{ts,js}",
    "!src/routes/**/*.{ts,js}",
    "!src/index.ts",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/coverage/**"
  ],
  "transform": {
    "\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  "coverageReporters": [
    "text",
    "text-summary"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(unit|spec))\\.(js|ts)x?$",
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/build/",
    "/coverage/"
  ]
}
