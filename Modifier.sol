// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Modifierr {
    
    address public owner;
    modifier onliOwner(){
        require(msg.sender == owner,"Only owner can call the function");
        _;
        // _; means the rest of the code will start
    }

    function WhoIsSender() public view returns (address) {
        return msg.sender;
    }

    function SerOwner() public {
        owner = msg.sender;
    }

    function a() public onliOwner {
        
    }
}
