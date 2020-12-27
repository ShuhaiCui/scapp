module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["./testenv.js"],
  moduleNameMapper: {
    "\\.(html)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
      babelConfig: true,
      tsConfig: "tsconfig.jest.json",
    },
  },
};
