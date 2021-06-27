import Node from "../src/Node";
import aStar from "../src/aStar";

// graph used https://www.101computing.net/wp/wp-content/uploads/A-Star-Search-Algorithm-Graph.png
describe("A* basic graph", function () {
  let a: Node;
  let b: Node;
  let c: Node;
  let d: Node;
  let e: Node;
  let f: Node;
  let z: Node;

  beforeEach(function () {
    // create nodes
    a = new Node("A", 21, 0);
    b = new Node("B", 14);
    c = new Node("C", 18);
    d = new Node("D", 18);
    e = new Node("E", 5);
    f = new Node("F", 8);
    z = new Node("Z", 0);

    // create paths
    a.paths.push({ node: b, distance: 9 });
    a.paths.push({ node: c, distance: 4 });
    a.paths.push({ node: d, distance: 7 });

    b.paths.push({ node: a, distance: 9 });
    b.paths.push({ node: e, distance: 11 });

    c.paths.push({ node: a, distance: 4 });
    c.paths.push({ node: e, distance: 17 });
    c.paths.push({ node: f, distance: 12 });

    d.paths.push({ node: a, distance: 7 });
    d.paths.push({ node: f, distance: 14 });

    e.paths.push({ node: b, distance: 11 });
    e.paths.push({ node: c, distance: 17 });
    e.paths.push({ node: z, distance: 5 });

    f.paths.push({ node: c, distance: 12 });
    f.paths.push({ node: d, distance: 14 });
    f.paths.push({ node: z, distance: 9 });

    z.paths.push({ node: e, distance: 5 });
    z.paths.push({ node: f, distance: 9 });
  });

  it("should calculate the correct route", function () {
    const actual = aStar(a, z).path;
    const expected = [a, c, f, z];

    expect(actual).toEqual(expected);
  });

  it("should visit the correct number of nodes", function () {
    const acutal = aStar(a, z).nodesVisited;
    const expected = 6;

    expect(acutal).toBe(expected);
  });
});

// graph used from https://www.youtube.com/watch?v=ySN5Wnu88nE
describe("A* more complex graph", function () {
  let a: Node;
  let b: Node;
  let c: Node;
  let d: Node;
  let e: Node;
  let f: Node;
  let g: Node;
  let h: Node;
  let i: Node;
  let j: Node;
  let k: Node;
  let l: Node;
  let s: Node;

  beforeEach(function () {
    // create all nodes
    a = new Node("A", 9);
    b = new Node("B", 7);
    c = new Node("C", 8);
    d = new Node("D", 8);
    e = new Node("E", 0);
    f = new Node("F", 6);
    g = new Node("G", 3);
    h = new Node("H", 6);
    i = new Node("I", 4);
    j = new Node("J", 4);
    k = new Node("K", 3);
    l = new Node("L", 6);
    s = new Node("S", 10, 0);

    // create paths
    a.paths.push({ node: s, distance: 7 });
    a.paths.push({ node: b, distance: 3 });
    a.paths.push({ node: d, distance: 4 });

    b.paths.push({ node: s, distance: 2 });
    b.paths.push({ node: a, distance: 3 });
    b.paths.push({ node: d, distance: 4 });
    b.paths.push({ node: h, distance: 1 });

    c.paths.push({ node: s, distance: 3 });
    c.paths.push({ node: l, distance: 2 });

    d.paths.push({ node: a, distance: 4 });
    d.paths.push({ node: b, distance: 4 });
    d.paths.push({ node: f, distance: 5 });

    e.paths.push({ node: g, distance: 2 });
    e.paths.push({ node: k, distance: 5 });

    f.paths.push({ node: d, distance: 5 });
    f.paths.push({ node: h, distance: 3 });

    g.paths.push({ node: h, distance: 2 });
    g.paths.push({ node: e, distance: 2 });

    h.paths.push({ node: b, distance: 1 });
    h.paths.push({ node: f, distance: 3 });
    h.paths.push({ node: g, distance: 2 });

    i.paths.push({ node: l, distance: 4 });
    i.paths.push({ node: j, distance: 6 });
    i.paths.push({ node: k, distance: 4 });

    j.paths.push({ node: l, distance: 4 });
    j.paths.push({ node: i, distance: 6 });
    j.paths.push({ node: k, distance: 4 });

    k.paths.push({ node: i, distance: 4 });
    k.paths.push({ node: j, distance: 4 });
    k.paths.push({ node: e, distance: 5 });

    l.paths.push({ node: c, distance: 2 });
    l.paths.push({ node: i, distance: 4 });
    l.paths.push({ node: j, distance: 4 });

    s.paths.push({ node: a, distance: 7 });
    s.paths.push({ node: b, distance: 2 });
    s.paths.push({ node: c, distance: 3 });
  });

  it("should calculate the correct path", function () {
    const actual = aStar(s, e).path;
    const expected = [s, b, h, g, e];

    expect(actual).toEqual(expected);
  });

  it("should check the correct number of nodes", function () {
    const actual = aStar(s, e).nodesVisited;
    const expected = 4;

    expect(actual).toBe(expected);
  });
});
