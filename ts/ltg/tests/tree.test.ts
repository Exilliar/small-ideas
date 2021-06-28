import { NumberNode, OperatorNode } from "../src/tree";

describe("basic trees (1 level)", () => {
  it("should calc 1 v 0 = 1", () => {
    const num1 = new NumberNode({ val: true });
    const num2 = new NumberNode({ val: false });
    const op = new OperatorNode(num1, num2, "v");
    const actual = op.calcRes();
    const expected = true;

    expect(actual).toBe(expected);
  });
  it("should calc 1 ^ 0 = 0", () => {
    const num1 = new NumberNode({ val: true });
    const num2 = new NumberNode({ val: false });
    const op = new OperatorNode(num1, num2, "^");
    const actual = op.calcRes();
    const expected = false;

    expect(actual).toBe(expected);
  });
});

describe("more complex trees (2 levels)", () => {
  it("should calc (1 v 0) ^ 1 = 1", () => {
    const num1 = new NumberNode({ val: true });
    const num2 = new NumberNode({ val: false });
    const num3 = new NumberNode({ val: true });

    const op1 = new OperatorNode(num1, num2, "v");
    const op2 = new OperatorNode(op1, num3, "^");

    const actual = op2.calcRes();
    const expected = true;

    expect(actual).toBe(expected);
  });
  it("should calc (1 v 0) ^ 0 = 0", () => {
    const num1 = new NumberNode({ val: true });
    const num2 = new NumberNode({ val: false });
    const num3 = new NumberNode({ val: false });

    const op1 = new OperatorNode(num1, num2, "v");
    const op2 = new OperatorNode(op1, num3, "^");

    const actual = op2.calcRes();
    const expected = false;

    expect(actual).toBe(expected);
  });
  it("should calc (1 v 0) ^ (1 ^ 0) = 0", () => {
    const num1 = new NumberNode({ val: true });
    const num2 = new NumberNode({ val: false });
    const num3 = new NumberNode({ val: true });
    const num4 = new NumberNode({ val: false });

    const op1 = new OperatorNode(num1, num2, "v");
    const op2 = new OperatorNode(num3, num4, "^");
    const op3 = new OperatorNode(op1, op2, "^");

    const actual = op3.calcRes();
    const expected = false;

    expect(actual).toBe(expected);
  });
});
