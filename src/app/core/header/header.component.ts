import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  places:any
  userconnect=JSON.parse(localStorage.getItem("userconnect")!) //tjib les contenu de userconnect de localstorege enregistree lors de login
  categories:any
  loggedIn:boolean=false;
  condidat:boolean=true;
  connectedUser:any
  condidats:any;
  
  constructor(private place:PlaceService,private LoginService:LoginService, private category:CategoryService,private route:Router) {
    this.route.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.loggedIn = localStorage.getItem('accesstoken') ? true : false;
        console.log(localStorage.getItem('accesstoken'),this.loggedIn)
        this.connectedUser = localStorage.getItem('userconnect')
        this.condidat=JSON.parse(this.connectedUser).user.isCondidat
        this.connectedUser ? this.connectedUser = JSON.parse(this.connectedUser).user : null
      }
    });
  }
 


  ngOnInit(): void {
    this.listville()
    this.listcategory()
  }
  getUserConnect() {
        if (this.userconnect && this.userconnect.user && this.userconnect.user.condidatId) {
     const  condidatId = this.userconnect.user.condidatId;
      // Charger les données du condidatId avec populate()
      this.LoginService.getCondidatById(this.userconnect.user.condidatId).subscribe((res: any) => {
        this.condidats=res["data"] // Stocker les données du condidat dans userconnect.user.condidat
        console.log(this.condidats,"jjjjj")
      });
    }
  }


  Logout(){
    this.loggedIn=false;
    localStorage.clear()
    this.route.navigateByUrl('/')
  }

  listville(){
    this.place.allPlace().subscribe((res:any)=>{
      this.places=res["data"]

    })
  }
  listcategory(){
    this.category.allCategory().subscribe((res:any)=>{
      this.categories=res["data"]
    })
  }

}

