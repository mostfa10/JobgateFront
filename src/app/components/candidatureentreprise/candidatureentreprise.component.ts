import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-candidatureentreprise',
  templateUrl: './candidatureentreprise.component.html',
  styleUrls: ['./candidatureentreprise.component.css']
})
export class CandidatureentrepriseComponent implements OnInit {
  candidatures: any[] = []; 
  listCondidature!:any[];
  score:number=0;
  userconnect = JSON.parse(localStorage.getItem("userconnect")!);
  entreprise= this.userconnect.user.entrepriseId[0]._id
  constructor(private candidatureService:CandidatureService,private http:HttpClient) { }

  ngOnInit(): void {
    this. loadCandidatures();
  }
 loadCandidatures() {
    // Appelez le service pour récupérer toutes les candidatures
    this.candidatureService.getAllCandidatures().subscribe((res: any) => {
      this.listCondidature=res['data']
      console.log(this.listCondidature[0].offreId.entrepriseId._id,"uu");  // Vous pouvez utiliser les candidatures filtrées dans votre application


      this.candidatures = this.listCondidature.filter(condidature => condidature.offreId.entrepriseId._id === this.entreprise);
       console.log(this.candidatures,"o");  // Vous pouvez utiliser les candidatures filtrées dans votre application
    });
  }
  getscoore(s:number){
    this.score = this.candidatureService.setScore(s);
    console.log(this.score,"lll")
  }
  viewCV(id: string) {
    this.candidatureService.downloadCV(id).subscribe(
      (data: ArrayBuffer) => {
        // Convertir l'ArrayBuffer en Blob
        const blob = new Blob([new Uint8Array(data)], { type: 'application/pdf' });
  
        // Créer un lien pour télécharger le CV
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cv_${id}.pdf`;
        a.click();
  
        // Libérer les ressources
        window.URL.revokeObjectURL(url);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  

}
