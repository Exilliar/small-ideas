import calcChips from "../src/calcChips";
import ChipTotal from "../src/models/ChipTotal.model";

describe("calcChips", function () {
  it("returns correct chips", function () {
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
});
