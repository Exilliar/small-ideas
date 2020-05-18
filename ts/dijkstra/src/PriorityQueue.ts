export default class PriorityQueue<T> {
  private queue: T[];

  constructor(ini: T) {
    this.queue = [ini];
  }

  add(newVal: T, fn: (toAdd: T, old: T) => boolean) {
    if (this.queue.includes(newVal)) return;

    let updateArr = new Array<T>();
    let added = false;

    this.queue.forEach((q) => {
      if (fn(newVal, q) && added === false) {
        updateArr.push(newVal);
        added = true;
      }
      updateArr.push(q);
    });

    if (updateArr.length === this.queue.length) updateArr.push(newVal);

    this.queue = updateArr;
  }

  get top() {
    if (this.queue.length === 0) return undefined;
    const topValue = this.queue[0];

    this.queue.shift();

    return topValue;
  }

  get all() {
    return this.queue;
  }
}
