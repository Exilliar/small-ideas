import { timeCalculator, add } from "../src/timeCalculator";
import AddRes from "../src/models/AddRes";
import Clock from "../src/Clock";

describe("timeCalculator", function () {
  it("should add seconds", function () {
    const actual = timeCalculator(new Clock(0, 0, 20), new Clock(0, 0, 20));
    const expected = [0, 0, 40];

    expect(actual).toEqual(expected);
  });
  it("should add minutes", function () {
    const actual = timeCalculator(new Clock(0, 20, 0), new Clock(0, 30, 0));
    const expected = [0, 50, 0];

    expect(actual).toEqual(expected);
  });
  it("should add hours", function () {
    const actual = timeCalculator(new Clock(1, 0, 0), new Clock(3, 0, 0));
    const expected = [4, 0, 0];

    expect(actual).toEqual(expected);
  });
  it("should add all (no carry)", function () {
    const actual = timeCalculator(new Clock(1, 20, 20), new Clock(3, 30, 20));
    const expected = [4, 50, 40];

    expect(actual).toEqual(expected);
  });
  it("should add all (carry)", function () {
    const actual = timeCalculator(new Clock(1, 30, 40), new Clock(3, 40, 30));
    const expected = [5, 11, 10];

    expect(actual).toEqual(expected);
  });
  it("should forget carry on the last unit", function () {
    const actual = timeCalculator(new Clock(20, 0, 0), new Clock(4, 0, 0));
    const expected = [0, 0, 0];

    expect(actual).toEqual(expected);
  });
});

describe("add", function () {
  it("should not carry when not needed", function () {
    const actual = add(2, 4, 0, 60);
    const expected: AddRes = {
      val: 6,
      carry: 0,
    };

    expect(actual).toEqual(expected);
  });
  it("should carry when needed", function () {
    const actual = add(30, 40, 0, 60);
    const expected: AddRes = {
      val: 10,
      carry: 1,
    };

    expect(actual).toEqual(expected);
  });
  it("should add the carry to the end value", function () {
    const actual = add(2, 4, 1, 24);
    const expected: AddRes = {
      val: 7,
      carry: 0,
    };

    expect(actual).toEqual(expected);
  });
});
