import { Component } from '@angular/core';
import { QuizService } from "./quiz.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triviaAPP';

  constructor(private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit() {
 
  }

}



