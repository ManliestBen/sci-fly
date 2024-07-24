/*---------------- Imports --------------------*/
import { bsgQuestions, swQuestions, tngQuestions } from "./data.js"

/*---------------- Constants --------------------*/


/*------------ Variables (state) ----------------*/
let selectedQuestions, score, currentQuestionIdx

/*--------- Cached Element References -----------*/
const landingContainer = document.getElementById('landing')
const categoryContainer = document.getElementById('categories')
const questionContainer = document.getElementById('questions')
const answerContainer = document.getElementById('answers')
const startBtn = document.querySelector('.start')
const messageEl = document.querySelector('#message')
const questionImg = document.querySelector('#question-img')

/*---------------- Functions --------------------*/
init()

function init() {
  score = 0
  currentQuestionIdx = 0
  landingContainer.style.display = ''
  categoryContainer.style.display = 'none'
  questionContainer.style.display = 'none'
  console.log(currentQuestionIdx, selectedQuestions)
}

function displayCategorySelection() {
  categoryContainer.style.display = ''
  landingContainer.style.display = 'none'
}

function handleSelectCategory(evt) {
  console.log(evt.target)
  if (evt.target.id === 'bsg-img') {
    selectedQuestions = shuffleQuestions([...bsgQuestions])
  } else if (evt.target.id === 'tng-img') {
    selectedQuestions = shuffleQuestions([...tngQuestions])
  } else if (evt.target.id === 'sw-img') {
    selectedQuestions = shuffleQuestions([...swQuestions])
  } else {
    return
  }
  displayQuestionContainer()
  renderQuestion()
}

function shuffleQuestions(questionArray) {
  const numItemsToShuffle = questionArray.length
  const shuffledQuestions = []
  for (let i = 0; i < numItemsToShuffle; i++) {
    let randIdx = Math.floor(Math.random() * questionArray.length)
    shuffledQuestions.push(questionArray.splice(randIdx, 1)[0])
    console.log(questionArray.length)
  }
  return shuffledQuestions
}

function displayQuestionContainer() {
  categoryContainer.style.display = 'none'
  questionContainer.style.display = ''
}

function renderQuestion() {
  console.log(selectedQuestions, currentQuestionIdx)
  messageEl.textContent = selectedQuestions[currentQuestionIdx].question
  questionImg.src = selectedQuestions[currentQuestionIdx].imagePath
  renderAnswers()
}

function renderAnswers() {
  answerContainer.innerHTML = ''
  selectedQuestions[currentQuestionIdx].answers.forEach((answer, idx) => {
    const newAnswerEl = document.createElement('h2')
    newAnswerEl.textContent = answer.text
    newAnswerEl.addEventListener('click', () => handleAnswerQuestion(idx))
    answerContainer.appendChild(newAnswerEl)
  })
}

function handleAnswerQuestion(answerIdx) {
  if (selectedQuestions[currentQuestionIdx].answers[answerIdx].correct) {
    score += 1
    renderGuessMessage('correct')
  } else {
    renderGuessMessage('incorrect')
  }
  setTimeout(() => {
    if (currentQuestionIdx < selectedQuestions.length - 1) {
      currentQuestionIdx++
      renderQuestion()
    } else {
      renderEndOfGameMessage()
    }
  }, 1500)
}

function renderEndOfGameMessage() {
  messageEl.textContent = `You scored ${score} out of ${selectedQuestions.length}!`
  answerContainer.innerHTML = ''
  const resetButtonEl = document.createElement('button')
  resetButtonEl.textContent = 'Try Again'
  resetButtonEl.addEventListener('click', init)
  resetButtonEl.className = 'start'
  answerContainer.appendChild(resetButtonEl)
}

function renderGuessMessage(answerType) {
  if (answerType === 'correct') {
    messageEl.textContent = 'Correct!'
  } else {
    messageEl.textContent = 'Nope!'
  }
}

/*------------ Event Listeners ------------------*/
startBtn.addEventListener('click', displayCategorySelection)
categoryContainer.addEventListener('click', handleSelectCategory)