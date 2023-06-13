import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CondidatComponent } from './condidat/condidat.component';
import { InterfaceComponent } from './auth/interface/interface.component';





const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"condidat",component:CondidatComponent},
  {path:"inscription",component:InterfaceComponent},



  



 


 


 


  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'offre', loadChildren: () => import('./offre/offre.module').then(m => m.OffreModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
