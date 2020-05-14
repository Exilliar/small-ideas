import Time from "./models/Time";
import Unit from "./models/Unit";

export default class Clock {
  private _hour: Unit = { value: 0, max: 24 };
  private _minute: Unit = { value: 0, max: 60 };
  private _second: Unit = { value: 0, max: 60 };

  private _timeArray = new Array<Unit>();

  constructor(h: number, m: number, s: number) {
    this._hour.value = h;
    this._minute.value = m;
    this._second.value = s;

    this._timeArray = [this._hour, this._minute, this._second];
  }

  get timeArray() {
    return this._timeArray;
  }

  get numUnits() {
    return this._timeArray.length;
  }
}
