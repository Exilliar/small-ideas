export default class User {
  private password: string;

  constructor(pass: string) {
    this.password = pass;
  }

  accessAccount(pass: string) {
    return pass === this.password;
  }
}
