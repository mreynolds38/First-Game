// My first game of 21!

// Variables for the game
var myTotal = 0;
var dealerTotal = 0;

// This function gets a random card number
function getCard() {
    // Get random number between 1 and 11
    return Math.floor(Math.random() * 11) + 1;
}

// This function updates what we see on the screen
function updateScreen() {
    // Make the message for the screen
    var gameDisplay = `
        <h1>Game of 21!</h1>
        <p>Your total is: ${myTotal}</p>
        <p>Dealer total is: ${dealerTotal}</p>
    `;

    // Show who won if game is over
    if (myTotal > 21) {
        gameDisplay += "<p style='color: red'>You went over 21! You lose!</p>";
    }
    else if (dealerTotal > 21) {
        gameDisplay += "<p style='color: green'>Dealer went over 21! You win!</p>";
    }
    else if (myTotal == 21) {
        gameDisplay += "<p style='color: green'>You got 21! You win!</p>";
    }
    else if (dealerTotal == 21) {
        gameDisplay += "<p style='color: red'>Dealer got 21! You lose!</p>";
    }

    // Put it on the screen
    document.getElementById("gameArea").innerHTML = gameDisplay;
}

// This happens when you click Hit
function hitMe() {
    // Add a new card to my total
    myTotal = myTotal + getCard();
    
    // Dealer gets a card if under 17
    if (dealerTotal < 17) {
        dealerTotal = dealerTotal + getCard();
    }

    // Show the new totals
    updateScreen();
}

// This happens when you click Stay
function stay() {
    // Dealer keeps getting cards until they have 17 or more
    while (dealerTotal < 17) {
        dealerTotal = dealerTotal + getCard();
    }

    // Show who won
    var gameDisplay = `
        <h1>Game Over!</h1>
        <p>Your total: ${myTotal}</p>
        <p>Dealer total: ${dealerTotal}</p>
    `;

    if (dealerTotal > 21 || myTotal > dealerTotal) {
        gameDisplay += "<p style='color: green'>You win!</p>";
    }
    else if (myTotal < dealerTotal) {
        gameDisplay += "<p style='color: red'>Dealer wins!</p>";
    }
    else {
        gameDisplay += "<p>It's a tie!</p>";
    }

    // Put it on the screen
    document.getElementById("gameArea").innerHTML = gameDisplay;
}

// This starts a new game
function newGame() {
    // Reset the totals
    myTotal = 0;
    dealerTotal = 0;

    // Give starting cards
    myTotal = getCard() + getCard();
    dealerTotal = getCard();

    // Show the new game
    updateScreen();
}

// Start the game when the page loads
window.onload = newGame;