import Clock from "./Clock";
import AddRes from "./models/AddRes";

export function timeCalculator(clock0: Clock, clock1: Clock) {
    let total = 0;
    let carry = 0;
    let totals = new Array<number>(clock0.numUnits);

    for (let i = clock0.numUnits-1; i >= 0; i--) {
        const v1 = clock0.timeArray[i].value;
        const v2 = clock1.timeArray[i].value;
        const max = clock0.timeArray[i].max;

        const res = add(v1, v2, carry, max);

        totals[i] = res.val;
        carry = res.carry;
    }

    return totals;
}

export function add(v1: number, v2: number, cv: number, max: number): AddRes {
    const carry = Math.floor((v1+v2+cv)/max);
    const val = v1+v2+cv-(max*carry);

    return {
        val: val,
        carry: carry
    }
}
