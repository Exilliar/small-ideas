import possChars from "../src/data/possChars";
import Password from "../src/Password";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function genPassword(len: number) {
  let password = "";

  for (let i = 0; i < len; i++) {
    password += possChars[getRndInteger(0, possChars.length)];
  }

  return password;
}

export function incIndexes(password: Password, numInc: number) {
  for (let i = 0; i < numInc; i++) {
    password.incIndexes(password.indexes.length - 1);
  }

  return password;
}

export default genPassword;
