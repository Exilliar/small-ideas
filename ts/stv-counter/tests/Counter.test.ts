import { Counter } from "../src/Counter";
import { TestData, testData1, copy } from "./data";

describe("testData1", () => {
  let counter: Counter;
  let data: TestData;
  beforeEach(() => {
    data = copy(testData1);
    counter = new Counter(
      data.parties,
      data.parties.length,
      data.ballots,
      data.ballots.length,
      data.winners,
    );
  });
  it("should calc the votes correctly", () => {
    counter.countVotes(data.parties, data.ballots);

    expect(data.parties).toEqual(data.expected.countVotes);
  });
  it("should find the winner", () => {
    let actual = counter.findWinner();

    expect(actual.id).toBe(data.expected.findWinner);
  });
});
