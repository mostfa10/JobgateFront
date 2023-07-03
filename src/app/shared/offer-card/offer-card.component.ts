import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {
  offerId = 'ID_DE_offre'
  userId = 'ID_DE_LUTILISATEUR';
  @Input() offer!: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  toggleFavorite(): void {
    this.http
      .post<void>(`/api/users/${this.userId}/favorite-offers/${this.offerId}`, {})
      .subscribe(
        () => {
          console.log('Offre ajoutée ou supprimée des favoris avec succès');
        },
        (error) => {
          console.log('Erreur lors de la gestion des favoris de l')
        }
      

      )

  }}