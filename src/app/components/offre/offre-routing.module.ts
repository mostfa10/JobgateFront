import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';

const routes: Routes = [
  {path:"",component:ListeOffreComponent},
  {path:":id",component:DetailoffreComponent},
  {path:"Createoffre",component:AjouterOffreComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreRoutingModule { }
