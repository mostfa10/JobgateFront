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
  showCandidature: boolean = false;
  selectedCondidature: any;
  constructor(private candidatureService:CandidatureService,private http:HttpClient) { }

  ngOnInit(): void {
  
   
  
    this. loadCandidatures();
  }
 
 loadCandidatures() {
    // Appelez le service pour récupérer toutes les candidatures
    this.candidatureService.getAllCandidatures().subscribe((res: any) => {
        this.listCondidature=res['data']
        this.candidatures = this.listCondidature.filter(condidature => condidature.offreId.entrepriseId._id === this.entreprise);
    });
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

  showCondidature(condidature:any){
    this.selectedCondidature = condidature;
    this.showCandidature = true;
    const user = this.selectedCondidature.userId.condidatId._id;
  }
  
  confirm(condidature:any){
    this.candidatureService.updateCondidature({...condidature,status:'confirmed'}).subscribe((res : any) => {
      this.selectedCondidature = res.data
    })
  }
    
  reject(condidature:any){
    this.candidatureService.updateCondidature({...condidature,status:'rejected'}).subscribe((res : any) => {
      this.selectedCondidature.status = res.data.status
    })
  }

  getScore(scores:any,condidatId:string):any {
    let score = scores.filter((s:any) => s.candidatId === condidatId)
    return score.length > 0 ?  score[0].score : null;
  }
}
