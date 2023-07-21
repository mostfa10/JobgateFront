import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';
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
  notifications!:any[];
 
  totalNot:number=0;
  constructor(private place:PlaceService,private notification:NotificationService,
    private LoginService:LoginService, private category:CategoryService,private route:Router) {
    this.route.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.loggedIn = localStorage.getItem('accesstoken') ? true : false;
        console.log(localStorage.getItem('accesstoken'),this.loggedIn)
        this.connectedUser = localStorage.getItem('userconnect')
     
        this.connectedUser ? this.connectedUser = JSON.parse(this.connectedUser).user : null
      }
    });
  }
 


  ngOnInit(): void {
    this.listville();
    this.listcategory();
    this.getNotifications();
    this.getStoredNotifications();
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
  getNotifications(): void {
    const entreprise = this.userconnect.user.entrepriseId[0]._id;
    console.log(entreprise,"hh")
    const filteredNotifications: any[] = [];
  
    if (!entreprise) {
      // If entrepriseId is not available, don't make the API call and return
      return;
    }
  
    this.notification.allnot().subscribe((res: any) => {
      this.notifications = res['data'];
  
      for (let i = 0; i < this.notifications.length; i++) {
        const notification = this.notifications[i];
      
  
        // Check if the entrepriseId matches
        if (notification.offreId && notification.offreId.entrepriseId=== entreprise) {
          filteredNotifications.push(notification);
          console.log(filteredNotifications,"aa")
        }
      }
  
      this.notifications = filteredNotifications;
      console.log(this.notifications)
      this.totalNot = this.notifications.length;
      localStorage.setItem('totalNot', this.totalNot.toString());
    });
  }
  openDropdown(): void {
    this.totalNot = 0;  // Set totalNot to 0 when the dropdown is opened or clicked
   
    localStorage.setItem('totalNot', this.totalNot.toString());

  }
  
  getStoredNotifications(): void {
    const storedTotalNot = localStorage.getItem('totalNot');
    this.totalNot = storedTotalNot ? parseInt(storedTotalNot, 10) : 0;
  }

  Logout(){
    this.loggedIn=false;
    localStorage.clear()
    localStorage.removeItem('totalNot');
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

