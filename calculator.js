class Calculator {
  constructor(previousTypedText, currentTypedText) {
    this.previousTypedText = previousTypedText
    this.currentTypedText = currentTypedText
  }

}


const numberBtn = document.querySelectorAll("[data-num]")
const operatorBtn = document.querySelectorAll("[data-operation]")
const equalsBtn = document.querySelector("[data-equals]")
const clearsBtn = document.querySelector("[data-clear]")
const deleteBtn = document.querySelector("[data-delete]")
const previousTypedText = document.querySelector("[data-previously-typed]")
const currentTypedText = document.querySelector("[data-currently-typing]")