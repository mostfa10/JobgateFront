import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ContratService } from 'src/app/services/contrat.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
contrats:any
categories:any
places:any
term:any
  constructor(private contrat:ContratService,private category:CategoryService,private place:PlaceService) { }

  ngOnInit(): void {
    this.listcontrat()
    this.listcategory()
    this.listville()
  }
  listville(){
    this.place.allPlace().subscribe((res:any)=>{
      this.places=res["data"]
      console.log("listes places",this.places)

    })
  }
  listcategory(){
    this.category.allCategory().subscribe((res:any)=>{
      this.categories=res["data"]
      console.log("listes offres",this.categories)

    })
  }
  listcontrat(){
    this.contrat.allcontrat().subscribe((res:any)=>{
      this.contrats=res["data"]
      console.log("listes contrats",this.contrats)

    })
  }

}
