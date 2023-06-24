// App.jsx file of react app to provide frontend
import abi from './ABI';
import './App.css';
import {useState, useEffect} from 'react';
import {ethers} from 'ethers'

function App() {
  const contractID = "Contract ID";
  const getContract = () =>{
    let temp = new ethers.providers.Web3Provider(window.ethereum)

    let signer = temp.getSigner()

    let contract = new ethers.Contract(contractID, abi, signer)
    console.log(contract);
  }

  async function checkWindow(){


    // to see window
    // if(window){
    //   console.log(window);
    // }

    // to see ethereum
    // if(window.ethereum){
    //   console.log(window.ethereum);
    // }

    // to connect to metamarse account
    if(window.ethereum){
      let variable = await window.ethereum.request({method: 'eth_requestAccounts'});
      console.log(variable);
    }
    
  }
  return (
    <div className="App">

      <button onClick={getContract}>Click Me</button>
    </div>
  );
}

export default App;

// API.js
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

export default abi;
 
