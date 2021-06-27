import Path from "./models/Path";

export default class Node {
  id: string;
  prevNode: Node;
  geoDistTo: number;

  // Set this to 0 manually for the instance that is the starting node
  // can be done in the construtor or by setting it manually later
  distTo = Number.MAX_SAFE_INTEGER;
  paths = new Array<Path>();
  visited = false;

  constructor(i: string, gDT: number, dTo?: number) {
    this.id = i;
    this.geoDistTo = gDT;
    if (dTo !== undefined) this.distTo = dTo;
  }
}
