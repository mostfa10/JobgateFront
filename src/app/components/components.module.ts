import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from '../shared/shared.module';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { FavoritesOffresComponent } from './favorites-offres/favorites-offres.component';
import { AjoutOffreComponent} from './ajout-offre/ajout-offre.component';
import { OffrepourentrepriseComponent } from './offrepourentreprise/offrepourentreprise.component';
import { MessageComponent } from './message/message.component';
import { BoxmessageComponent } from './boxmessage/boxmessage.component';





@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    HomeComponent,
    ProfilComponent,
    CandidaturesComponent,
    FavoritesOffresComponent,
AjoutOffreComponent,
OffrepourentrepriseComponent,
MessageComponent,
BoxmessageComponent  ],
  imports: [
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ComponentsRoutingModule,
    FormsModule,
    // RouterModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  // exports: [
  //   FilterPipe // Ajoutez FilterPipe à la liste des exports
  // ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
