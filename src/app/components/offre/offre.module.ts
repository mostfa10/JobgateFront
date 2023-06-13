import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { RouterModule } from '@angular/router';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    OfferCardComponent,
    ListeOffreComponent,
    DetailoffreComponent
  ],
  imports: [
    CommonModule,
    OffreRoutingModule,
    RouterModule
  ]
})
export class OffreModule { }
