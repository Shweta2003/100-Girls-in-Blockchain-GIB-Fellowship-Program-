// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Sabziwala {
    mapping (address => mapping (string => uint)) public store;
    function setDukan(string memory _sabziName, uint _price) public {
        store[msg.sender][_sabziName] = _price + (_price/3);
    }

    function buySabzi(address _owner, string memory _sabziName) public payable {
        require(msg.value == store[_owner][_sabziName],"Price is low");
    }

    function leloPrice(address payable _owner, string memory _SabziName) public  {
        require(msg.sender == _owner,"Not the owner");
        uint releasAmount = store[_owner][_SabziName];
        releasAmount = releasAmount - releasAmount/3;
        store[_owner][_SabziName] = 0;
        // owner withdraw the amount
        _owner.transfer(releasAmount);
    }
}
