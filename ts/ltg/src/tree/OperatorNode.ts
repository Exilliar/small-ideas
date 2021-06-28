import { LtgNode, NumberNode, Operators, LetterVal } from "..";

export class OperatorNode {
  operator: Operators;
  leftNode: LtgNode;
  rightNode: LtgNode;

  constructor(lNode: LtgNode, rNode: LtgNode, op: Operators) {
    this.leftNode = lNode;
    this.rightNode = rNode;

    this.operator = op;
  }

  // calculate the result based on the left and right node
  calcRes(): boolean {
    let leftVal: boolean;
    let rightVal: boolean;

    if (this.leftNode instanceof NumberNode) leftVal = this.leftNode.val;
    else if (this.leftNode instanceof OperatorNode)
      leftVal = this.leftNode.calcRes();

    if (this.rightNode instanceof NumberNode) rightVal = this.rightNode.val;
    else if (this.rightNode instanceof OperatorNode)
      rightVal = this.rightNode.calcRes();

    let returnVal: boolean;

    switch (this.operator) {
      case "^":
        returnVal = leftVal && rightVal;
        break;
      case "v":
        returnVal = leftVal || rightVal;
        break;
    }

    return returnVal;
  }

  // function to set the vals of NumberNodes based on their letters
  propogateVal(letterVal: LetterVal[]) {
    if (this.leftNode instanceof NumberNode) this.leftNode.setVal(letterVal);
    else if (this.leftNode instanceof OperatorNode) this.leftNode.propogateVal(letterVal);

    if (this.rightNode instanceof NumberNode) this.rightNode.setVal(letterVal);
    else if (this.leftNode instanceof OperatorNode) this.rightNode.propogateVal(letterVal);
  }
}
