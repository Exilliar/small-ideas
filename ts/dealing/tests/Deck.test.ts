import { Deck } from "../src/Deck";
import { startDeck, topHalf, outOnce, outTwice, inOnce } from "./testData";

describe("basic tests", function () {
  it("should generate a correct deck on init", function () {
    const deck = new Deck();
    const cards = deck.cards;

    expect(cards).toEqual(startDeck);
  });
});

describe("splitCards", function () {
  it("should split the cards correctly", function () {
    const deck = new Deck();
    const { top, bottom } = deck.splitCards();
    expect(top).toEqual(topHalf);
  });
});

describe("shuffleOut", function () {
  it("should shuffle once correctly", function () {
    const deck = new Deck();
    deck.shuffleOut();
    const cards = deck.cards;

    expect(cards).toEqual(outOnce);
  });
  it("should shuffle twice correctly", function () {
    const deck = new Deck();
    deck.shuffleOut();
    deck.shuffleOut();
    const cards = deck.cards;
    expect(cards).toEqual(outTwice);
  });
  it("should shuffle 8 times correctly (reset the deck)", function () {
    const deck = new Deck();
    [1, 2, 3, 4, 5, 6, 7, 8].forEach((i) => {
      deck.shuffleOut();
    });
    const cards = deck.cards;
    expect(cards).toEqual(startDeck);
  });
});

describe("shuffleIn", function () {
  it("should shuffle once correctly", function () {
    const deck = new Deck();
    deck.shuffleIn();
    const cards = deck.cards;

    expect(cards).toEqual(inOnce);
  });
  it("should shuffle 52 times correctly (reset deck)", function () {
    const deck = new Deck();

    for (let i = 0; i < 52; i++) {
      deck.shuffleIn();
    }
    const cards = deck.cards;

    expect(cards).toEqual(startDeck);
  });
});
