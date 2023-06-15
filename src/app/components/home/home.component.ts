import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private category:CategoryService,private router:Router,private place:PlaceService) { }
  categories:any
  places:any
  ngOnInit(): void {
    this.listcategory();
    this.listville();
  }
  
  

  listcategory(){
    this.category.allCategory().subscribe((res:any)=>{
      this.categories=res["data"]
      console.log("listes offres",this.categories)

    })
  }

  listville(){
    this.place.allPlace().subscribe((res:any)=>{
      this.places=res["data"]
      console.log("listes places",this.places)

    })
  }
}
