let positions = ['Rock', 'Paper', 'Scissors'];
function computerPlay(){
    let randomPosition = positions[Math.floor(Math.random() * positions.length)];

    return randomPosition;
}

console.log(computerPlay());