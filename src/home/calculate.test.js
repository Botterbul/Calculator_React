const { isNumber } = require('./isNumber');
const { operate } = require('./operate');
import React from 'react';
import renderer from 'react-test-renderer';
import Output from './Output';

// Test Cases for the isNumber Method
test('Should be seen as number', () => {
    const answer = isNumber("0");
    expect(answer).toBe(true);
});

test('Should not seen as number', () => {
    const answer = isNumber("A");
    expect(answer).toBe(false);
});

//======================================

// Test Cases for the operate Method
test('Test Add Method with only zeros', () => {
    const answer = operate("0", "0", "+");
    expect(answer).toBe("0");
});

test('Test Add Method', () => {
    const answer = operate("7", "0", "+");
    expect(answer).toBe("7");
});

test('Test Subtract Method', () => {
    const answer = operate("7", "2", "-");
    expect(answer).toBe("5");
});

test('Test Multiply Method', () => {
    const answer = operate("7", "2", "x");
    expect(answer).toBe("14");
});

test('Test Subtract Method', () => {
    const answer = operate("7", "2", "x");
    expect(answer).toBe("14");
});

test('Test Divide Method', () => {
    const answer = operate("8", "4", "÷");
    expect(answer).toBe("2");
});

//Snapshot testing
describe('Output Component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Output value="0"/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})

