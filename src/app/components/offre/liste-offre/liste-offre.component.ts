import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit {
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
  
  

  listoffre(){
    this.offre.alloffre().subscribe((res:any)=>{
      this.offres=res["data"]
      console.log("listes offres",this.offres)

    })
  }
}

