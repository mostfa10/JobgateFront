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

  deleteC(id:any){
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.condidature.deleteC(id).subscribe((res:any)=>{ // subscribe pour donne l accees ala BD
    //       console.log(res)
    //       this.listecondidatures()
    //     })
    //     Swal.fire(
    //       'Deleted!',
    //       'Your file has been deleted.',
    //       'success'
    //     )
    //   }
    // })
  }

  showCondidature(condidature:any){
    this.selectedCondidature = condidature;
    this.showCandidature = true
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

}
