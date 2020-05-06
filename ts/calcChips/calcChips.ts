import ChipTotals from './ChipTotals';

function calcChips(amount: number) {
    const chipValues = [1000,500,200,100,50,10,1];

    let chips = new ChipTotals();

    chipValues.forEach(v => {
        while (amount >= v) {
            amount -= v;
            chips.addChip(v);
        }
    });

    return chips.chips;
}

console.log(calcChips(25));
