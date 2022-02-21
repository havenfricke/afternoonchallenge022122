import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = generateId()
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
    this.showAnswer = data.showAnswer || 'none'
  }

  get Template() {
    return `          

    <div class="col-6 card bg-dark p-3">
    <div class="text-center text-light">
      <p class="col-12">
        ${this.question}
      </p>
      <p class="col-12">
      <ul>
      Options:
        ${this.Options}
        <ul>
      </p>
      
        <div class="p-2">
          <span id="showAnswer" style="display: ${this.showAnswer};" class="p-3">${this.correct_answer}</span><button onclick="app.triviaController.showAnswer('${this.id}')">Show Answer</button><form><button>Next Question</button></form>
        </div>
    
    </div>
  </div>
`
  }

  get Options() {
    const options = [...this.incorrect_answers, this.correct_answer]
    options.sort((a, b) => 0.5 - Math.random());
    options.join('')
    options.join(', ');
    return options
  }

}