class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand
    this.currentOperand = currentOperand
    this.clear()
  }
  clear() {
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
  }

  delete() {

  }

  appendNum(num) {

  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {

  }

}


const numberBtn = document.querySelectorAll("[data-num]")
const operatorBtn = document.querySelectorAll("[data-operation]")
const equalsBtn = document.querySelector("[data-equals]")
const clearsBtn = document.querySelector("[data-clear]")
const deleteBtn = document.querySelector("[data-delete]")
const previousOperand = document.querySelector("[data-previous-operand]")
const currentOperand = document.querySelector("[data-current-operand]")