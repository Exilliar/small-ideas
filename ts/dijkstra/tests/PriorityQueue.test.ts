import PriorityQueue from "../src/PriorityQueue";
import Node from "../src/Node";

describe("Priority Queue", function () {
  // create nodes
  let a = new Node("A");
  let b = new Node("B");
  let c = new Node("C");

  // add distTo values
  a.distTo = 5;
  b.distTo = 3;
  c.distTo = 4;

  it("should initialise correctly", function () {
    let queue = new PriorityQueue(a);

    expect(queue.all).toEqual([a]);
  });

  describe("add", function () {
    it("should add single", function () {
      let queue = new PriorityQueue(a);

      queue.add(b, (a, b) => a.distTo < b.distTo);

      expect(queue.all).toEqual([b, a]);
    });

    it("should add multiple", function () {
      let queue = new PriorityQueue(b);

      queue.add(a, (a, b) => a.distTo < b.distTo);
      queue.add(c, (a, b) => a.distTo < b.distTo);

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
      queue.add(b, (a, b) => a.distTo < b.distTo);

      queue.top;

      expect(queue.all).toEqual([a]);
    });
  });
});
