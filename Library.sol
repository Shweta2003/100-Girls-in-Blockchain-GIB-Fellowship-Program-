// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

library calculator{
    function add(uint _a, uint _b) public pure returns (uint){
        return _a + _b;
    }

    function subtract(uint _a, uint _b) public pure returns (uint){
        return _a - _b;
    }

    function multiply(uint _a, uint _b) public pure returns (uint){
        return _a * _b;
    }

    function divide(uint _a, uint _b) public pure returns (uint){
        return _a / _b;
    }
}

contract doCal {
    function testAdd(uint _a, uint _b) public pure returns (uint) {
        return calculator.add(_a,_b);
    }

    function testSubtract(uint _a, uint _b) public pure returns (uint) {
        return calculator.subtract(_a,_b);
    }

    function testMultiply(uint _a, uint _b) public pure returns (uint) {
        return calculator.multiply(_a,_b);
    }

    function testDivide(uint _a, uint _b) public pure returns (uint) {
        return calculator.divide(_a,_b);
    }
}
