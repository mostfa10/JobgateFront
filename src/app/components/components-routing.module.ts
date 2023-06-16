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


const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'search', component:SearchComponent},
    {path: 'dernier', component:DernierOffreComponent},
    {path: 'top', component:TopsearchComponent},
    {path: 'condidature', component:CondidatureComponent},
    {path: 'profil', component:ProfilComponent},


  



    { path: 'offre', loadChildren: () => import('./offre/offre.module').then(m => m.OffreModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
