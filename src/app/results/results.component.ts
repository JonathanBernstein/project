import { Component, OnInit } from '@angular/core';
import { QuizService } from "../quiz.service";
import { ScoresComponent } from '../scores/scores.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

username: any;


  constructor(private quizservice: QuizService) { 
    this.quizservice.setName(name);
      console.log(name);
   
  }

  

  ngOnInit() {
  }




}
