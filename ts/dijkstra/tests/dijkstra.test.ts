import dijkstra from "../src/dijkstra";
import Node from "../src/Node";

// link to graph used for tests https://miro.medium.com/max/2944/1*nXlEmHAnu3dVBOnJAfPaAg.jpeg

describe("dijkstra, simple graph", function () {
  let nodes: Node[];
  let a: Node;
  let b: Node;
  let c: Node;
  let d: Node;
  let e: Node;

  beforeEach(function () {
    // create all nodes
    a = new Node("A", 0);
    b = new Node("B");
    c = new Node("C");
    d = new Node("D");
    e = new Node("E");

    // create paths
    a.paths.push({ node: b, distance: 7 });
    a.paths.push({ node: c, distance: 3 });

    b.paths.push({ node: a, distance: 7 });
    b.paths.push({ node: c, distance: 1 });
    b.paths.push({ node: d, distance: 2 });
    b.paths.push({ node: e, distance: 6 });

    c.paths.push({ node: a, distance: 3 });
    c.paths.push({ node: b, distance: 1 });
    c.paths.push({ node: d, distance: 2 });

    d.paths.push({ node: c, distance: 2 });
    d.paths.push({ node: b, distance: 2 });
    d.paths.push({ node: e, distance: 4 });

    e.paths.push({ node: b, distance: 6 });
    e.paths.push({ node: d, distance: 4 });

    // add to nodes array
    nodes = [a, b, c, d, e];
  });

  it("should work out the correct path", function () {
    const actual = dijkstra(nodes, a, d);
    const expected = [a, c, d];

    expect(actual).toEqual(expected);
  });

  it("should work for more complicated paths", function () {
    const actual = dijkstra(nodes, a, e);
    const expected = [a, c, d, e];

    expect(actual).toEqual(expected);
  });

  it("should have the correct final distance in end node", function () {
    const actual1 = dijkstra(nodes, a, d)[2].distTo;
    const expected1 = 5;

    const actual2 = dijkstra(nodes, a, e)[3].distTo;
    const expected2 = 9;

    expect(actual1).toBe(expected1);
    expect(actual2).toBe(expected2);
  });
});

// graph used from https://www.youtube.com/watch?v=GazC3A4OQTE
describe("dijkstra, more complex graph", function () {
  let nodes: Node[];

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
    a = new Node("A");
    b = new Node("B");
    c = new Node("C");
    d = new Node("D");
    e = new Node("E");
    f = new Node("F");
    g = new Node("G");
    h = new Node("H");
    i = new Node("I");
    j = new Node("J");
    k = new Node("K");
    l = new Node("L");
    s = new Node("S");

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

    // add to nodes array
    nodes = [a, b, c, d, e, f, g, h, i, j, k, l, s];
  });

  it("should work for path in video", function () {
    s.distTo = 0; // set as starting node
    const actual = dijkstra(nodes, s, e);
    const expected = [s, b, h, g, e];

    expect(actual).toEqual(expected);
  });

  it("should work for another path", function () {
    a.distTo = 0; // set as starting node
    const actual = dijkstra(nodes, a, j);
    const expected = [a, b, s, c, l, j];

    expect(actual).toEqual(expected);
  });

  it("should come to the correct final distance for first path", function () {
    s.distTo = 0;
    const actual = dijkstra(nodes, s, e)[4].distTo;
    const expected = 7;

    expect(actual).toBe(expected);
  });

  it("should come to the correct final distance for second path", function () {
    a.distTo = 0;
    const actual = dijkstra(nodes, a, j)[5].distTo;
    const expected = 14;

    expect(actual).toBe(expected);
  });
});
