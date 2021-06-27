import calcChips from "../src/calcChips";
import ChipTotal from "../src/models/ChipTotal.model";

describe("calcChips", function () {
  it("returns correct chips 1", function () {
    const result = calcChips(25);

    const expected: ChipTotal[] = [
      {
        value: 10,
        total: 2,
      },
      {
        value: 1,
        total: 5,
      },
    ];

    expect(result).toEqual(expected);
  });
  it("returns correct chips 2", function () {
    const result = calcChips(300);

    const expected: ChipTotal[] = [
      {
        value: 200,
        total: 1,
      },
      {
        value: 100,
        total: 1,
      },
    ];

    expect(result).toEqual(expected);
  });
  it("returns correct chips 3", function () {
    const result = calcChips(1051);

    const expected: ChipTotal[] = [
      {
        value: 1000,
        total: 1,
      },
      {
        value: 50,
        total: 1,
      },
      {
        value: 1,
        total: 1,
      },
    ];

    expect(result).toEqual(expected);
  });
});
