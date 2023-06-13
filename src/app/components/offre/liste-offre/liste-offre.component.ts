import { Component, OnInit } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit {
  offres:any
  constructor(private offre:OffreService) { }

  ngOnInit(): void {
    this.listoffre();
  }

  listoffre(){
    // this.offre.alloffre().subscribe((res:any)=>{
    //   this.offres=res["data"]
    //   console.log("listes product",this.offres)

    // })
  }

}
