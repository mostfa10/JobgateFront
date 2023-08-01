import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit {
  offres:any[] = []
  c:number=1
  searchkey:string="";
  totalResults:number = 0
  constructor(private offre:OffreService,private router:Router) {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
          this.listoffre()
      }
    });
   }

  ngOnInit(): void {
    // this.listoffre();
  }
  
  listoffre(){
    this.offres = []
    let paramMap = this.router.parseUrl(this.router.url).queryParams;
    let querySearch = 'confirmed=true&'+ Object.keys(paramMap).map(key => key + '=' + paramMap[key]).join('&')
    this.offre.getOffers(querySearch).subscribe((res:any)=>{
      this.offres=res["data"]
      this.totalResults = this.offres.length  
    }, (error)=>{
      this.totalResults = 0
    });
    
  }
}

