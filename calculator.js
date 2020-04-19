class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
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
    if (num === "." & this.currentOperand.includes(".")) return
    this.currentOperand = this.currentOperand.toString() + num.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return
    if (this.previousOperant !== "") {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  compute() {
    console.log("risultato")
  }
}


const numberBtns = document.querySelectorAll("[data-num]")
const operationBtns = document.querySelectorAll("[data-operation]")
const equalsBtn = document.querySelector("[data-equals]")
const clearsBtn = document.querySelector("[data-clear]")
const deleteBtn = document.querySelector("[data-delete]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberBtns.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText)
    calculator.updateDisplay()
  })
})

operationBtns.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsBtn.addEventListener("click", button => {
  calculator.compute()
  calculator.updateDisplay()
})