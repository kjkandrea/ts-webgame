export {}

let numberOne, numberTwo, answer

const question = document.createElement('div')
document.body.append(question)

const form = document.createElement('form')
document.body.append(form)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (answer === Number(input.value)) {
    resultDiv.textContent = '딩동댕' 
    newNumber()
  } else {
    resultDiv.textContent = '땡'
  }

  resetInput(input)
})

const input = document.createElement('input')
input.type = 'number'
form.append(input)

const button = document.createElement('button')
button.textContent = '입력!'
form.append(button)

const resultDiv = document.createElement('div')
document.body.append(resultDiv)

newNumber()

function newNumber () {
  numberOne = Math.ceil(Math.random() * 9)
  numberTwo = Math.ceil(Math.random() * 9)

  newAnswer(numberOne, numberTwo)
  viewAnswer(numberOne, numberTwo)
}

function newAnswer (arg1, arg2) {
  answer = arg1 * arg2
}

function viewAnswer (arg1, arg2) {
  question.textContent = `${arg1} * ${arg2}`
}

function resetInput(inputEl) {
  inputEl.value = ''
  inputEl.focus()
}