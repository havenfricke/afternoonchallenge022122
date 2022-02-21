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

    <div class="col-lg-12 col-md-12 col-sm-12 card bg-dark p-3">
    <div class="text-center text-light">
      <p class="col-12">
        ${this.question}
      </p>
      <p class="col-12">
      <ul class="col-12">
      Options:
        ${this.Options}
        <ul>
      </p>
      
        <div class="text-center d-flex justify-content-center row p-2">
          <span class="col-10 justify-content-center p-1" id="showAnswer" style="display: ${this.showAnswer};" class="p-1">${this.correct_answer}</span>
          <button class="col-10" onclick="app.triviaController.showAnswer('${this.id}')">Show Answer</button>
          <form><button class="col-10">Next Question</button></form>
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