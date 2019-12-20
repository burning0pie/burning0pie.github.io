var scoreHTML = document.querySelector(".score")
var answerOneHTML = document.querySelector(".answer-1")
var answerTwoHTML = document.querySelector(".answer-2")
var answerThreeHTML = document.querySelector(".answer-3")
var answerFourHTML = document.querySelector(".answer-4")
var answerFiveHTML = document.querySelector(".answer-5")
var answerSixHTML = document.querySelector(".answer-6")
var answerSevenHTML = document.querySelector(".answer-7")
var answerEightHTML = document.querySelector(".answer-8")
var answerNineHTML = document.querySelector(".answer-9")
var answerTenHTML = document.querySelector(".answer-10")

var answerHTML = document.getElementsByClassName("answer")

for (var i = 0; i < answerHTML.length; i++) {
    answerHTML[i].addEventListener('keyup', handleAnswerInput)
}

var score = 0
var counter = 0

// answerHTML.addEventListener('keyup', handleAnswerInput)

function handleAnswerInput() {
    if (event.key == 'Enter') {
        counter += 1
        var questionNumber = this.dataset.question_number;
        var answer = '';
        if (questionNumber == '1') {
            answer = 'restart';
        }
        if (questionNumber == '2') {
            answer = 'newsletter';
        }
        if (questionNumber == '3') {
            answer = 'suicide';
        }
        if (questionNumber == '4') {
            answer = 'Devon is a meat';
        }
        if (questionNumber == '5') {
            answer = 'laptop';
        }
        if (questionNumber == '6') {
            answer = 'honorificabilitudinitatibus';
        }
        if (questionNumber == '7') {
            answer = 'no';
        }
        if (questionNumber == '8') {
            answer = 'gobbledygook';
        }
        if (questionNumber == '9') {
            answer = 'genocide';
        }
        if (questionNumber == '10') {
            answer = 'boomer';
        }
        if (this.value == answer) {
            score += 1
            }
        this.disabled = true;
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}


function handleAnswerInputOne() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerOneHTML.value == "restart") {
            score += 1
            }
        // answerOneHTML.value = ""
        answerOneHTML.disabled = true;
        // answerOneHTML.placeholder = ;
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputTwo() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerTwoHTML.value == "newsletter") {
            score += 1
            }
        answerTwoHTML.value = ""
        answerTwoHTML.disabled = true;
        answerTwoHTML.placeholder = "";
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputThree() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerThreeHTML.value == "suicides") {
            score += 1
            }
        answerThreeHTML.value = ""
        answerThreeHTML.disabled = true;
        answerThreeHTML.placeholder = "";
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputFour() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerFourHTML.value == "Kevin") {
            score += 1
            }
        answerFourHTML.value = ""
        answerFourHTML.disabled = true;
        answerFourHTML.placeholder = "";
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputFive() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerFiveHTML.value == "laptop") {
            score += 1
            }
        answerFiveHTML.value = ""
        answerFiveHTML.disabled = true;
        answerFiveHTML.placeholder = "";
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputSix() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerSixHTML.value == "honorificabilitudinitatibus") {
            score += 1
            }
        answerSixHTML.value = ""
        answerSixHTML.disabled = true;
        answerSixHTML.placeholder = "";
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputSeven() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerSevenHTML.value == "no") {
            score += 1
            }
        answerSevenHTML.value = ""
        answerSevenHTML.disabled = true;
        answerSevenHTML.placeholder = "";
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputEight() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerEightHTML.value == "gobbledygook") {
            score += 1
            }
        answerEightHTML.value = ""
        answerEightHTML.disabled = true;
        answerEightHTML.placeholder = "";
        // answerEightHTML.style.display = 'none'
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputNine() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerNineHTML.value == "genocide") {
            score += 1
            }
        answerNineHTML.value = ""
        answerNineHTML.disabled = true;
        answerNineHTML.placeholder = "";
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function handleAnswerInputTen() {
    if (event.key == 'Enter') {
        counter += 1
        if (answerTenHTML.value == "boomer") {
            score += 1
            }
        answerTenHTML.value = ""
        answerTenHTML.disabled = true;
        answerTenHTML.placeholder = "";
        scoreHTML.innerHTML = `Score: ${score}/${counter}` 
    }
}

function testFinished() {
    if (counter.value == 10) {
        console.log("HIII!!!")
    }
}