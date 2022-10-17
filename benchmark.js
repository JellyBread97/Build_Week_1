const questions = [
  {
    question: "How can I create a checkbox in HTML?",
    answers: [
      { text: '<input type = "check">', correct: false },
      { text: '<input type = "checkbox">', correct: true },
      { text: '<checkbox">', correct: false },
      { text: '<input type = "button">', correct: false }
    ]
  },
  {
    question:
      "Which built-in method returns the calling string value converted to lower case?",
    answers: [
      { text: "toLowerCase()", correct: true },
      { text: "toLower()", correct: false },
      { text: "changeCase(case)", correct: false },
      { text: "None of the above.", correct: false }
    ]
  },
  {
    question: "The DOM presents an HTML document as a ...",
    answers: [
      { text: "Dynamic Object Model", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Distributed Object Model", correct: false },
      { text: "Document Oriented Model", correct: false }
    ]
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: [
      { text: "<br>", correct: false },
      { text: "<lb>", correct: false },
      { text: "<break>", correct: true },
      { text: "<div>", correct: false }
    ]
  },
  {
    question: "JavaScript is open-source and cross platform",
    answers: [
      { text: " True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "CSS is short for ...",
    answers: [
      { text: "Color and Style Sheets", correct: false },
      { text: "Cascading Special Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Color Style Sheet", correct: false }
    ]
  },
  {
    question: "How can we select an element with a specific ID in CSS?",
    answers: [
      { text: "//", correct: false },
      { text: "=", correct: false },
      { text: ".", correct: false },
      { text: "#", correct: true }
    ]
  }
]

const questionContainer = document.getElementById("benchmarkContainer")
const questionElement = document.getElementById("question")
const questionNumberElement = document.getElementById("questionNumber")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-button")
const finishButton = document.getElementById("finish-button")

let randomQuestion, currentQuestionIndex

nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
  changeQuestionNumber()
})

function startBenchmark() {
  randomQuestion = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(randomQuestion[currentQuestionIndex])
  changeQuestionNumber()
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach((answer) => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButton.appendChild(button)
  })
}

function resetState() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  Array.from(answerButton.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hidden")
  } else {
    finishButton.classList.remove("hidden")
    nextButton.classList.add("hidden")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}
function clearStatusClass(element) {
  element.classList.remove("wrong")
  element.classList.remove("correct")
}
function changeQuestionNumber() {
  let numberOfQuestions = questions.length
  let currentQuestionNumber = currentQuestionIndex + 1
  questionNumberElement.innerHTML = `Question ${currentQuestionNumber} of ${numberOfQuestions}`

  //   if (numberOfQuestions < currentQuestionNumber) {
  //     questionNumberElement.classList.add("hidden")
  //   }
}

nextButton.addEventListener("click", hideNextButton)
function hideNextButton() {
  nextButton.classList.add("hidden")
}

startBenchmark()

finishButton.addEventListener("click", finishBenchmark)

function finishBenchmark() {
  questionContainer.classList.add("hidden")
  questionNumberElement.classList.add("hidden")
  finishButton.classList.add("hidden")
}
