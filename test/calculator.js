var calculator = require("../app/calculator")
var assert = require("chai").assert

describe('Calculate', () => {
    describe('add', () => {
        it('should PASS expected result 7', () => {
            assert.equal(calculator.add(5, 2), 7)
        })
        it('should FAIL expected result 8', () => {
            assert.equal(calculator.add(5, 2), 8)
        })
    })

    describe('mul', () => {
        it('should PASS expected result 10', () => {
            assert.equal(calculator.mul(5, 2), 10)
        })
        it('should FAIL expected result 12', () => {
            assert.equal(calculator.mul(5, 2), 12)
        })
    })

    describe('div', () => {
        it('should PASS expected result 5', () => {
            assert.equal(calculator.div(10, 2), 5)
        })
        it('should FAIL expected result 2', () => {
            assert.equal(calculator.div(10, 2), 2)
        })
    })

    describe('sub', () => {
        it('should PASS expected result 3', () => {
            assert.equal(calculator.sub(5, 2), 3)
        })
        it('should FAIL expected result 5', () => {
            assert.equal(calculator.sub(5, 2), 5)
        })
    })
})