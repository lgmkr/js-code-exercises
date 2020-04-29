const simple = require("./simple");
const optimized = require("./solution");
describe("Simple approach", () => {
  it("should include string 5 times", () => {
    expect(simple("abb", "b")).toEqual(5);
  });
});
describe("Optimized approach", () => {
  it("should include string 5 times", () => {
    expect(optimized("abb", "b")).toEqual(5);
  });
});
