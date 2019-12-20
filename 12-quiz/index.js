//questions database\\\\
var database = [
    {
        question: "Who is the famous orange tanned president of USA?",
        option1: "Barack Obama",
        option2: "Barry Obama",
        option3: "Donald Duck",
        option4: "Donald Trump",
        answer: "4"
    },
    {
        question: "What is Kevin?",
        option1: "meme watcher",
        option2: "glasses wearer",
        option3: "all of the above",
        option4: "a guy with a cool jacket",
        answer: "3"
    },
    {
        question: "what is a?",
        option1: "a thing without definition",
        option2: "a word",
        option3: "meaningless garbage",
        option4: "Donald Trump",
        answer: "1"
    },
    {
        question: "why is a a?",
        option1: "as the romans stated, rome was not built in a day",
        option2: "b",
        option3: "latin",
        option4: "the equilibrity of the world and our existence depended on this miniscule being",
        answer: "3"
    },
    {
        question: "how do you spell A?",
        option1: "a",
        option2: "A",
        option3: "A ",
        option4: " A",
        answer: "2"
    }
]
//html element
var scoreDiv = document.querySelector(".score")
var questionDiv = document.querySelector(".question")
var option1Div = document.querySelector(".option-1-content")
var option2Div = document.querySelector(".option-2-content")
var option3Div = document.querySelector(".option-3-content")
var option4Div = document.querySelector(".option-4-content")
var optionDivs = document.querySelectorAll(".option")

//get random question from the database
var numberOfQuestions = database.length
function generateRandomQuestionNumber(){
    var questionNumber = Math.floor(Math.random() * numberOfQuestions)
    return questionNumber
}

//display questions and options
var score = 0
var answer

function displayQuestionsAndOptions() {
    var questionNumber = generateRandomQuestionNumber()
    var currentQuestion = database[questionNumber]
    questionDiv.innerHTML = currentQuestion.question
    option1Div.innerHTML = currentQuestion.option1
    option2Div.innerHTML = currentQuestion.option2
    option3Div.innerHTML = currentQuestion.option3
    option4Div.innerHTML = currentQuestion.option4
    scoreDiv.innerHTML = `Score: ${score}`
    answer = currentQuestion.answer
    database.splice(questionNumber, 1)
    numberOfQuestions--
}

displayQuestionsAndOptions()

//listen for option click

for(var i = 0; i < optionDivs.length; i++) {
    optionDivs[i].addEventListener('click', checkAnswer)
}

function checkAnswer(event) {
    if(event.target.dataset.value == answer) {
        score++
        scoreDiv.innerHTML = `Score ${score}`
    }

    if (numberOfQuestions > 0) {
        displayQuestionsAndOptions()
    }else {
        alert(`your score is ${score}`)
    }
}