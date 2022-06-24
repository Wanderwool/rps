let positions = ['Rock', 'Paper', 'Scissors'];
let result;
let computerSelection;
let playerSelection;
let playerScore = 0;
    let computerScore = 0;
function computerPlay(){
    let randomPosition = positions[Math.floor(Math.random() * positions.length)];

    return randomPosition;
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'Rock'.toLowerCase()) {
      switch(computerSelection){
          case "Rock":
            
                result = "Rock draws Rock"
                break;

            
          case "Paper":
            
                result = "You lost! Paper folds Rock"
                break;

            
          case "Scissors":
            
               result = "You won! Rock smashes Scissors"
                break;

          default:
                result = "Something went wrong"
                
        }
    }
   else if (playerSelection.toLowerCase() === "Paper".toLowerCase()) {
    switch(computerSelection){
        case "Rock":
          
              result = "You won! Paper folds Rock"
              break;

          
        case "Paper":
          
              result = "Paper draws paper"
              break;

          
        case "Scissors":
          
              result = "You lost! Scissors cuts Paper"
              break;
        default:
              result = "Something went wrong"
          
      }
    }
      else if (playerSelection.toLowerCase() === "Scissors".toLowerCase()) {
        switch(computerSelection){
            case "Rock":
              
                result = "You lost! Rock smashes Scissors"
                  break;

              
            case "Paper":
              
                result = "You won! Scissors cuts Paper"
                  break;

              
            case "Scissors":
              
                 result = "Scissors draws Scissors"
                  break;
            default:
                  result = "Something went wrong"    

              
      }
    }
      else {
        result = "There\'re not such choise as " + playerSelection;
      }
      
      
      
      console.log(playerSelection);
      console.log(computerSelection);
      console.log(result);
      return result;
   }            
 
  function game(){
    
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your position");
    computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (result.includes("won"))
        {
             playerScore += 1; 
        }
        else if (result.includes("lost"))
        {
             computerScore += 1 ;
        }
     }

     if (playerScore > computerScore){
         console.log("Player won " + playerScore + " to " + computerScore);
     }
     else if (computerScore > playerScore) {
        console.log("Computer won " + computerScore + " to " + playerScore);

     }
     else {
         console.log("It\'s draw. Score is " + playerScore + " : " + computerScore);
     }
  }
  
  

game()


