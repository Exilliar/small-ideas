import { Card, Suit } from "./Card";

export class Deck {
  cards: Card[] = [];
  half = 26; // always playing with one deck of cards, so half is fixed

  constructor() {
    this.genDeck();
  }

  genDeck() {
    ["H", "S", "D", "C"].forEach((s: Suit) => {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].forEach((v) => {
        this.cards.push(new Card(s, v));
      });
    });
  }

  splitCards() {
    // function to split the cards into two separate decks, each the same length
    const top = this.cards.splice(0, this.half);
    const bottom = this.cards.splice(-this.half);

    return {
      top,
      bottom,
    };
  }

  shuffleOut() {
    const { top, bottom } = this.splitCards();

    let newDeck: Card[] = [];

    for (let i = 0; i < this.half; i++) {
      newDeck.push(top[i]);
      newDeck.push(bottom[i]);
    }

    this.cards = newDeck;
  }
  shuffleIn() {
    const { top, bottom } = this.splitCards();

    let newDeck: Card[] = [];

    for (let i = 0; i < this.half; i++) {
      newDeck.push(bottom[i]);
      newDeck.push(top[i]);
    }

    this.cards = newDeck;
  }
}
