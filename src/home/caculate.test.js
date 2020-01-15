const { isNumber } = require('./isNumber');

test('Should be seen as number', () => {
    const answer = isNumber("0");
    expect(answer).toBe(true);
});

test('Should not seen as number', () => {
    const answer = isNumber("A");
    expect(answer).toBe(false);
});