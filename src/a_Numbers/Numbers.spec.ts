import { sum, difference, product } from "./Numbers";

describe("Numbers", () => {
  test("sum() should add two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  test("difference() should subtract two numbers", () => {
    expect(difference(5, 2)).toEqual(3);
  });

  test("product() should multiply two numbers", () => {
    expect(product(5, 2)).toEqual(10);
  });
});
