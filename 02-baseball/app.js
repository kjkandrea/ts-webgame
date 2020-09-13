var candidate;
var array = [];
// pick number
function chooseNumber() {
    reset();
    for (var i = 0; i < 4; i++) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
function reset() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
}
chooseNumber();
console.log(array);
// views
var body = document.body;
var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var wrongCount = 0;
form.addEventListener('submit', function (e) {
    e.preventDefault();
    onSubmitForm();
});
function onSubmitForm() {
    var answer = input.value.trim();
    // correct
    if (answer === array.join('')) {
        result.textContent = '홈런';
        input.value = '';
        input.focus();
        chooseNumber();
        wrongCount = 0;
    }
    else { // wrong
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongCount += 1;
        // gameover
        if (wrongCount > 10) {
            result.textContent = "10Out! \uB2F5\uC740 " + array.join(',') + " \uC774\uC5C8\uC2B5\uB2C8\uB2E4.";
            input.value = '';
            input.focus();
            chooseNumber();
            wrongCount = 0;
        }
        else {
            for (var i = 0; i <= 3; i++) {
                if (Number(answerArray[i]) === array[i]) {
                    strike += 1;
                }
                else if (array.indexOf(Number(answerArray[i])) > -1) {
                    ball += 1;
                }
            }
            result.textContent = strike + " \uC2A4\uD2B8\uB77C\uC774\uD06C, " + ball + " \uBCFC \uC785\uB2C8\uB2E4.";
            input.value = '';
            input.focus();
        }
    }
}
