import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)//tjib les contenu de userconnect de localstorege enregistree lors de login

  offres:any
  c:number=1
  
  searchkey:string="";
  constructor(private offre:OffreService,private router:Router) { }

  ngOnInit(): void {
    this.listoffre();

    this.offre.search.subscribe((val:any)=>{
      this.searchkey= val;
    })
  }
  // listoffre() {
  //   this.offre.alloffre().subscribe((res: any) => {
  //     this.offres = res["data"];
  //     console.log("listes offres", this.offres);
  
  //     // Ajouter le code pour obtenir les offres créées par l'entreprise connectée
  //     this offresDeLEntreprise = this.offres.filter((offre: any) => {
  //       return offre.entrepriseId === this.userconnect.user.id;
  //     });
  //     console.log("Liste des offres créées par l'entreprise connectée", offresDeLEntreprise);
  //   });
  // }
  

  listoffre(){
    this.offre.alloffre().subscribe((res:any)=>{
      this.offres=res["data"]
      console.log("listes offres",this.offres)

    })
  }
}

