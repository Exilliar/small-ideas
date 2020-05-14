import Path from "./models/Path";

export default class Node {
  id: string;
  distTo = 0;
  prevNode: Node;
  paths = new Array<Path>();
  visited = false;

  constructor(i: string) {
    this.id = i;
  }
}
