

// Selecting lose/win screen pop up
let loseScreen = document.getElementById('loseScreen');
let winScreen = document.getElementById('winScreen');
// Default lose/win screen to being invisible
loseScreen.style.visibility = 'hidden';
winScreen.style.visibility = 'hidden';

// welcome screen selector
let welcomeScreen = document.getElementById('welcomeScreen');
// Default welcome screen to be hidden by default
welcomeScreen.style.visibility = 'visible';

// bet amount selector
let betAmount = document.getElementById("betAmountNumber");
// initialises starting bet to 10
let bet = 10;
// appends the HTML with the current bet sizing
betAmount.innerHTML = bet;


// Creating Deck of Cards
let deck = [];
let ranks = [
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "jack", value: 11 },
  { label: "queen", value: 12 },
  { label: "king", value: 13 },
  { label: "ace", value: 14 },
];
let suits = ["spades", "clubs", "hearts", "diamonds"];
let discardedCards = [];
let totalScore = 100;

// hides welcome screen
function hideWelcome() {
  document.getElementById('welcomeScreen').style.animation = "slideUp 1s ease-in forwards";
}

// play game button selector
let firstPlayBtn = document.getElementById('firstPlayBtn');
firstPlayBtn.addEventListener('click', hideWelcome);

// 
function gameLoss () {
  loseScreen.style.visibility = 'visible';
  loseScreen.style.animation = 'pop 0.2s ease';
}

function gameWin () {
  finalScore += totalScore;
  document.getElementById('finalScore').innerHTML = totalScore + bet;
  console.log(finalScore);
  winScreen.style.visibility = 'visible';
  winScreen.style.animation = 'pop 0.2s ease';
}

// play again win/lose button selector
let playAgainBtnLose = document.getElementById('playAgainBtnLose');
let playAgainBtnWin = document.getElementById('playAgainBtnWin');

// play again win/lose button reinitialise game
playAgainBtnLose.addEventListener('click', initGame);
playAgainBtnWin.addEventListener('click', initGame);



// Function loops through 'ranks' and 'suits' array and populates a new array (deck).
function createDeck() {
  for (let suit in suits) {
    for (let rank in ranks) {
      deck.push(`${ranks[rank]["label"]}_of_${suits[suit]}`);
    }
  }
  return deck;
}

// Shuffle function
// For every card in the deck, selects a random card, and replaces that with the new card. Resulting in a truly shuffled deck of cards.
function shuffleDeck() {
  for (let card in deck) {
    let tempCard = deck[card];
    let randomCard = Math.floor(Math.random() * 52);
    deck[card] = deck[randomCard];
    deck[randomCard] = tempCard;
  }
}

// Initialise Game
function initGame() {
  deck = [];
  discardedCards = [];
  createDeck();
  shuffleDeck();
  dealNewCard();
  totalScore = 100;
  document.getElementById("totalScoreNumber").innerHTML = totalScore;
  bet = 10;
  betAmount.innerHTML = bet; 
  loseScreen.style.visibility = 'hidden';
  winScreen.style.visibility = 'hidden';    
}

initGame();

// Dealing new card
function dealNewCard() {
  // with a full deck just deals the top card
  if (deck.length === 52) {
    card = deck.pop();
    console.log(card);
    document.querySelector(
      ".currentCard"
    ).src = `./assets/PNG-cards-1.3/${card}.png`;
    document.querySelector(".currentCard").alt = `${card}`;
  } // if there are cards left to be dealt, puts current card in the discard array and deals a new card
  else if (deck.length < 52 && deck.length >= 1) {
    discardedCards.push(card);
    console.log(`Discard pile: ${discardedCards}`);
    card = deck.pop();
    console.log(`current card is ${card} `);
    document.querySelector(
      ".currentCard"
    ).src = `./assets/PNG-cards-1.3/${card}.png`;
    document.querySelector(".currentCard").alt = `${card}`;
  } // if there are no more cards to be dealt, game ends and game re initialises
  else {
    gameWin();
  }
}

// Grabs the value from the card objects and splits the number from the front.
function getCardValue(card) {
  const label = card.split("_")[0];
  let cardValue = 0;
  for (let rank in ranks) {
    const currentRank = ranks[rank];
    if (currentRank["label"] === label) {
      cardValue = currentRank["value"];
      break;
    }
  }
  return cardValue;
}

// upon higher button press, check if card was higher than the last, if so add bet amount * 2 to total score
document
  .getElementById("higherBtn")
  .addEventListener("click", checkHigherResult);
function checkHigherResult() {
  const currentCard = card;
  dealNewCard();
  const newCard = card;
  if (getCardValue(currentCard) < getCardValue(newCard)) {
    totalScore += parseInt(betAmount.innerHTML) * 2;
  } else {
    totalScore -= parseInt(betAmount.innerHTML);
  }
  document.getElementById("totalScoreNumber").innerHTML = totalScore;
  if (totalScore <= 0) {
    gameLoss();
  }
}

// upon lower button press, check if card was lower than the last, if so add bet amount * 2 to total score
document
  .getElementById("lowerBtn")
  .addEventListener("click", checkLowerResult);
function checkLowerResult() {
  const currentCard = card;
  dealNewCard();
  const newCard = card;
  if (getCardValue(currentCard) > getCardValue(newCard)) {
    totalScore += parseInt(betAmount.innerHTML) * 2;
  } else {
    totalScore -= parseInt(betAmount.innerHTML);
  }
  document.getElementById("totalScoreNumber").innerHTML = totalScore;
  if (totalScore <= 0) {
    gameLoss();
  }
}



// increment bet sizing, maximum bet size is 100
document.getElementById('raiseBetBtn').addEventListener("click", raiseBet);
function raiseBet() {
  if (bet < (totalScore + bet)) {
    bet += 10;
    totalScore -= 10;
    totalScoreNumber.innerHTML = totalScore;
    betAmount.innerHTML = bet;

  } else {
    console.log("maximum bet reached");
  }
}

// decrement bet sizing, minimum bet size is 10
document.getElementById('lowerBetBtn').addEventListener("click", lowerBet);
function lowerBet() {
  if (bet >= 20) {
    bet -= 10;
    totalScore += 10;
    totalScoreNumber.innerHTML = totalScore;
    betAmount.innerHTML = bet;
    
  } else {
    console.log("minimum bet is 10");
  }
}


// sounds 

// button click sound selector 
const buttonSound = document.getElementById('buttonSound');

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", playButtonSound);
})

function playButtonSound() {
  buttonSound.currentTime = 0;
  buttonSound.play();
}









