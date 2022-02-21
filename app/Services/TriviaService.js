import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"

class TriviaService {
  async getQuestions() {
    //@ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=1&category=12&difficulty=medium')
    console.log('response data', response.data)
    let question = response.data.results.map(q => new Question(q))
    ProxyState.questions = question
  }

  showAnswer(id) {
    document.getElementById('showAnswer').style.display = ''
  }
}

export const triviaService = new TriviaService()