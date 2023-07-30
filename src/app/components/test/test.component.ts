import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  showWorning: boolean = false;

  isQuizstarted: boolean = false;
  isQuizEnded: boolean = false;
  questionsList: any[]= [];
  currentQuestionNo: number = 0;
  currentOfferId!: string; // Utilisez le type approprié pour l'ID de l'offre (number ou string)

  remainingTime:number = 10;

  timer = interval(1000);
  subscription: Subscription [] = [];
  correctAnswerCount: number = 0;

  departments: any[]=[];
 
  deptObj: any = {
    DeptId: 0,
    DepartmentName: ''
  }
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute,
    private candidature:CandidatureService) {
   
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentOfferId = params['offreId'] || ''; // Utilisez une valeur par défaut appropriée si l'ID n'est pas trouvé
      console.log('ID de l\'offre :', this.currentOfferId);
      // Utilisez l'ID de l'offre ici pour effectuer les actions nécessaires dans le composant TestComponent
    });
  
    this.loadQuestions()
    
   
  }
  finish(){
    this.isQuizEnded=true;
    this.isQuizstarted=false;

  }
  
  selectOption(option:any){
    if(option.isCorrect){
      this.correctAnswerCount ++;
    }
    option.isSelected=true;
    this.candidature.setScore(this.correctAnswerCount);
  }
  isOptionSelected(options:any){
    const isSelectionCount=options.filter((m:any)=>m.isSelected == true).length;
    if(isSelectionCount == 0 ){
      return false;
    }else{
      return true;
    }

  }

  showWarningPopup() { // Fixed function name here
    this.showWorning = true;
  }
  nextQuestion(){
    if(this.currentQuestionNo < this.questionsList.length-1){
    this.currentQuestionNo ++;
    this.remainingTime=10;
    

  }
  else{
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }
  }
  startQuiz() {
    this.showWorning = false;
    this.isQuizstarted = true; 
  
    this.subscription.push(this.timer.subscribe((res:any)=>{
      console.log(res)
      if(this.remainingTime !=0 ){
      this.remainingTime --;
      
    }
    if(this.remainingTime ==0){
      this.nextQuestion();
      this.remainingTime=10;
    }
    
    })
    )
    
}
loadQuestions() {
  this.http.get<any[]>('assets/question.json').subscribe((questions: any[]) => {
    if (this.currentOfferId !== undefined) {
      // Filtrer les questions en fonction de l'ID d'offre actuel (currentOfferId)
      this.questionsList = questions.filter(question => question.offreId === this.currentOfferId);
      console.log(this.questionsList);
    } else {
      // Si l'ID d'offre n'est pas défini, affichez toutes les questions
      this.questionsList = questions;
      console.log(this.questionsList);
    }
  });
}

// ... Autres méthodes ...
}
// loadQuestions(){
//   this.http.get("assets/question.json").subscribe((questions:any[])=>{
 
//     this.questionsList=questions.filter(question => question.offreId ==this.currentOfferId);
//     this.questionsList=this.questionsList;
//     console.log( this.questionsList)
//   })
// }
  // selectOption(option: any) {
  //   if(option.isCorrect) {
  //     this.correctAnswerCount ++;
  //   }
  //   option.isSelected = true;
  // }
  // isOptionSelected(options: any) {
  //   const selectionCount = options.filter((m:any)=>m.isSelected == true).length;
  //   if(selectionCount == 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  // startQuiz() {
  //   this.showWarning = false;
  //   this.isQuizStarted = true;  
  //  this.subscription.push(this.timer.subscribe(res=> {
  //     console.log(res);
  //     if(this.remainingTime != 0) {
  //       this.remainingTime --;
  //     } 
  //     if(this.remainingTime == 0) {
  //       this.nextQuestion();
  //       this.remainingTime = 10;
  //     } 
  //   })
  //  )
  // }


