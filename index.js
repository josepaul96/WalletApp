require('dotenv').config(); // for using env files
const prompt = require('prompt-sync')({sigint: true}); //for reading inputs from user

const Web3 = require("web3"); //accesing web3
// const fs = require("fs"); 
const PROJECT_ID= process.env.PROJECT_ID; //getting project ID from env file
let chainName; // to save user input for network choice

// a function to prompt user input for changing the network. 
function selectChain(){
    console.log(" 1. Mainnet\n 3. Ropsten\n 4.Rinkeby\n 5.goerli\n 42.kovan\n")
    let chainID = prompt("Enter chainID: "); //request user input
    switch(chainID) {
        case "1":
            chainName = "mainnet";
          break;
        case "3":
            chainName = "ropsten";
          break;  
        case "4":     
            chainName = "rinkeby";
          break;
        case "5":
            chainName = "goerli";
            break;          
        case "42":
            chainName = "kovan";
            break;                            
        default:
            console.log("Wrong Input");
            selectChain();     
      }     
}


selectChain();
const web3 = new Web3(new Web3.providers.HttpProvider(`https://${chainName}.infura.io/v3/${PROJECT_ID}`))


web3.eth.getChainId().then(console.log);