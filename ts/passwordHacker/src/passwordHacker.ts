import User from "./User";
import maxLen from "./data/maxLen";
import Password from "./Password";

function findPassword(user: User) {
  for (let l = 0; l < maxLen; l++) {
    let password = new Password(l);

    while (password.indexes[0] !== -1) {
      if (user.accessAccount(password.text)) return password.text;
      password.incIndexes(l);
    }
  }

  return "not found";
}

export default findPassword;
