import Password from "../src/Password";
import possChars from "../src/data/possChars";
import { incIndexes } from "./functions";

describe("Password class", function () {
  let password: Password;
  const passLen = 2;

  beforeEach(function () {
    password = new Password(passLen);
  });

  it("Should just increment the last index when possible", function () {
    password.incIndexes(passLen);

    expect(password.indexes).toEqual([0, 0, 1]);

    incIndexes(password, 10);

    expect(password.indexes).toEqual([0, 0, 11]);
  });

  it("Should inc the next number when needed", function () {
    incIndexes(password, possChars.length);

    expect(password.indexes).toEqual([0, 1, 0]);

    incIndexes(password, 1);

    expect(password.indexes).toEqual([0, 1, 1]);
  });

  it("Should return -1 in first index of array when max is reached", function () {
    password = new Password(0);

    incIndexes(password, possChars.length);

    expect(password.indexes).toEqual([-1]);
  });
});
