import Path from "./models/Path";

export default class Node {
  id: string;
  // distance is currently defaulted to 0, should probably be changed as this causes some
  // messiness in the main code
  distTo = 0;
  prevNode: Node;
  paths = new Array<Path>();
  visited = false;

  constructor(i: string) {
    this.id = i;
  }
}
