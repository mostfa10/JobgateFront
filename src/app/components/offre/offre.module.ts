import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { RouterModule } from '@angular/router';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
   ListeOffreComponent,
    DetailoffreComponent
  ],
  imports: [
    CommonModule,
    OffreRoutingModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class OffreModule { }
