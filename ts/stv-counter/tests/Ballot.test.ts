import { Ballot } from "../src/Ballot";

describe("Ballot", () => {
  let ballot: Ballot;
  beforeEach(() => {
    ballot = new Ballot(
      [
        {
          id: 0,
          name: "party 1",
          votes: 0,
          lost: false,
        },
        {
          id: 1,
          name: "party 2",
          votes: 0,
          lost: false,
        },
        {
          id: 2,
          name: "party 3",
          votes: 0,
          lost: false,
        },
      ],
      3
    );
  });
  describe("incRank", () => {
    it("should inc the rank", () => {
        ballot.incRank();
        expect(ballot.rank).toBe(1);
    });
    // TODO make work, not currently reading error message, always passes
    it("should return an error when the rank goes over the party limit", () => {
        ballot.incRank();
        ballot.incRank();
        expect(() => {
            ballot.incRank()
        }).toThrowError("Max parties reache");
    });
  });
});
