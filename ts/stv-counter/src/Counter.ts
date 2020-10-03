import { Ballot } from "./Ballot";
import { Party } from "./models/Party";
import * as data from "../tests/data";

export class Counter {
  constructor(
    public parties: Party[],
    public numParties: number,
    public ballots: Ballot[],
    public numVotes: number,
    public winners: number // the number of available "winner" positions
  ) {}

  findWinner(): Party {
    let winner: Party;

    while (!winner) {
      this.countVotes();
      winner = this.checkWinner();
      if (!winner) {
        let lowest = this.findLowest();
        this.incVotes(lowest);
      }
    }

    return winner;
  }

  countVotes(): void {
    this.parties.forEach((p) => {
      let voteCount = 0;
      this.ballots.forEach((b) => {
        if (b.getVote().id === p.id) {
          voteCount++;
        }
      });
      p.votes = voteCount;
    });
  }

  // currently only works for one party
  checkWinner(): Party {
    const votesNeeded = this.numVotes / (this.winners + 1);
    for (let i = 0; i < this.parties.length; i++) {
      if (this.parties[i].votes > votesNeeded) {
        return this.parties[i];
      }
    }
  }

  findLowest(): Party {
    let lowest = this.parties[0];

    this.parties.forEach((p) => {
      if (p.votes < lowest.votes && p.lost !== true) {
        lowest = p;
      }
    });

    lowest.lost = true;

    return lowest;
  }

  incVotes(lowest: Party): void {
    this.ballots.forEach((b) => {
      if (b.getVote().id === lowest.id) {
        b.incRank();
      }
    });
  }
}

// let counter = new Counter(
//   data.parties,
//   data.parties.length,
//   data.ballots,
//   data.ballots.length,
//   1
// );

// console.log("winner:", counter.findWinner());
