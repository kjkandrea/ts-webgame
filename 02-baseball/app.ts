let candidate: number[]
let array: number[] = []

// pick number
function chooseNumber() {
  reset()

  for (let i = 0; i < 4; i++ ) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
    array.push(chosen)
  }
}

function reset() {
  candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  array = []
}

chooseNumber()
console.log(array)

// views
const { body } = document
const result = document.createElement('h1')
body.append(result)
const form = document.createElement('form')
body.append(form)
const input = document.createElement('input')
form.append(input)
input.type = 'text'
input.maxLength = 4
const button = document.createElement('button')
button.textContent = '입력'
form.append(button)

let wrongCount = 0
form.addEventListener('submit', (e) => {
  e.preventDefault()
  onSubmitForm()
})

function onSubmitForm() {
    const answer = input.value.trim()

  // correct
  if (answer === array.join('')) {
    result.textContent = '홈런'
    input.value = '';
    input.focus()
    chooseNumber()
    wrongCount = 0
  } else { // wrong
    const answerArray = answer.split('')
    let strike = 0
    let ball = 0
    wrongCount += 1
    // gameover
    if ( wrongCount > 10) {
      result.textContent = `10Out! 답은 ${array.join(',')} 이었습니다.` 
      input.value = '';
      input.focus()
      chooseNumber()
      wrongCount = 0
    } else {
      for (let i = 0; i <= 3; i++ ) {
        if (Number(answerArray[i]) === array[i]) {
          strike += 1
        } else if (array.indexOf(Number(answerArray[i])) > -1) {
          ball += 1
        }
      }
      result.textContent = `${strike} 스트라이크, ${ball} 볼 입니다.`
      input.value = ''
      input.focus()
    }
  }
}