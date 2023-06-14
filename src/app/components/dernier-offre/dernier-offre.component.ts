import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-dernier-offre',
  templateUrl: './dernier-offre.component.html',
  styleUrls: ['./dernier-offre.component.css']
})
export class DernierOffreComponent implements OnInit {

  offres:any
 
  constructor(private offre:OffreService,private router:Router) { }

  ngOnInit(): void {
    this.lastoffres();
  }
  
  

  lastoffres(){
    this.offre.lastoffres().subscribe((res:any)=>{
      this.offres=res["data"]
      console.log("listes offres",this.offres)

    })
  }
}