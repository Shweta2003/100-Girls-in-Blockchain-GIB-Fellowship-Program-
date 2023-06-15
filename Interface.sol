// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface MyInterface {
    function add(uint _a, uint _b) external pure returns (uint);
    function subtract(uint _a, uint _b) external pure returns (uint);
    function multiply(uint _a, uint _b) external pure returns (uint);
    function divide(uint _a, uint _b) external pure returns (uint);
}

contract UseInterface is MyInterface {
    function add(uint _a, uint _b) external pure override  returns (uint){
        return _a + _b;
    }

    function subtract(uint _a, uint _b) external pure override  returns (uint){
        return _a - _b;
    }

    function multiply(uint _a, uint _b) external pure override  returns (uint){
        return _a * _b;
    }

    function divide(uint _a, uint _b) external pure override  returns (uint){
        return _a / _b;
    }
}
