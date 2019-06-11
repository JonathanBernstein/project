import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from"@angular/common/http";
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/scores.component';
import { ResultsComponent} from './results/results.component';
import { QuizComponent} from './quiz/quiz.component';

const appRoutes: Routes = [
{path: "", redirectTo: "/quiz", pathMatch: "full"},
{ path: "quiz", component: QuizComponent },
{ path: "results", component: ResultsComponent },
{ path: "scores",  component: ScoresComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    ResultsComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
