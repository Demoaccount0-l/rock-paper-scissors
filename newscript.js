let buttons= document.querySelectorAll("button");
let results= document.querySelector(".results");
let playerResult = document.querySelector(".playerResult");
let computerResult = document.querySelector(".computerResult");
let roundResult = document.createElement("div");
roundResult.classList.add("roundResult");

let gameResult = document.createElement("div");
gameResult.classList.add("gameResult");


const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)


let playerScore =0;
let computerScore=0;

buttons.forEach(button => button.addEventListener('click', getPlayerChoice))


function getComputerChoice(){
    let computerChoice= ["rock", "paper", "scissor"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}


function updateResult(playerScore, computerScore){
    
    if(playerScore === 5 && computerScore !== 5){
        gameResult.textContent = `You won the game!!`;
        buttons.forEach(button => button.removeEventListener('click', getPlayerChoice));

    }
    if (playerScore !== 5 && computerScore ===5){
        gameResult.textContent = `Computer won the game!!`;
        buttons.forEach(button => button.removeEventListener('click', getPlayerChoice));
    }

    if(computerScore === 5 && playerScore ===5){
        gameResult.textContent = `Tie!!`;
        buttons.forEach(button => button.removeEventListener('click', getPlayerChoice));
    }

    results.appendChild(gameResult);


}


function playGame(playerSelection, computerSlection){

    console.log(`Inside playGame ${playerSelection} and ${computerSlection}`);

    if(playerSelection === "rock" && computerSlection === "scissor"){
        
        playerResult.textContent = ++playerScore;
        roundResult.textContent = `You win!! you selected ${playerSelection} and computer choose ${computerSlection}`;


    }
    else if(playerSelection === "rock" && computerSlection === "paper"){
        
        computerResult.textContent = ++computerScore;
        roundResult.textContent = `You Lose! You selected ${playerSelection} and computer selected ${computerSlection}`;
    }
    else if(playerSelection === "paper" && computerSlection === "rock"){
        
        playerResult.textContent = ++playerScore;
        roundResult.textContent = `You win!! you selected ${playerSelection} and computer choose ${computerSlection}`;

    }
    else if(playerSelection === "paper" && computerSlection === "scissor"){
        
        computerResult.textContent = ++computerScore;
        roundResult.textContent = `You win!! you selected ${playerSelection} and computer choose ${computerSlection}`;
    }
    else if(playerSelection === "scissor" && computerSlection === "paper"){
        
        playerResult.textContent = ++playerScore;
        roundResult.textContent = `You win!! you selected ${playerSelection} and computer choose ${computerSlection}`;

    }
    else if(playerSelection === "scissor" && computerSlection === "rock"){
        
        computerResult.textContent = ++computerScore;
        roundResult.textContent = `You win!! you selected ${playerSelection} and computer choose ${computerSlection}`;
    }
    else{
        
        playerResult.textContent = ++playerScore;
        computerResult.textContent = ++computerScore;
        roundResult.textContent = `Tie! Both computer and you selected ${playerSelection}`;
    }
    results.appendChild(roundResult);
    updateResult(playerScore, computerScore);

}




function getPlayerChoice(e){
    let playerSelection = e.target.id;
    //console.log(`PS ${playerSelection} AND CS ${computerSlectio}`);
    playGame(playerSelection, getComputerChoice());


}
