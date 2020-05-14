import Node from "./Node";

function dijkstra(nodes: Node[], start: Node, end: Node) {
  let currentNode = start;

  while (currentNode.id !== end.id) {
    calcDists(currentNode);
    sortNodes(nodes);
    currentNode = getShortestNode(nodes);
  }

  return getPath(end, start);
}

export function calcDists(node: Node) {
  const currentDist = node.distTo;

  node.paths.forEach((n) => {
    const dist = currentDist + n.distance;

    if ((dist < n.node.distTo || !n.node.distTo) && n.node.visited == false) {
      n.node.distTo = dist;
      n.node.prevNode = node;
    }
  });

  node.visited = true;
}
export function sortNodes(nodes: Node[]) {
  nodes.sort((a, b) => {
    if (a.distTo < b.distTo) {
      return -1;
    } else if (a.distTo > b.distTo || a.distTo === 0) {
      return 1;
    }
    return 0;
  });
}
// get the shortest node that has not yet been visited
export function getShortestNode(nodes: Node[]): Node {
  for (let i = 0; i < nodes.length; i++) {
    let current = nodes[i];

    if (current.visited === false && current.distTo !== 0) return current;
  }
}
export function getPath(end: Node, start: Node): Node[] {
  let route = [end];
  let currentNode = end;

  while (currentNode.id !== start.id) {
    currentNode = currentNode.prevNode;
    route.push(currentNode);
  }

  return route.reverse();
}

export default dijkstra;
