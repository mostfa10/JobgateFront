import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from '../guardss/authe.guard';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact',canActivate:[AuthGuard], component: ContactComponent},
  {path: "profile",canActivate:[AuthGuard],component:ProfilComponent},
  {path: "profile/:id",canActivate:[AuthGuard],component:ProfilComponent},
  {path: 'offre',pathMatch: 'prefix', loadChildren: () => import('./offre/offre.module').then(m => m.OffreModule) },
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
