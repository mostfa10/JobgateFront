import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LayoutComponent } from '../component/layout/layout.component';
import { ContactComponent } from '../component/contact/contact.component';
import { AboutComponent } from '../component/about/about.component';
import { ListeOffreComponent } from '../offre/liste-offre/liste-offre.component';
import { DetailoffreComponent } from '../offre/detailoffre/detailoffre.component';
import { InterfaceComponent } from '../auth/interface/interface.component';
import { CondidatComponent } from '../condidat/condidat.component';
import { EntrepriseComponent } from '../entreprise/entreprise.component';




const routes: Routes = [
  
  {
   path:"",component:HomeComponent,children:[
  {path:"",component:LayoutComponent},
  {path:"about",component:AboutComponent},
  {path:"Contact",component:ContactComponent},
  {path:"inscription",component:InterfaceComponent},
  {path:"condidat",component:CondidatComponent},
  {path:"entreprise",component:EntrepriseComponent},


  
   ]
 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
