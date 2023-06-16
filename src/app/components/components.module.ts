import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreModule } from './offre/offre.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';
import { SearchComponent } from './search/search.component';
import { DernierOffreComponent } from './dernier-offre/dernier-offre.component';
import { ListeOffreComponent } from './offre/liste-offre/liste-offre.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { OffreRoutingModule } from './offre/offre-routing.module';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { CardoffreComponent } from './cardoffre/cardoffre.component';
import { CondidatureComponent } from './condidature/condidature.component';
import { ProfilComponent } from './profil/profil.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    DernierOffreComponent,
    TopsearchComponent,
    FilterComponent,
    CardoffreComponent,
    CondidatureComponent,
    ProfilComponent
   
  ],
  imports: [
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ComponentsRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  OffreRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
