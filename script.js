function getComputerChoice(){
const randomNumber = Math.floor(Math.random()*3)+1;
if(randomNumber === 1) return "Rock";
else if(randomNumber === 2) return "Paper";
else return "Scissors";
}

function getHumanChoice(e){
    const humanChoice = e.target.textContent;
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame(event){

        let humanSelection = event.target.textContent;
        console.log(humanSelection);
        let computerSelection = getComputerChoice();
        console.log(computerSelection)
        console.warn(playRound(humanSelection,computerSelection));

    
    function playRound(humanChoice,computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if(humanChoice === 'rock' && computerChoice === 'scissors'){
            ++humanScore;
            return `You Won! ${humanChoice} beats ${computerChoice}`;
        }
        else if(humanChoice === 'rock' && computerChoice === 'paper'){
            ++computerScore;
            return `You lost! ${computerChoice} beats ${humanChoice}`;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'paper'){
            ++humanScore;
            return `You won! ${humanChoice} beats ${computerChoice}`;
        }
        else if(humanChoice === 'scissors' && computerChoice === 'rock'){
            ++computerScore;
            return `You lost! ${computerChoice} beats ${humanChoice}`;
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock'){
            ++humanScore;
            return `You won! ${humanChoice} beats ${computerChoice}`;
        }
        else if(humanChoice === 'paper' && computerChoice === 'scissors'){
            ++computerScore;
            return `You lost! ${computerChoice} beats ${humanChoice}`;
        }
        else if(humanChoice === computerChoice){
            return "tie";
        }
        else{
            return "invalid option";
        }
    }
    if(humanScore>computerScore){
        console.log('You Won! Congratulations');
    }
    else if(humanScore === computerScore){
        console.log('Draw');
    }
    else {
        console.log('Computer is the winner');
    }
}

const button = document.querySelectorAll("button");

button.forEach((item)=>{
    item.addEventListener('click',playGame)
    
})

