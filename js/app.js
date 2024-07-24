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


/*------------ Event Listeners ------------------*/
