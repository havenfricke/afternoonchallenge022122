import { ProxyState } from "../AppState.js"
import { triviaService } from "../Services/TriviaService.js"


function _drawQuestions() {
  let template = ''
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById('trivia').innerHTML = template
}

export class TriviaController {
  constructor() {
    console.log('trivia controller loaded')
    ProxyState.on('questions', _drawQuestions)
    this.getQuestions()
  }

  async getQuestions() {
    try {
      console.log('started question get')
      await triviaService.getQuestions()
      console.log('questions got', ProxyState.questions);
    } catch (error) {
      console.log('error catcher')
      console.error(error)
    }
  }

  showAnswer(id) {
    triviaService.showAnswer(id)
  }

}