// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract class {
    
    // multimapping
    mapping (address => mapping (uint => string)) prcode;

    function getdata(address _add, uint _idx, string memory _str) public {
        prcode[_add][_idx] = _str;
    }

    // return multiple data at once
    mapping (address => string[]) arr;
    function getAll(address _add, string memory _str) public {
        arr[_add].push(_str);
    }

    function setAll(address _add) public view returns(string [] memory){
        return arr[_add];
    }


    // msg.sender && msg.value
    // indexed is used to to track transactions, more costly, cannot add more than 3 indexed in one event
    event show(uint indexed _wei);
    function showContract() public payable {
        emit show(msg.value);
    }

    function shooOwner() public view returns (address) {
        return msg.sender;
    }
}
