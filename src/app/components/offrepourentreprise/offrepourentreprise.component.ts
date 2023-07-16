import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-offrepourentreprise',
  templateUrl: './offrepourentreprise.component.html',
  styleUrls: ['./offrepourentreprise.component.css']
})
export class OffrepourentrepriseComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!) //tjib les contenu de userconnect de localstorege enregistree lors de login
  offresP!:any[];
  totalResults:number = 0
  c:number=1

  constructor(private offre:OffreService) { }

  ngOnInit(): void {
  }
  listeoffresPrecises() {
    const userConnectId = this.userconnect.user.entepriseId;

    this.offre.getAlloffreE(userConnectId).subscribe(
      (res: any) => {
        this.offresP = res.data;
        console.log("Liste des offres", this.offresP);
        this.totalResults=this.offresP.length;
      },
      (error: any) => {
        console.error("Erreur lors de la récupération des offres", error);
      }
    );
  }
}