// Creating Deck of Cards
let deck = [];
let ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
  "ace",
];
let suits = ["spades", "clubs", "hearts", "diamonds"];
let discardedCards = [];

// Function loops through 'ranks' and 'suits' array and populates a new array (deck).
function createDeck() {
  for (let suit in suits) {
    for (let rank in ranks) {
      deck.push(`${ranks[rank]}_of_${suits[suit]}`);
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

// upon higher button press, check if card was higher than the last, if so add bet amount * 2 to total score
function checkHigherResult() {
  if (card > discardedCards.length(-1)) {
    totalScore += betAmount * 2;
  } else {
    totalScore -= betAmount;
  }
}

// upon lower button press, check if card was lower than the last, if so add bet amount * 2 to total score
function checkLowerResult() {
  if (card < discardedCards.length(-1)) {
    totalScore += betAmount.innerHTML * 2;
  } else {
    totalScore -= betAmount.innerHTML;
  }
}

// bet amount selector
let betAmount = document.getElementById("betAmountNumber");
// initialises starting bet to 10
let bet = 10;
// appends the HTML with the current bet sizing
betAmount.innerHTML = bet;

// total score selector
let totalScore = document.getElementById("totalScoreNumber");
// initialises starting score to 100;
let currentScore = 100;
// appends the HTML with the current score
totalScore.innerHTML = currentScore;

// increment bet sizing, maximum bet size is 100
function raiseBet() {
  if (bet < 100 && currentScore > 0) {
    bet += 10;
    betAmount.innerHTML = bet;
    currentScore -= 10;
    totalScore.innerHTML = currentScore;
  } else {
    console.log("maximum bet size is 100");
  }
}
// decrement bet sizing, minimum bet size is 10
function lowerBet() {
  if (bet >= 20) {
    bet -= 10;
    betAmount.innerHTML = bet;
    currentScore += 10;
    totalScore.innerHTML = currentScore;
  } else {
    console.log("minimum bet is 10");
  }
}
