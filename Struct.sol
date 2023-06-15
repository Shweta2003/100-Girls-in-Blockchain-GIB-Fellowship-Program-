// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Struct{
    struct Person{
        uint id;
        string name;
        uint age;
    }

    mapping (uint => Person) public persons;

    function addPerson(uint _id, string memory _name, uint _age) public  {
        Person memory newPerson = Person(_id,_name,_age);
        persons[_id] = newPerson;
    }
}
