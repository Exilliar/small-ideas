import ChipTotals from "../src/ChipTotals";

describe("ChipTotals", function () {
  let chipTotals = new ChipTotals();

  beforeEach(function () {
    chipTotals = new ChipTotals();
  });

  it("should add a new chip when the chip does not exist", function () {
    chipTotals.addChip(100);
    chipTotals.addChip(200);

    expect(chipTotals.chips.length).toBe(2);
  });

  it("should increment the count of a value when duplicate values are added", function () {
    chipTotals.addChip(100);
    chipTotals.addChip(100);

    expect(chipTotals.chips.length).toBe(1);
  });
});
