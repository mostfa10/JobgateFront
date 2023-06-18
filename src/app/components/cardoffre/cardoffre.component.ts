import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-cardoffre',
  templateUrl: './cardoffre.component.html',
  styleUrls: ['./cardoffre.component.css']
})
export class CardoffreComponent implements OnInit {
  searchkey:string="";
  offres:any
  c:number=1
  p:number=1
  selectedPlace: string="";
 


  constructor(private offre:OffreService,private router:Router) { }

  ngOnInit(): void {
    this.listoffre();
    
    this.offre.search.subscribe((val:any)=>{
      this.searchkey= val;
    })
   
  }
  selectPlace(place: string): void {
    this.selectedPlace = place;
  }
  
  

  listoffre(){
    this.offre.alloffre().subscribe((res:any)=>{
      this.offres=res["data"]
      console.log("listes offres",this.offres)

    })
  }
}
