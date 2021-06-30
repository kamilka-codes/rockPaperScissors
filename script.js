const progress_span = document.getElementById("progress");
const result_span = document.getElementById("result");
const newGame = document.getElementById("newgame");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function playGame () {
    const playerScore = 0;
    const computerScore = 0;
    
        function playRound() {
            var computerSelection;
            var functCounter = 0;

            while (functCounter < 1) {
            function computerPlay () {
                var weapons = ["rock", "paper", "scissors"];
                computerSelection = weapons[Math.random() * weapons.length | 0];
                console.log(computerSelection);
                functCounter++;
                break ;
            }
            computerPlay();}

            var playerSelection;
            rock_div.addEventListener('click', function() {
                playerSelection = "rock";
                console.log(playerSelection);
                })
            paper_div.addEventListener('click', function() {
                playerSelection = "paper";
                console.log(playerSelection);
                })
            scissors_div.addEventListener('click', function() {
                playerSelection = "scissors";
                console.log(playerSelection);
                })

            function scoring(playerSelection, computerSelection) {
                if ((playerSelection == "rock" && computerSelection == "scissors") || 
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")) {
                    playerScore++;
                    result_span.innerHTML("You win!");
                    progress_span.innterHTML("Your score is: " + playerScore <br> "Your computer's score is: " + computerScore);
                }
                else if ((playerSelection == "scissors" && computerSelection == "rock") || 
                (playerSelection == "rock" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "scissors")) {
                    computerScore++;
                    result_span.innerHTML("You lose!");
                    progress_span.innterHTML("Your score is: " + playerScore <br> "Your computer's score is: " + computerScore);
                }
            scoring(playerSelection, computerSelection);
        }  
    }
    while (computerScore <= 5 && playerScore <= 5) {
        playRound();
        }
}
newGame.addEventListener("click", ()=> {
    playGame();
});