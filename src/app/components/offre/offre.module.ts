import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
   ListeOffreComponent,
    DetailoffreComponent,
    AjouterOffreComponent,
    CandidatureComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OffreRoutingModule,
    NgxPaginationModule,
    SharedModule
  ],
  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OffreModule { }
