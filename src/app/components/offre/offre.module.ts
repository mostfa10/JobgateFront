import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { RouterModule } from '@angular/router';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from '../search/search.component';
import { ComponentsRoutingModule } from '../components-routing.module';
import { TopsearchComponent } from '../topsearch/topsearch.component';


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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OffreModule { }
