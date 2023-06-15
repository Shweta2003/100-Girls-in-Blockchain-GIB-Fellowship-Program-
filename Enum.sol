// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Enum{
    // 0 for small, 1 for medium, 2 for large
    enum size{
        small, medium, large
    }

    mapping (uint => size) public WhatisSize;
    function addSize(uint _id, size _s) public {
        WhatisSize[_id] = _s;
    }
}
