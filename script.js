
//one round of RPS, compare player and computer's inputs, output result of the round
// 1. get user input
// 2. define values of R, P, and S compared to one another
// 3. compare inputs
// 4. output result of match
// Scoring: initialize score before function playRound
// Add one point in winning conditions
// Repeat funtion 5 times

function playGame() {
        let playerScore = 0;
        let computerScore = 0;
        let result;

    function playRound(playerSelection, computerSelection) {

        var playerSelection = prompt("Shoot!");
        playerSelection.toLowerCase();

        var computerSelection;
        function computerPlay() {
            var weapons = ["rock", "paper", "scissors"];
            computerSelection = weapons[Math.random() * weapons.length | 0];
            //console.log(computerSelection);
        }
        computerPlay();
        
        // define comparative values
        if (computerSelection == playerSelection) {
            result = "It's a draw!";
        }
        else if ((computerSelection == "rock" && playerSelection == "paper")
        || (computerSelection == "paper" && playerSelection == "scissors")
        || (computerSelection == "scissors" && playerSelection == "rock")) {
            playerScore++;
            result = "You win! :)";
        }
        else if ((computerSelection == "paper" && playerSelection == "rock")
        || (computerSelection == "scissors" && playerSelection == "paper")
        || (computerSelection == "rock" && playerSelection == "scissors")) {
            computerScore++;
            result = "You lose. :("
        }
        console.log("You selected " + playerSelection);
        console.log("Your computer selected " + computerSelection);
        console.log(result);
    }
    playRound ();
    playRound ();
    playRound ();
    playRound ();
    playRound ();
    console.log("Your score is: " + playerScore);
    console.log("Your computer's score is " + computerScore);
    if (playerScore == computerScore) {
        console.log("Draw");
    }
    else if (playerScore > computerScore) {
        console.log("You win");
    }
    else if (playerScore < computerScore) {
        console.log("You lose");
    }
}