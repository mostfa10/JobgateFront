import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { OffreService } from 'src/app/services/offre.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private category:CategoryService,private router:Router,private place:PlaceService,private offersService:OffreService) { }
  categories:any
  
  places:any
  offer!: any
  ngOnInit(): void {
    this.getLastOffers()
    this.listcategory();
    this.listville();
  }
  
  
  getLastOffers(){
    this.offersService.getOffersL().subscribe((offer:any) => {
      this.offer = offer.data
      console.log(offer)
    })
  }
  listcategory(){
    this.category.allCategory().subscribe((res:any)=>{
      this.categories=res["data"]
    })
  }

  listville(){
    this.place.allPlace().subscribe((res:any)=>{
      this.places=res["data"]
    })
  }
}
