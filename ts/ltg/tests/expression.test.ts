import { NumberNode, OperatorNode, TreeController } from "../src/tree";

describe("basic expresssion (one operator)", () => {
  it("should properly convert AvB --> head = ON(NN(A),NN(B),'v')", () => {
    const controller = new TreeController("AvB");
    const actual = controller.head;
    const expected = new OperatorNode(
      new NumberNode({ letter: "A" }),
      new NumberNode({ letter: "B" }),
      "v"
    );

    expect(actual).toEqual(expected);
  });
  it("should properly convert A^B --> head = ON(NN(A),NN(B),'^')", () => {
    const controller = new TreeController("A^B");
    const actual = controller.head;
    const expected = new OperatorNode(
      new NumberNode({ letter: "A" }),
      new NumberNode({ letter: "B" }),
      "^"
    );

    expect(actual).toEqual(expected);
  });
});

describe("more complex expressions (multiple operators)", () => {
  it("should properly convert AvB^C --> head = ON(ON(NN(A), NN(B), 'v'),NN(C), '^')", () => {
    const controller = new TreeController("AvB^C");
    const actual = controller.head;
    const expected = new OperatorNode(
      new OperatorNode(
        new NumberNode({ letter: "A" }),
        new NumberNode({ letter: "B" }),
        "v"
      ),
      new NumberNode({ letter: "C" }),
      "^"
    );

    expect(actual).toEqual(expected);
  });
});
