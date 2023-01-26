/*
 * @Author: daffodilma daffodilma@163.com
 * @Date: 2022-11-04 10:10:19
 * @LastEditors: daffodilma daffodilma@163.com
 * @LastEditTime: 2023-01-22 20:21:01
 * @FilePath: \chapter2\app\javascripts\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

import voting_artifacts from '../../build/contracts/Voting.json'

var Voting = contract(voting_artifacts);

let candidates = {"Lucy": "candidate-1", "Lancy": "candidate-2", "Wayne": "candidate-3"}

window.voteForCandidate = function(candidate) {
 let candidateName = $("#candidate").val();
 try {
  $("#msg").html("Vote has been submitted. The vote count will increment as soon as the vote is recorded on the blockchain. Please wait.")
  $("#candidate").val("");

  Voting.deployed().then(function(contractInstance) {
   contractInstance.voteForCandidate(candidateName, {gas: 140000, from: web3.eth.accounts[0]}).then(function() {
    let div_id = candidates[candidateName];
    return contractInstance.totalVotesFor.call(candidateName).then(function(v) {
     $("#" + div_id).html(v.toString());
     $("#msg").html("");
    });
   });
  });
 } catch (err) {
  console.log(err);
 }
}

$( document ).ready(function() {
 if (typeof web3 !== 'undefined') {
  console.warn("Using web3 detected from external source like Metamask")
  // Use Mist/MetaMask's provider
  window.web3 = new Web3(web3.currentProvider);
 } else {
  console.warn("No web3 detected. Falling back to http://localhost:8898. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8889/app/index.html/"));
 }

 Voting.setProvider(web3.currentProvider);
 let candidateNames = Object.keys(candidates);
 for (var i = 0; i < candidateNames.length; i++) {
  let name = candidateNames[i];
  Voting.deployed().then(function(contractInstance) {
   contractInstance.totalVotesFor.call(name).then(function(v) {
    $("#" + candidates[name]).html(v.toString());
   });
  })
 }
});