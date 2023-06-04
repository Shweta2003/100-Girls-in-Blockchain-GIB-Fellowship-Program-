// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract FirstProject is ERC20{
     constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol){
         _mint(msg.sender,25000*10**18);
     }
}


// deploy to get output... use sepolia test network of your metamarse account
// import token to get result named under the symbol
