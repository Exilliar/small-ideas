import Node from "./Node";
import Output from "./models/Output";
import PriorityQueue from "./PriorityQueue";

function aStar(start: Node, end: Node): Output {
  let priorityQueue = new PriorityQueue(start);
  let currentNode = priorityQueue.top;
  let nodesVisited = 0;

  while (currentNode.id !== end.id) {
    calcDists(currentNode, priorityQueue);
    currentNode = priorityQueue.top;
    nodesVisited++;
  }

  return {
    path: getPath(end, start),
    nodesVisited: nodesVisited,
  };
}

export function calcDists(node: Node, priorityQueue: PriorityQueue) {
  const currentDist = node.distTo;

  node.paths.forEach((n) => {
    const dist = currentDist + n.distance;

    if (dist < n.node.distTo && n.node.visited == false) {
      n.node.distTo = dist;
      n.node.prevNode = node;
      priorityQueue.add(n.node);
    }
  });

  node.visited = true;
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
