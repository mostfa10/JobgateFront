import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DernierOffreComponent } from './dernier-offre/dernier-offre.component';
import { SearchComponent } from './search/search.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { CondidatureComponent } from './condidature/condidature.component';
import { ProfilComponent } from './profil/profil.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { AuthGuard } from '../guardss/authe.guard';


const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact',canActivate:[AuthGuard], component: ContactComponent},
    {path: 'search', component:SearchComponent},
    {path: 'dernier', component:DernierOffreComponent},
    {path: 'top', component:TopsearchComponent},
    {path: 'condidature', component:CondidatureComponent},
    {path: 'profil',canActivate:[AuthGuard],component:ProfilComponent},
    {path: 'CreateOffre',canActivate:[AuthGuard], component:AjouterOffreComponent},
    { path: 'offre', loadChildren: () => import('./offre/offre.module').then(m => m.OffreModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
