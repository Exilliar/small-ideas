import { Ballot } from "./Ballot";
import { Party } from "./models/Party";

export class Counter {
  constructor(
    public parties: Party[],
    public numParties: number,
    public ballots: Ballot[],
    public numVotes: number,
    public winners: number, // the number of available "winner" positions
  ) {}

  findWinner(): Party {
    let winner: Party;

    while (!winner) {
      winner = this.countRound();
    }

    return winner;
  }

  // A single round of counting
  countRound(): Party {
    let winner: Party;

    this.parties = this.countVotes(this.parties, this.ballots);
    winner = this.checkWinner(this.numVotes, this.winners, this.parties);

    if (!winner) {
      let lowest = this.findLowest(this.parties);
      this.incVotes(lowest, this.ballots);
    }

    return winner;
  }

  countVotes(parties: Party[], ballots: Ballot[]): Party[] {
    parties.forEach((p) => {
      let voteCount = 0;
      ballots.forEach((b) => {
        if (b.getVote().id === p.id) {
          voteCount++;
        }
      });
      p.votes = voteCount;
    });
    return parties;
  }

  // currently only works for one party
  checkWinner(numVotes: number, winners: number, parties: Party[]): Party {
    const votesNeeded = numVotes / (winners + 1);
    for (let i = 0; i < parties.length; i++) {
      if (parties[i].votes > votesNeeded) {
        return parties[i];
      }
    }
  }

  findLowest(parties: Party[]): Party {
    let lowest = parties[0];

    parties.forEach((p) => {
      if (p.votes < lowest.votes && p.lost !== true) {
        lowest = p;
      }
    });

    lowest.lost = true;

    return lowest;
  }

  incVotes(lowest: Party, ballots: Ballot[]): void {
    ballots.forEach((b) => {
      if (b.getVote().id === lowest.id) {
        b.incRank();
      }
    });
  }
}
