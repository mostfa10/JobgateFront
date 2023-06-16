import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-cardoffre',
  templateUrl: './cardoffre.component.html',
  styleUrls: ['./cardoffre.component.css']
})
export class CardoffreComponent implements OnInit {
  offres:any
  c:number=1
  p:number=1
  constructor(private offre:OffreService,private router:Router) { }

  ngOnInit(): void {
    this.listoffre();
  }
  
  

  listoffre(){
    this.offre.alloffre().subscribe((res:any)=>{
      this.offres=res["data"]
      console.log("listes offres",this.offres)

    })
  }
}
