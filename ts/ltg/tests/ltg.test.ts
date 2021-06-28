import { LtgNode, NumberNode, OperatorNode } from "../src/tree";

describe("basic trees (1 level)", function () {
  it("should calc 1 v 0 = 1", function () {
    const num1 = new NumberNode(true);
    const num2 = new NumberNode(false);
    const op = new OperatorNode(num1, num2, "v");
    const actual = op.calcRes();
    const expected = true;

    expect(actual).toBe(expected);
  });
  it("should calc 1 ^ 0 = 0", function () {
    const num1 = new NumberNode(true);
    const num2 = new NumberNode(false);
    const op = new OperatorNode(num1, num2, "^");
    const actual = op.calcRes();
    const expected = false;

    expect(actual).toBe(expected);
  });
});

describe("more complex trees (2 levels)", function () {
  it("should calc (1 v 0) ^ 1 = 1", function () {
    const num1 = new NumberNode(true);
    const num2 = new NumberNode(false);
    const num3 = new NumberNode(true);

    const op1 = new OperatorNode(num1, num2, "v");
    const op2 = new OperatorNode(op1, num3, "^");

    const actual = op2.calcRes();
    const expected = true;

    expect(actual).toBe(expected);
  });
  it("should calc (1 v 0) ^ 0 = 0", function () {
    const num1 = new NumberNode(true);
    const num2 = new NumberNode(false);
    const num3 = new NumberNode(false);

    const op1 = new OperatorNode(num1, num2, "v");
    const op2 = new OperatorNode(op1, num3, "^");

    const actual = op2.calcRes();
    const expected = false;

    expect(actual).toBe(expected);
  });
});
