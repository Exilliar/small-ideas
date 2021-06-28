export class NumberNode {
  val: boolean;
  letter: string;

  constructor(params: {
    val?: boolean;
    letter?: string;
  }) {
    if (params.val !== null) this.val = params.val;
    else if (params.letter) this.letter = params.letter;
  }
}
