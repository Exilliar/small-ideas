import Node from "./Node";
import Output from "./models/Output";

function aStar(nodes: Node[], start: Node, end: Node): Output {
  let currentNode = start;
  let nodesVisited = 0;

  while (currentNode.id !== end.id) {
    calcDists(currentNode);
    sortNodes(nodes);
    currentNode = getShortestNode(nodes);
    nodesVisited ++;
  }

  return {
      path: getPath(end, start),
      nodesVisited: nodesVisited
    };
}

export function calcDists(node: Node) {
  const currentDist = node.distTo;

  node.paths.forEach((n) => {
    const dist = currentDist + n.distance;

    if (dist < n.node.distTo && n.node.visited == false) {
      n.node.distTo = dist;
      n.node.prevNode = node;
    }
  });

  node.visited = true;
}
export function sortNodes(nodes: Node[]) {
  nodes.sort((a, b) => {
    let aDist = a.distTo + a.geoDistTo;
    let bDist = b.distTo + b.geoDistTo;

    if (aDist < bDist) {
      return -1;
    } else if (aDist > bDist) {
      return 1;
    }
    return 0;
  });
}
// get the shortest node that has not yet been visited
export function getShortestNode(nodes: Node[]): Node {
  for (let i = 0; i < nodes.length; i++) {
    let current = nodes[i];

    if (current.visited === false) return current;
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
function printPath(nodes: Node[]) {
  let arr1 = new Array<string>();
  nodes.forEach((n) => {
    arr1.push(n.id);
  });
  console.log("final:", arr1);
}

export default aStar;
