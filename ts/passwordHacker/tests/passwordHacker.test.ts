import findPassword from "../src/passwordHacker";
import User from "../src/User";
import { genPassword } from "./functions";

describe("findPassword", function () {
  it("should work for random passwords of length 2", function () {
    const pass1 = genPassword(2);
    const pass2 = genPassword(2);
    const pass3 = genPassword(2);

    expect(findPassword(new User(pass1))).toBe(pass1);
    expect(findPassword(new User(pass2))).toBe(pass2);
    expect(findPassword(new User(pass3))).toBe(pass3);
  });
  it("should work for random passwords of length 3", function () {
    const pass1 = genPassword(3);
    const pass2 = genPassword(3);
    const pass3 = genPassword(3);

    expect(findPassword(new User(pass1))).toBe(pass1);
    expect(findPassword(new User(pass2))).toBe(pass2);
    expect(findPassword(new User(pass3))).toBe(pass3);
  });
  it("Should return 'not found' if the password cannot be found", function () {
    // just a random string above the max len limit
    const pass = "poihdfnapofihaeoipghoisndgiposhbiadoinfafef";

    expect(findPassword(new User(pass))).toBe("not found");
  });
});
