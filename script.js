function getComputerChoice(){
const randomNumber = Math.floor(Math.random()*3)+1;
if(randomNumber === 1) return "Rock";
else if(randomNumber === 2) return "Paper";
else return "Scissors";
}

let humanScore = 0;
let computerScore = 0;
const winningChoice = document.querySelector("h2");
function playGame(event){
        let humanSelection = event.target.textContent;
        setPlayerDisplay(humanSelection,".player-img");
        let computerSelection = getComputerChoice();
        setPlayerDisplay(computerSelection,".computer-img")

       
        winningChoice.textContent = playRound(humanSelection,computerSelection);

    
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
            return "Tie";
        }
        else{
            return "invalid option";
        }
    }
    updateScore();
    checkWinner();
   
}

const button = document.querySelectorAll(".button");

function startEvent(){
    button.forEach((item)=>{
        item.addEventListener('click',playGame)
        
    })
}
const resetButton = document.querySelector(".reset");
resetButton.addEventListener('click',resetScore)

function setPlayerDisplay(choice,className){
const image = document.querySelector(className);
if(choice=="Rock") image.src = "./images/rock.png";
else if(choice==="Paper") image.src = "./images/paper.png"
else image.src="./images/scissors.png"


}

function updateScore(){
    const playerScoreUpdate = document.querySelector(".player-score");
    const computerScoreUpdate = document.querySelector(".computer-score");

    playerScoreUpdate.textContent = `player: ${humanScore}`
    computerScoreUpdate.textContent = `computer: ${computerScore}`
}

function checkWinner(){
    if(humanScore===5||computerScore==5){
        button.forEach((item)=>{
            item.removeEventListener("click",playGame);
        })
    if(humanScore>computerScore){
        winningChoice.textContent = "Congratulations,You Won the Game"
    }
    else winningChoice.textContent = "Sorry You lost,Try again"
    }
}
function resetScore(){
    humanScore = 0;
    computerScore = 0;
    updateScore();
    winningChoice.textContent ="Choose your option"
    startEvent();
}

startEvent();