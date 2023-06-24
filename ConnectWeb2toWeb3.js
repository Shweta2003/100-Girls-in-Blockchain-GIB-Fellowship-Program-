// MyCounter.sol contract
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MyCounter {
    
    uint counter;
    event inc(uint indexed counter);
    function getCounter() public view returns (uint) {
        return counter;
    }

    function IncrementCOunter() public {
        counter = counter + 1;
        emit inc(counter);
    }
}

// index.js
const ethers = require("ethers");

// abi taken from remix MyCounter.json
const abi = [
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "counter",
					"type": "uint256"
				}
			],
			"name": "inc",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "IncrementCOunter",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getCounter",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
 
const contractID = "Contract ID";

const private_key = "Your Private Key";

let url = "https://polygon-mumbai.g.alchemy.com/v2/K1g9-tUnnYwAnFMO3W1IlKPurO1PZ7tA";

let provider = new ethers.providers.JsonRpcProvider(url);

const myAccountAddress = "0xB1F5915558Cc8B529e283E7E14B7a4830592AAf3";

const connectToProvider = async() => {
    await provider.ready;
    // console.log(provider);

    // get balance of account
    let balance = await provider.getBalance(myAccountAddress);
    let etherString = ethers.utils.formatEther(balance);
    console.log("Balance : " + etherString);

    // creating a wallet
    const wallet = new ethers.Wallet(private_key, provider);
    // console.log(walletWithProvider);

    // deploy existing contract
    let contract = new ethers.Contract(contractID,abi,provider);
    // console.log(contract);

    let contractWithSigner = contract.connect(wallet);
    const value = await contractWithSigner.getCounter();
    console.log(ethers.utils.formatEther(value.value));
}

connectToProvider();
