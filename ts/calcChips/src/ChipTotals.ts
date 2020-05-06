import ChipTotal from './ChipTotal';
import ChipValue from './ChipValues';

export default class ChipTotals {
    _chips: ChipTotal[] = new Array<ChipTotal>();

    get chips() {
        return this._chips;
    }

    addChip(value: ChipValue) {
        for (let i = 0; i < this.chips.length; i++) {
            if (this.chips[i].value === value) {
                this.chips[i].total ++;
                return;
            }
        }

        this.chips.push({
            value: value,
            total: 1
        });
    }
}