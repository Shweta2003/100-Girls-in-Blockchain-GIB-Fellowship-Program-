// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

// Write a Solidity contract that declares a variable, performs some basic arithmetic operations, and logs the result using an event.
contract Assignmenta{
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

// Write a Solidity contract that includes a function with a conditional statement. The function should take an input parameter, perform some calculations based on the condition, and return the result.
contract Assignmentb {
    function first(int _a , int _b) public pure returns (int){
        if(_a > _b){
            return _a-_b;
        }
        else{
            return _a+_b;
        }
    }
}


// Write a Solidity contract that uses a mapping to store and retrieve data. Include functions to add, update, and retrieve data from the mapping.
contract Assignmentc {
    mapping (uint => string) box;

    function addVal(uint _idx, string memory _str) public {
        box[_idx] = _str;
    }

    function updateVal(uint _idx, string memory _newstr) public {
        box[_idx] = _newstr;
    }

    function retreiveVal(uint _idx) public view returns (string memory){
        return box[_idx];
    }
}

// Write a Solidity contract that uses an array to store a list of addresses. Include functions to add, remove, and retrieve addresses from the array.
contract Assignmentd {
    address [] public arr;

    function addVal(address _myadd) public {
        arr.push(_myadd);
    }

    function removeVal(uint _idx) public {
        require(_idx < arr.length,"Index out of range");
        address temp = arr[arr.length-1];
        arr[arr.length-1] = arr[_idx];
        arr[_idx] = temp;
        arr.pop();
    }

    function retreiveVal(uint _idx) public view returns (address){
        require(_idx < arr.length,"Index out of range");
        return arr[_idx];
    }
}


