import Node from "./Node";

export default class PriorityQueue {
  private queue: Node[];

  constructor(ini: Node) {
    this.queue = [ini];
  }

  add(node: Node) {
    if (this.queue.includes(node)) return;

    let updateArr = new Array<Node>();
    let added = false;
    const bDist = node.distTo + node.geoDistTo;

    this.queue.forEach((q) => {
      const aDist = q.distTo + q.geoDistTo;

      if (bDist < aDist && added === false) {
        updateArr.push(node);
        updateArr.push(q);
        added = true;
      } else {
        updateArr.push(q);
      }
    });

    if (updateArr.length === this.queue.length) updateArr.push(node);

    this.queue = updateArr;
  }

  get top() {
    const topValue = this.queue[0];

    this.queue.shift();

    return topValue;
  }

  get all() {
    return this.queue;
  }
}
