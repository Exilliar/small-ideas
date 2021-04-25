export type Suit = "H" | "C" | "S" | "D";

export class Card {
  suit: Suit;
  value: number; // ace = 0, jack = 11, queen = 12, king = 13

  constructor(s: Suit, v: number) {
    this.suit = s;
    this.value = v;
  }
}
