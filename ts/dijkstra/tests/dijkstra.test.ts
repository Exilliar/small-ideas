import dijkstra from "../src/dijkstra";
import Node from "../src/Node";

// link to graph used for tests https://miro.medium.com/max/2944/1*nXlEmHAnu3dVBOnJAfPaAg.jpeg

describe("dijkstra", function () {
  let nodes: Node[];
  let a: Node;
  let b: Node;
  let c: Node;
  let d: Node;
  let e: Node;

  beforeEach(function () {
    // create all nodes
    a = new Node("A");
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
    const expected = [d, c, a];

    expect(actual).toEqual(expected);
  });
});
