const strings = require("./main");
describe("string length tests", () => {
  test("returns the length of five", () => {
    expect(strings.length("five")).toBe(4);
  });

  test("returns the length of ten As", () => {
    expect(strings.length("aaaaaaaaaa")).toBe(10);
  });
});

describe("reverse string tests", () => {
  test("returns a reversed string test1", () => {
    expect(strings.reverse("hello")).toMatch("olleh");
  });
  test("returns a reversed string test2", () => {
    expect(strings.reverse("wahid")).toMatch("dihaw");
  });
});
