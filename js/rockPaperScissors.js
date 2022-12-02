function RPS() {
   
    let machineChoice = Math.random();
    let stopGame = false;
    let userWins = 0;
    let machineWins = 0; 
    

    let machineRock = machineChoice < .33; 
    let machinePaper = machineChoice > .33 && machineChoice < .67;
    let machineScissors = machineChoice > .66;

    while (!stopGame) {
        let userChoice = prompt(`Let\'s play rock-paper-scissors. What do you pick?`);
       
        if (userChoice === 'rock' && machinePaper) {
            alert(`You chose ${userChoice} and I chose paper. I win!`);
            machineWins++;
            let playAgain = prompt(`Do you want to play again? (Y|N)`);
            if (playAgain.toUpperCase() === 'N' ) {
                 stopGame = true;
            } else {
                scoreboard();
            }
        } else if (userChoice === 'paper' && machineScissors) {
            alert(`You chose ${userChoice} and I chose scissors. I win!`);
            machineWins++;
            let playAgain = prompt(`Do you want to play again? (Y|N)`);
            if (playAgain.toUpperCase() === 'N' ) {
                stopGame = true;
            } else {
                scoreboard();
            }
           
        } else if (userChoice === 'scissors' && machineRock) {
            alert(`You chose ${userChoice} and I chose rock. I win!`);
            machineWins;
            let playAgain = prompt(`Do you want to play again? (Y|N)`);
            if (playAgain.toUpperCase() === 'N' ) {
                stopGame = true;
            } else {
                scoreboard();
            }
        } else if (userChoice === 'rock' && machineScissors) {
            alert(`You chose ${userChoice} and I chose scissors. You win!`);
            userWins++;
            let playAgain = prompt(`Do you want to play again? (Y|N)`);
            if (playAgain.toUpperCase() === 'N' ) {
                stopGame = true;
            } else {
                scoreboard();
            }
        } else if (userChoice === 'paper' && machineRock) {
            alert(`You chose ${userChoice} and I chose rock. You win!`);
            userWins++;
            let playAgain = prompt(`Do you want to play again? (Y|N)`);
            if (playAgain.toUpperCase() === 'N' ) {
                stopGame = true;
            } else {
                scoreboard();
            }
        } else if (userChoice === 'scissors' && machinePaper) {
            alert(`You chose ${userChoice} and I chose rock. You win!`);
            userWins++;
            let playAgain = prompt(`Do you want to play again? (Y|N)`);
            if (playAgain.toUpperCase() === 'N' ) {
                stopGame = true;
            } else {
                scoreboard();
            }
        } else {
            alert(`Huh? I don\'t recognize that input. Please chose rock, paper, or scissors.`);
            continue;
        }
    }

    return alert(`Good game, thanks for playing!`);
};

const scoreboard = () => {
    alert(`Okay, the score is\n
                            You: ${userWins}\n
                            Me: ${machineWins}`);
}

RPS();

