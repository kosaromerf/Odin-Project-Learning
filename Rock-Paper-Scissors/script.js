let w = 0
let l = 0

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3);
    let computerGuess = '';
    switch (computerNumber) {
      case 0:
        computerGuess = 'rock';
        break;
      case 1:
        computerGuess = 'paper';
        break;
      case 2:
        computerGuess = 'scissors';
        break;
    }    
    return computerGuess;
  }

function oneGame(playerChoice,computerChoice){
    if ( playerChoice === "rock"){
        if(computerChoice === "paper"){
            l++
            return console.log("You Lose. Paper beats Rock")                 
        } else if( computerChoice === "rock"){
            return console.log("Its a tie")
        }else{
            w++
            return console.log("You Win. Rock beats Scissors")
        }
    }else if (playerChoice === "paper"){
        if(computerChoice === "scissors"){
            l++
                return console.log("You Lose. Scissors beats Paper")           
        } else if( computerChoice === "paper"){
            return console.log("Its a tie")
        }else{
            w++
                return console.log("You Win. Rock beats Scissors")
        }  
    } else {
        if(computerChoice === "rock"){
            l++
        return console.log("You Lose. Rock beats Scissors")           
        } else if( computerChoice === "scissors"){
            return console.log("Its a tie")
        }else{
            w++
        return console.log("You Win. Scissors beats Paper")
        }  
    }    
}

function updateResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
}

function game(){
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  rock.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = oneGame("rock", computerChoice);
    updateResult(`You chose Rock. ${result} Computer chose ${computerChoice}.`);
    checkScore()
  });

  paper.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = oneGame("paper", computerChoice);
    updateResult(`You chose Paper. ${result} Computer chose ${computerChoice}.`);
    checkScore()
  });

  scissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = oneGame("scissors", computerChoice);
    updateResult(`You chose Scissors. ${result} Computer chose ${computerChoice}.`);
    checkScore()
  });

}

function checkScore() {
  if (w === 5) {
    console.log("Yeeeeeeeey you won the game");
  } else if (l === 5) {
    console.log("Boooooooooo you lose the game");
  } else {
    console.log("Your score: " + w + " - Computer Score: " + l);
  }
}

game()
 