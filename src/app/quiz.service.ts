import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  score: number = 0;
  name: any;

  constructor(private http: HttpClient, private router: Router ) { }

  getQuiz() {
    return this.http.get("/api/question", { responseType: "json"});
  }

  getScores() {
    return this.http.get("/api/scores", { responseType: "json"});
  }

  setName(name) {
    this.name= name;
    console.log(name);
  }

  calculateScore(submission) {
     this.score = 0

    for (let i = 0; i < submission.length; i++) {
       if( submission[i] == true) {
         this.score++
    }

    this.router.navigate(["/results"]);
    
  }
  
}

}