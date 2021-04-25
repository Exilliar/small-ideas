import { Deck } from "./Deck";

export function basic() {
  const deck = new Deck();

  console.log(deck.cards);
  return deck.cards;
}
