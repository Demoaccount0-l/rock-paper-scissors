let result=document.getElementById("result");

//let playerChoice=prompt("Enter Rock/Paper/Scissor");


let playerInt=0;
let computerInt=0;

function getComputerChoice(){
    let computerChoice= ["ROCK", "PAPER", "SCISSOR"];
    return computerChoice[Math.floor(Math.random()*3)];
}
//result.textContent = playRound(playerChoice,getComputerChoice());



function playRound(playerChoice, getComputerChoice){
    let resultMsg;
    console.log(`player choice ${playerChoice} and computer choice ${getComputerChoice}`);
    if(playerChoice.toUpperCase() === "ROCK"){
        if(getComputerChoice === "PAPER"){
            computerInt++;
            resultMsg = `You Lose! ${playerChoice} doesn't beat ${getComputerChoice}`;

        }
        else if(getComputerChoice === "SCISSOR"){
            playerInt++;
            resultMsg= `You win! ${playerChoice} beats ${getComputerChoice}`;
        }
        else{
            resultMsg = `Tie!`;
        }
    }
    else if(playerChoice.toUpperCase() === "PAPER"){
        if(getComputerChoice === "ROCK"){
            playerInt++;
            resultMsg=`You win! ${playerChoice} beats ${getComputerChoice}`;
        }
        else if(getComputerChoice === "SCISSOR"){
            computerInt++;
            resultMsg=`You Lose! ${playerChoice} doesn't beat ${getComputerChoice}`;

        }
        else{
            resultMsg=`Tie!`;
        }
    }
    else{
        if(getComputerChoice === "PAPER"){
            playerInt++;
            resultMsg=`You win! ${playerChoice} beats ${getComputerChoice}`;
        }
        else if(getComputerChoice === "ROCK"){
            computerInt++;
            resultMsg=`You Lose! ${playerChoice} doesn't beat ${getComputerChoice}`;

        }
        else{
            resultMsg=`Tie!`;
        }
    }

    console.log(resultMsg);
}

function checkWinner(){
    if(playerInt>computerInt){
        return `Player is the Winner`;
    }
    else if(computerInt>playerInt){
        return `Computer is the Winner`;
    }
    else{
        return `Tie!`;
    }
}

function getPlayerChoice(){
    let playerChoice= prompt("Enter Rock/Paper/Scissor");
    if(!(playerChoice.toUpperCase() === "ROCK" || playerChoice.toUpperCase()==="PAPER" || playerChoice.toUpperCase() === "SCISSOR")){
        getPlayerChoice();
    }
    return playerChoice;

}

function game(){
    let playerChoice;
    let computerChoice;
    for(let i=0;i<5;i++){
        //playerChoice=prompt("Enter Rock/Paper/Scissor");
        playerChoice = getPlayerChoice();
        computerChoice= getComputerChoice();
        playRound(playerChoice,computerChoice);
        result.textContent = checkWinner();
    }
}

game();