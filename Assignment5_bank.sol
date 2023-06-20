// ERC20 token part
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceof(address account) external view returns (uint256);
    function transfer(address recipient, uint amount) external returns (bool);
    function allowance(address Owner, address spender) external view returns (uint);
    function approve(address spender, uint amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);

}

interface IMintable {
    function mint(address account, uint256 amount) external returns (bool);
}

interface IBurnable {
    function burn(address account, uint256 amount) external returns (bool);
}

contract MyToken is IERC20, IMintable,IBurnable{
    string public name;
    string public symbol;
    uint8 public decimal;
    address owner;
    
    uint private _totalSupply;

    mapping (address => uint) private _balances;
    mapping (address => mapping (address => uint)) private _allowances;

    constructor (string memory _name, string memory _symbol, uint8 _decimals, uint initialSupply){
        name = _name;
        symbol = _symbol;
        decimal = _decimals;
        _totalSupply = initialSupply;
        _balances[msg.sender] = _totalSupply;
        owner = msg.sender;
    }

    function totalSupply() external view override returns (uint){
        return _totalSupply;
    }

    function balanceof(address _account) external view override returns (uint){
        return _balances[_account];
    }

    function transfer(address recipient, uint amount) external override returns (bool){
        require(_balances[msg.sender] >= amount,"Insufficient");
        _balances[msg.sender] -= amount;
        _balances[recipient] += amount;

        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function allowance(address Owner, address spender) external  view override returns (uint){
        return _allowances[Owner][spender];
    }

    function approve(address spender, uint amount) external override  returns (bool){
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);

        return true;
    }

    function transferFrom(address sender, address recipient, uint amount) external override returns (bool){
        require(_balances[sender] >= amount, "insufficient");
        require(_allowances[sender][msg.sender] >= amount, "insufficient");

        _balances[sender] -= amount;
        _balances[recipient] += amount;
        _allowances[sender][msg.sender] -= amount;
        return true;
    }

    function mint(address account, uint amount) external override returns (bool){
        require(msg.sender == owner,"not owner");
        _totalSupply += amount;
        _balances[account] += amount;
        return true;
    }

    function burn(address account, uint amount) external override returns(bool){
        require(msg.sender == owner,"not owner");
        _totalSupply -= amount;
        _balances[account] -= amount;
        return true;
    }

}


// main contract of bank

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "MyToken.sol";

contract Bank {

    // variable to store initial capital of bank
    uint private tot_balance;

    // event to display successful adding of new user
    event AddedNewUser(address,uint);

    event TotalAmount(address,uint);

    // initialize bank's money
    constructor(uint _tot_balance) {
        tot_balance = _tot_balance;
    }

    // mapping to store amount corresponding to address of user
    mapping (address => uint) account_balance;

    // mpping to keep track of timestamp
    mapping (address => uint) total_duration;

    // add user to bank
    function newUser(address _account, uint _initial_quan) public {
        account_balance[_account] = _initial_quan;
        total_duration[_account] = block.timestamp;
        tot_balance += _initial_quan;
        emit AddedNewUser(_account, _initial_quan);
    }

    // display current balance
    function calculateCurrentBalance(address _account) public returns (uint){
        uint time = block.timestamp - total_duration[_account];
        // take interest rate of 5% evaluated in terms of seconds
        uint interest = (account_balance[_account] * 5 * time)/100 * 236 * 24 * 60 * 60;

        // since value is very small, we add 1 to it
        interest += 1;
        account_balance[_account] += interest;

        MyToken ERC20 = new MyToken("ERC20","$$",10,account_balance[_account]);
        ERC20.transfer(_account,account_balance[_account]);
        emit TotalAmount(_account,ERC20.balanceof(_account));

        uint result = ERC20.balanceof(_account);

        return result;
    }


}
