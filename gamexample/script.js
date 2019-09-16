let correctAnswers = 0;
let questionNumber = 3
let timeLeft = 3000;
var problemTimer = '';
var solution = 0;
document.getElementById("questionsleft").innerHTML = questionNumber
document.getElementById("correctanswers").innerHTML = correctAnswers
document.getElementById("firstNumber").innerHTML = 0
document.getElementById("secondNumber").innerHTML = 0

function start() {
    timeLeft = 3000;
    correctAnswers = 0;
    questionNumber = 3;
    document.getElementById("questionsleft").innerHTML = questionNumber
    document.getElementById("correctanswers").innerHTML = correctAnswers
    clearInterval(problemTimer);
    problemTimer = setInterval(checkTime, 100);
    newProblem();
}

function checkTime() {
    document.getElementById("timer").innerHTML = "Time left: " + timeLeft / 1000 + " seconds";
    timeLeft -= 100;
    //timer ran out on question
    if (timeLeft == 0) {
        timeLeft = 3000;
        questionNumber--;
        if (questionNumber == 0) {
            displayResults();
            document.getElementById("timer").innerHTML = "No More Questions!";
        }
    }
    document.getElementById("questionsleft").innerHTML = questionNumber
}


function newProblem() {
    let firstNumber = Math.floor(Math.random() * 10);
    let secondNumber = Math.floor(Math.random() * 10);
    solution = firstNumber * secondNumber;
    document.getElementById("firstNumber").innerHTML = firstNumber
    document.getElementById("secondNumber").innerHTML = secondNumber
}

var input = document.getElementById("answer");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

function answerSubmitted() {
    answer = document.getElementById('answer').value;
    if (answer == solution) correctAnswers++;
    questionNumber--;
    document.getElementById("correctanswers").innerHTML = correctAnswers
    timeLeft = 3000;

    //no more questions
    if (questionNumber <= 0) {
        if (questionNumber == 0) displayResults();
    } else {
        document.getElementById("questionsleft").innerHTML = questionNumber;
        newProblem();
    }

}

function displayResults() {
    clearInterval(problemTimer);
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'You answered ' + correctAnswers + ' out of 10 questions correctly.';
    // Altering the DOM
    document.body.appendChild(newParagraph);
}