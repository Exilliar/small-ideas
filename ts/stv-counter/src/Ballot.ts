import { Party } from "./models/Party";

export class Ballot {
  rank = 0;

  constructor(public votes: Party[], public numParties: number) {}

  incRank(): void | Error {
    if (this.rank + 1 < this.numParties) {
      this.rank++;
    } else {
      throw new Error("Max parties reached");
    }
  }
  getVote(): Party {
    return this.votes[this.rank];
  }
}
