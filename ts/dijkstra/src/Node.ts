import Path from "./models/Path";

export default class Node {
  id: string;
  // distance is currently defaulted to 0, should probably be changed as this causes some
  // messiness in the main code
  distTo = Number.MAX_SAFE_INTEGER;
  prevNode: Node;
  paths = new Array<Path>();
  visited = false;

  constructor(i: string, dTo?: number) {
    this.id = i;
    if (dTo !== undefined) this.distTo = dTo;
  }
}
