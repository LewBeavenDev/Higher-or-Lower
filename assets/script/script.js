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
    console.log("Game Over");
    initGame();
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
}

// bet amount selector
let betAmount = document.getElementById("betAmountNumber");
// initialises starting bet to 10
let bet = 10;
// appends the HTML with the current bet sizing
betAmount.innerHTML = bet;

// increment bet sizing, maximum bet size is 100
document.getElementById('raiseBetBtn').addEventListener("click", raiseBet);
function raiseBet() {
  if (bet < 100) {
    bet += 10;
    totalScore -= 10;
    totalScoreNumber.innerHTML = totalScore;
    betAmount.innerHTML = bet;

  } else {
    console.log("maximum bet size is 100");
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
// Selecting lose screen pop up
let loseScreen = document.getElementById('loseScreen');
// Default lose screen to being invisible
loseScreen.style.visibility = 'hidden';
winScreen.style.visibility = 'hidden';

// Game Loop 

// const gameOver() {
//   if (totalScore <= 0) {
//     loseScreen.style.visibility = 'visible'
//   } else {
//     winScreen.style.visibility = 'visible'
//   }
// }



