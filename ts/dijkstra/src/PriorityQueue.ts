import Node from "./Node";

export default class PriorityQueue<T> {
  private queue: T[];

  constructor(ini: T) {
    this.queue = [ini];
  }

  add(node: T) {
    if (this.queue.includes(node)) return;

    let updateArr = new Array<T>();
    let added = false;
    const bDist = node.distTo;

    this.queue.forEach((q) => {
      const aDist = q.distTo;

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
