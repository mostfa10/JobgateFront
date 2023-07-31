import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { CandidatureService } from 'src/app/services/candidature.service';
import { Location } from '@angular/common'
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  showWorning: boolean = false;
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login

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

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute, 
    private location:Location,
    private offre:OffreService
  ) {
   
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentOfferId = params['offreId'] || ''; // Utilisez une valeur par défaut appropriée si l'ID n'est pas trouvé
    });
  
    this.loadQuestions()
    
   
  }

  finish() {
    this.isQuizEnded = true;
    this.isQuizstarted = false;

    if (this.currentOfferId && this.correctAnswerCount > 0) {
     const userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login
      const candidatId = userconnect.user.condidatId._id;   
      let data = {candidatId, score:this.correctAnswerCount}
      this.offre.updateOfferScore(this.currentOfferId, data).subscribe(
        (response:any) => {
          // Vous pouvez effectuer des actions supplémentaires ici, par exemple, afficher un message de réussite, etc.
        },
        (error:any) => {
          console.error('Une erreur s\'est produite lors de la mise à jour du score :', error);
          // Gérez les erreurs ici, par exemple, afficher un message d'erreur.
        }
      );
    }
  }
  selectOption(option:any){
    if(option.isCorrect){
      this.correctAnswerCount ++;
    }
    option.isSelected=true;
 
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

exitQuiz(){
  this.location.back()
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


}


