import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CondidatureService } from 'src/app/services/condidature.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorites-offres',
  templateUrl: './favorites-offres.component.html',
  styleUrls: ['./favorites-offres.component.css']
})
export class FavoritesOffresComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem("userconnect")!);
  favorites!:any[];
  user !:any;


  constructor(private condidature:CondidatureService,private http:HttpClient) { }
  ngOnInit(): void {
    this.user =JSON.parse(localStorage.getItem("userconnect")!)['user'];
   this.fetchFavorites();
  }
  
  fetchFavorites(): void {
    // Faites une requête HTTP pour récupérer la liste des offres favorites
    this.http
      .get<any[]>(`http://localhost:3000/user/${this.user._id}/favorite-offers`)
      .subscribe(
        (response) => {
          this.favorites = response; 
          console.log(this.favorites); // Stockez la liste des favoris dans le tableau favorites
        },
        (error) => {
          console.log('Erreur lors de la récupération des favoris');
        }
      );
  }
}
