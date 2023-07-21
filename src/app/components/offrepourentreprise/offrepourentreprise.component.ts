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
    this.getOffresForCurrentUser();
  }
  getOffresForCurrentUser() {
    this.offre.getOffresForCurrentUser().subscribe(
      (res: any) => {
        this.offresP = res["data"];
        console.log('Liste des offres', this.offresP);
      },
      (error: any) => {
        console.error('Error while getting offers:', error);
      }
    );
  }
}

