import { Ballot } from "../src/Ballot";
import { Party } from "../src/models/Party";

interface Expected {
  findWinner: number; // the id of the winning party
  countRound: Party;
  countVotes: Party[];
  checkWinner: Party;
  findLowest: Party;
  incVotes: Ballot[];
}

export interface TestData {
  parties: Party[];
  ballots: Ballot[];
  winners: number;
  expected: Expected;
}

let party1: Party = {
  id: 0,
  name: "party 1",
  votes: 0,
  lost: false,
};
let party2: Party = {
  id: 1,
  name: "party 2",
  votes: 0,
  lost: false,
};
let party3: Party = {
  id: 2,
  name: "party 3",
  votes: 0,
  lost: false,
};
let party4: Party = {
  id: 3,
  name: "party 4",
  votes: 0,
  lost: false,
};

let testData1: TestData = {
  parties: [party1, party2, party3, party4],
  ballots: [
    new Ballot([party1, party2, party3, party4], 4),
    new Ballot([party2, party3, party4, party1], 4),
    new Ballot([party3, party4, party1, party2], 4),
    new Ballot([party4, party1, party2, party3], 4),
    new Ballot([party1, party2, party3, party4], 4),
  ],
  winners: 1,
  expected: {
    findWinner: 0,
    countRound: {} as Party,
    countVotes: [
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
    ],
    checkWinner: {} as Party,
    findLowest: {} as Party,
    incVotes: [],
  },
};

export { testData1 };

// function to copy over the values from the test object (ie. testData1) into whatever data object is used in the test file
// a new function is needed cuz copying object values (not references) is super annoying
// and a custom copy function was needed
export function copy(obj: TestData): TestData {
  let newObj: TestData = {} as TestData;

  // copy the parties
  newObj.parties = [];
  obj.parties.forEach((val) => newObj.parties.push(Object.assign({}, val)));

  // copy the ballots
  newObj.ballots = [];
  obj.ballots.forEach((val) => {
    let numParties = obj.parties.length;
    let votes: Party[] = [];
    val.votes.forEach((v) => votes.push(Object.assign({}, v)));

    let newBallot = new Ballot(votes, numParties);
    newObj.ballots.push(newBallot);
  });

  // copy winners and expected, these will not change, so nothing fancy needed here
  newObj.winners = obj.winners;
  newObj.expected = obj.expected;

  return newObj;
}
