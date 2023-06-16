import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  places:any
  categories:any
  constructor(private place:PlaceService,private category:CategoryService) { }

  ngOnInit(): void {
    this.listville()
this.listcategory()
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

}

