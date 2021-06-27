import PriorityQueue from "../src/PriorityQueue";
import Node from "../src/Node";

describe("Priority Queue", function () {
  // create nodes
  let a = new Node("A", 21, 0);
  let b = new Node("B", 14);
  let c = new Node("C", 18);

  // add distTo values
  b.distTo = 3;
  c.distTo = 2;

  it("should initialise correctly", function () {
    let queue = new PriorityQueue(a);

    expect(queue.all).toEqual([a]);
  });

  describe("add", function () {
    it("should add single", function () {
      let queue = new PriorityQueue(a);

      queue.add(b);

      expect(queue.all).toEqual([b, a]);
    });

    it("should add multiple", function () {
      let queue = new PriorityQueue(b);

      queue.add(a);
      queue.add(c);

      expect(queue.all).toEqual([b, c, a]);
    });
  });

  describe("top", function () {
    it("should return the correct value", function () {
      let queue = new PriorityQueue(b);

      const actual = queue.top;
      const expected = b;

      expect(actual).toEqual(expected);
    });
    it("should remove the element", function () {
      let queue = new PriorityQueue(a);
      queue.add(b);

      queue.top;

      expect(queue.all).toEqual([a]);
    });
  });
});
