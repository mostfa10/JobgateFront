import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { Ng5SliderModule } from 'ng5-slider';



@NgModule({
  declarations: [
   ListeOffreComponent,
    DetailoffreComponent,
    AjouterOffreComponent,
    FilterComponent
  ],
  imports: [
    Ng5SliderModule,
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
    OffreRoutingModule,
    NgxPaginationModule,
    SharedModule
  ],
  exports: [
    FilterComponent,
    // Export other components from the OffreModule if any
  ],
  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OffreModule { }
