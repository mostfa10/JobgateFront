import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {
  user !:any;
  @Input() offer!: any
  isFavorite = false;
  minSalaireRange!: number;
  maxSalaireRange!: number;
  offres!:any[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.user =   JSON.parse(localStorage.getItem("userconnect")!)['user'];
  }
  
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.http
      .post<void>(`http://localhost:3000/user/${this.user._id}/favorite-offers/${this.offer._id}`, {})
      .subscribe(
        () => {
          console.log('Offre ajoutée ou supprimée des favoris avec succès');
        },
        (error) => {
          console.log('Erreur lors de la gestion des favoris de l')
        }
      

      )

  }}