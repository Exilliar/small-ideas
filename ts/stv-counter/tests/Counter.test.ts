import { Counter } from "../src/Counter";
import * as data from "./data";

describe("findWinner", () => {
  let counter: Counter;
  beforeEach(() => {
    console.log("before");
    counter = new Counter(
      data.parties,
      data.parties.length,
      data.ballots,
      data.ballots.length,
      1
    );
  });
  describe("countVotes", () => {
    it("should calc the votes correctly", () => {
      counter.countVotes();

      expect(counter.parties).toEqual([
        {
          id: 0,
          name: "party 1",
          votes: 2,
          lost: false,
        },
        {
          id: 1,
          name: "party 2",
          votes: 1,
          lost: false,
        },
        {
          id: 2,
          name: "party 3",
          votes: 1,
          lost: false,
        },
        {
          id: 3,
          name: "party 4",
          votes: 1,
          lost: false,
        },
      ]);
    });
  });
  it("should find the winner", () => {
    let actual = counter.findWinner();
    let expected = data.parties[0];

    expect(actual.id).toBe(expected.id);
  });
});
