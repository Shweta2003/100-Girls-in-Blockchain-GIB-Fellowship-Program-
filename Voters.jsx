// Create a voter system in Web3 and connect it to Web2

// solidity contract
// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.2;

// contract Election {
//     address owner;
//     constructor() {
//         owner = msg.sender;
//     }

//     struct Candidate{
//         uint id;
//         string name;
//         uint voteCount;
//     }

//     // voters
//     mapping (address => bool) public voters;
//     mapping (uint => Candidate) public candidates;

//     event votedEvent(uint indexed CandidateId);

//     uint public CandidatesCount;

//     function election(string memory _name) public {
//         require(owner == msg.sender,"Cannot add candidate");
//         _addCandidate(_name);
//     }

//     function _addCandidate(string memory _name) private {
//         Candidate memory Cand = Candidate(CandidatesCount,_name,0);
//         candidates[CandidatesCount] = Cand;
//         CandidatesCount += 1;
//     }

//     function vote(uint CandidateId) public {
//         require(voters[msg.sender] == false, "Cannot vote");
//         require(CandidateId < CandidatesCount,"Select valid ID of candidate");
//         voters[msg.sender] = true;
//         candidates[CandidateId].voteCount += 1;
//         emit votedEvent(CandidateId);
//     }

//     function forFrontEnd() public view returns (Candidate [] memory){
//         require(CandidatesCount > 0, "give entry");
//         Candidate [] memory resultArr = new Candidate[](CandidatesCount);
//         for(uint i = 0 ; i < CandidatesCount ; i ++){
//             resultArr[i] = candidates[i];
//         }

//         return resultArr;
//     }
// }


// abi.jsx
// const abi =[
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "CandidateId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "votedEvent",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "CandidatesCount",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "candidates",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "id",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "voteCount",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			}
// 		],
// 		"name": "election",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "forFrontEnd",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "uint256",
// 						"name": "id",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "voteCount",
// 						"type": "uint256"
// 					}
// 				],
// 				"internalType": "struct Election.Candidate[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "CandidateId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "vote",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "voters",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]

// export default abi;


// main program - app.jsx
import abi from './ABI';
import './App.css';
import Web3 from 'web3';
import {useState, useEffect} from 'react';
import {ethers} from 'ethers'

function App() {

  const [web3, setWeb3] = useState(null);
  const [contract, setcontract] = useState(null);
  useEffect(() => {
    async function initializeWeb3(){
      if(window.ethereum){
        try{
          await window.ethereum.request({method:"eth_requestAccounts"});
          const tempWeb3 = new Web3(window.ethereum);
          setWeb3(tempWeb3);
          const tempContract = new tempWeb3.eth.Contract(abi,"0x58437a0F932723CDC072fe8A00e4311C67e4bce9");
          setcontract(tempContract);
          console.log(contract);
        }catch(error){
          console.log(error);
        }}else{
          console.log("MetaMask extension not detected");
        }
    }

    initializeWeb3();
  },[]);

  const callElection = async() => {
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.election("name of candidate").send({from:accounts[0]});
    console.log(result);
  }

  const getDataTFrontEnd = async () => {
    try {
      const data = await contract.methods.forFrontEnd().call();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  const vote = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const result = await contract.methods.vote(0).send({from:accounts[0]});
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const watchEvents = async () => {
    const latestBlock = await web3.eth.getBlockNumber();
    const fromBlock = latestBlock - 999;

    const events = await contract.getPastEvents("votedEvent",{
      fromBlock: fromBlock,
    });

    console.log(events);
  }

  return (
    <div className="App">
      <button onClick={callElection}>SET CANDIDATE</button>
      <button onClick={getDataTFrontEnd}>SHOW CANDIDATE</button>
      <button onClick={vote}>VOTE</button>
      <button onClick={watchEvents}>WATCH EVENTS</button>
    </div>
  );
} 

export default App;
