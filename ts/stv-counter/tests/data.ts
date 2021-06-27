import { Ballot } from "../src/Ballot";
import { Party } from "../src/models/Party";

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
let parties: Party[] = [party1, party2, party3, party4];
let numParties = parties.length;
let ballots: Ballot[] = [
  new Ballot([party1, party2, party3, party4], numParties),
  new Ballot([party2, party3, party4, party1], numParties),
  new Ballot([party3, party4, party1, party2], numParties),
  new Ballot([party4, party1, party2, party3], numParties),
  new Ballot([party1, party2, party3, party4], numParties),
];

export { parties, numParties, ballots };
