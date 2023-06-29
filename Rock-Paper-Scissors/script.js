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

function getPlayerChoice() {
    let playerGuess = prompt('Enter your choice: Rock, Paper, or Scissors');
    playerGuess = playerGuess.toLowerCase().trim()
    if (playerGuess === "rock" || playerGuess === "paper" || playerGuess === "scissors") {
    return playerGuess;
    } else {
        alert("invalid input");
        return  getPlayerChoice();
    }
}

function oneGame(){
    let b = getComputerChoice();
    let a = getPlayerChoice();
    if ( a === "rock"){
        if(b === "paper"){
            l++
            return console.log("You Lose. Paper beats Rock")                 
        } else if( b === "rock"){
            return console.log("Its a tie")
        }else{
            w++
            return console.log("You Win. Rock beats Scissors")
        }
    }else if (a === "paper"){
        if(b === "scissors"){
            l++
                return console.log("You Lose. Scissors beats Paper")           
        } else if( b === "paper"){
            return console.log("Its a tie")
        }else{
            w++
                return console.log("You Win. Rock beats Scissors")
        }  
    } else {
        if(b === "rock"){
            l++
        return console.log("You Lose. Rock beats Scissors")           
        } else if( b === "scissors"){
            return console.log("Its a tie")
        }else{
            w++
        return console.log("You Win. Scissors beats Paper")
        }  
    }    
}

function game(){
    while (w < 5 && l < 5){
        oneGame()
        console.log("Your score : " + w + "- Computer Score: " + l)
    }
    if (w === 5){
        console.log("Yeeeeeeeey you won the game")
    }else{
        console.log("Boooooooooo you lose the game")
    }
}

game()
