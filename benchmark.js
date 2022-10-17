const questions = [
  {
    question: "How can I create a checkbox in HTML?",
    answer_options: [
      { text: '<input type = "check">', correct: false },
      { text: '<input type = "checkbox">', correct: true },
      { text: '<checkbox">', correct: false },
      { text: '<input type = "button">', correct: false }
    ]
  }
]

const questionContainer = document.getElementById("benchmarkContainer")
const questionText = document.getElementById("question")
const answerText = document.getElementById("answer-buttons")

function showQuestion(question) {
  questionText.innerText = question.question
  question.answer_options.forEach((answer_options) => {
    const button = document.createElement("button")
    button.innerText = answer_options.text
    button.classList.add("btn")
    if (answer_options.correct) {
      button.dataset.correct = answer_options.correct
    }
    button.addEventListener("click", selectAnswer)
    answerText.appendChild(button)
  })
}

showQuestion()
