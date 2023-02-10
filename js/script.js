function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier';
  } else if (argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

// computer moves
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* 
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else if (randomNumber == 3){
  computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);

// player moves
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else if (playerInput == '3'){
  playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);

function displayResult (argComputerMove, argPlayerMove){
  printMessage('Komputer zagrał ' + argComputerMove + ', a Ty zagrałeś ' + argPlayerMove);

  if (argPlayerMove == 'nieznany ruch'){
    printMessage('Bez rozstrzygnięcia!');
  } else if (argComputerMove == argPlayerMove){
    printMessage('Remis!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Komputer wygrywa!');
  }
}

displayResult(computerMove, playerMove);


/*
// Outcome
if (computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  } else if (computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  } else if (computerMove == 'kamień' && playerMove == 'nieznany ruch' || computerMove == 'papier' && playerMove == 'nieznany ruch' || computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Bez rozstrzygnięcia!');
  }
  */