import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from '../guardss/authe.guard';
import { CondidatureService } from '../services/condidature.service';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { FavoritesOffresComponent } from './favorites-offres/favorites-offres.component';
import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';
import { OffrepourentrepriseComponent } from './offrepourentreprise/offrepourentreprise.component';
import { MessageComponent } from './message/message.component';
import { BoxmessageComponent } from './boxmessage/boxmessage.component';
import { TestComponent } from './test/test.component';
import { CandidatureentrepriseComponent } from './candidatureentreprise/candidatureentreprise.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact',canActivate:[AuthGuard], component: ContactComponent},
  {path: "profile",canActivate:[AuthGuard],component:ProfilComponent},
  {path: "profile/:id",canActivate:[AuthGuard],component:ProfilComponent},
  {path: 'offre',pathMatch: 'prefix', loadChildren: () => import('./offre/offre.module').then(m => m.OffreModule) },
  {path:'',component:HomeComponent},
  {path:'candidatures',component:CandidaturesComponent},
  {path:'favorirte',component:FavoritesOffresComponent},
  {path:'ajout',component:AjoutOffreComponent},
  {path:'offrePrecie',component:OffrepourentrepriseComponent},
  {path:'message',component:MessageComponent},
  {path:'box',component:BoxmessageComponent},
  { path: 'messages/:sender/:condidatId/:id', component: MessageComponent },
  { path: 'test', component: TestComponent },
  { path: 'candidature', component: CandidatureentrepriseComponent }

  



  





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
