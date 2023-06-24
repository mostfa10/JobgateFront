import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DernierOffreComponent } from './dernier-offre/dernier-offre.component';
import { SearchComponent } from './search/search.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { ProfilComponent } from './profil/profil.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { AuthGuard } from '../guardss/authe.guard';
import { ListeOffreComponent } from './offre/liste-offre/liste-offre.component';
import { DetailoffreComponent } from './offre/detailoffre/detailoffre.component';


const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact',canActivate:[AuthGuard], component: ContactComponent},
    {path: 'search', component:SearchComponent},
    {path: 'list', component:ListeOffreComponent},
     {path: 'dernier', component:DernierOffreComponent},
    {path: 'top', component:TopsearchComponent},
    {path: 'details/:id', component:DetailoffreComponent},
    {path: 'profil',canActivate:[AuthGuard],component:ProfilComponent},
    {path: 'CreateOffre',canActivate:[AuthGuard], component:AjouterOffreComponent},
    { path: 'offre', loadChildren: () => import('./offre/offre.module').then(m => m.OffreModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
