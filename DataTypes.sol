// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

contract Datatypes{
    event ShowA(uint key,string indexed val);
    //Different types of variables
    // uint: ranges from uint8 to uint256 8 means  0 to 2^8-1 and 258 means 2^256-1
    //syntax uint__ accessspecifier name = __
    uint256 public num1 = 65;
    uint256 public num2 = 66;
    // uint8 public num2 = 512; 
    
    // int (not used mostly)
    // int: ranges from int8 to int256 but size is right so -2^4-1 to 2^4-1 and -2^128-1 to 2^128-1
    // syntax int__ accessspecifier name = __
    int8 public num3 = -1;

    // bool
    // true or false
    // syntax bool accessspecifier name = true/false
    bool public tfone = true;
    bool public tftwo = false;


    // string
    // Expensive stuff hai re baba!
    // takes huge amount of gas fees in order store! 
    string public str = "dfregryht";

    // bytes
    // will store string in hexadecimal values.
    // syntax bytes accessspecifier name = stringval
    // address
    // it is either EOA or Smart contract Address
     bytes public str2 = "efergrthuaferg ethyt";

    // make the code better by introducing public private internal external
    // functions
    // saare code ke getter setters banao
    function setNum1(uint _value) public {
        num1 = _value;
    }
    function setNum2(uint _value) public {
        num2 = _value;
    }

    function setNum3(int8 _value) public {
        num3 = _value;
    }
    // parameterized function
    // why do we use memory in string
    function setPriyansuValue(string memory _prval) public {
        priyansudata = _prval;
    }

    // Basic operators and expressions. == != >= <= 
    // compare 2 strings 
    // if else else-if (example chota number bada number wala lena hai)
    // if(condition)
    //      true statement
    // else
    //      false statement
    function comparisionOne(uint _val1 , uint _val2) public pure returns (string memory){
        if (_val1 == _val2){
            return "Equal";
        }else if(_val1>_val2){
            return "Val1 is greater";
        }else{
            return "Val2 is greater";
        }
    }

    function compareTwoString(string memory _one, string memory _two) public pure returns(string memory){
        
        if( keccak256(abi.encodePacked(_one)) == keccak256(abi.encodePacked(_two))){
            return "Both are equal";
        }else{
            return "Both are inequal";
        }
    }

    // loops - for while
    // 1 to 10 compute karo
    function loops() public pure returns(uint){
        uint val =1;
        for(uint i = 0; i< 10; i++){
            val = val + i;
        }
        return  val;
    }
    // deploy the contract on a testnet, pehle tokens lana sikhaunga

    // what are events why do we need it
    mapping (uint => string) public db;

    function addDataToMapping(uint key,string memory _value) public{
        db[key] = _value;
        emit ShowA(key, _value);
    }

    // arrays deletion and insertion
    
  
    // creation 
    uint256[] public myArray;
    
    // read
    function addElement(uint256 element) public {
        myArray.push(element);
    }
    // updation
    function updateElement(uint256 index, uint256 newValue) public {
        require(index < myArray.length, "Index out of range");
        myArray[index] = newValue;
    }
      // deletion!
    function deleteElement(uint256 index) public {
        require(index < myArray.length, "Index out of range");
        if (index < myArray.length - 1) {
            myArray[index] = myArray[myArray.length - 1];
        }
        myArray.pop();
    }
}
