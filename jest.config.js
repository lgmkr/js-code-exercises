module.exports = {
  moduleFileExtensions: ["js"],
  roots: ["<rootDir>"],
  testEnvironment: "node",
  testRegex: "(\\.|/)(test|spec)\\.js?$",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
