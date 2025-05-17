// the computer choose three random numbers
// if number is 1 return rock 
// if the number is 2 return paper 
// if the number is 3 return scissors

function getComputerChoice(){
const randomNumber = Math.floor(Math.random()*3)+1;
if(randomNumber === 1) return "Rock";
else if(randomNumber === 2) return "Paper";
else return "Scissors";
}
//the function uses prompt to get the users choice

function getHumanChoice(){
    const humanChoice = prompt("Select Rock Paper or Scissors");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;