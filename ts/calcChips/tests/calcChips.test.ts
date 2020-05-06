import CalcChips from '../src/calcChips';

describe('calcChips', function() {
    it('returns correct chips', function() {
        let result = CalcChips.calcChips(25);

        expect(result).toBe([{
            value: 20,
            total: 1
        }, {
            value: 5,
            total: 1
        }]);
    })
});
