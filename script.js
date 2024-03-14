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
let currentCardValue = 0;

// Function loops through 'ranks' and 'suits' array and populates a new array (deck).
function createDeck() {
  for (let suit in suits) {
    for (let rank in ranks) {
      deck.push(`${ranks[rank]}_of_${suits[suit]}`);
    }
  }
  return deck;
}

createDeck();

console.log(deck);

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

shuffleDeck();

// console.log(deck);

let card = deck.pop();
console.log(card);

document.querySelector(
  ".currentCard"
).src = `./assets/PNG-cards-1.3/${card}.png`;
document.querySelector(".currentCard").alt = `${card}`;
