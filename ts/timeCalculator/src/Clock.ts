import Time from "./models/Time";
import Unit from "./models/Unit";

export default class Clock {
  private hour: Unit = { value: 0, limit: 24 };
  private minute: Unit = { value: 0, limit: 60 };
  private second: Unit = { value: 0, limit: 60 };

  constructor(h: number, m: number, s: number) {
    this.hour.value = h;
    this.minute.value = m;
    this.second.value = s;
  }

  add(clock: Clock) {
    let arr1 = this.timeArray;
    let arr2 = clock.timeArray;
  }

  get time(): Time {
    return {
      hour: this.hour.value,
      minute: this.minute.value,
      second: this.second.value,
    };
  }

  private get timeArray() {
    return [this.hour, this.minute, this.second];
  }
}
