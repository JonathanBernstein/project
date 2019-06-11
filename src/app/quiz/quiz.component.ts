import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any;
  initialArray: any[] = [false, false, false, false, false, false, false, false, false, false];
  show: boolean = true;

  constructor(private quizservice: QuizService) { 
    this.quizservice.getQuiz().subscribe(response => {
    this.questions = response;
  }); 
}

  ngOnInit() {
  }

  check(choice, answer, index) {
   if (choice == answer) {
    this.initialArray[index] = true;
    }
    else {
      this.initialArray[index] = false;
    }
  }

  submitQuiz() {
    this.quizservice.calculateScore( this.initialArray)
  }

  submitName(form) {
    this.quizservice.setName(form.value.name);
    this.show = false
    
  }

}
