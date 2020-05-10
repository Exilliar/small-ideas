import possChars from "./data/possChars";

export default class Password {
  private _indexes: number[];
  private _text: string;

  constructor(len: number) {
    this._indexes = new Array<number>();

    for (let i = 0; i < len + 1; i++) this._indexes.push(0);
  }

  get text() {
    this._text = "";
    for (let i = 0; i < this._indexes.length; i++) {
      this._text += possChars[this._indexes[i]];
    }
    return this._text;
  }

  get indexes() {
    return this._indexes;
  }

  incIndexes(toInc: number) {
    const maxInc = possChars.length;
    if (toInc < 0) {
      this._indexes[0] = -1;
      return;
    } else if (this._indexes[toInc] + 1 < maxInc) this._indexes[toInc]++;
    else {
      this._indexes[toInc] = 0;
      this.incIndexes(toInc - 1);
    }
    return;
  }
}
